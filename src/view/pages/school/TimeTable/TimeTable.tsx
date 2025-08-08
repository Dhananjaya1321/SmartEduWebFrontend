import React, { useState, useEffect } from "react";
import { Button } from "../../../component/Button/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ClassTimeTable } from "../../../component/ClassTimeTable/ClassTimeTable";
import TimeTableModal from "../../../models/School/TimeTableModal/TimeTableModal";
import gradeAPIController from "../../../../controller/GradeAPIController";
import classTimetableAPIController from "../../../../controller/ClassTimetableAPIController";

interface ClassGroup {
    gradeId: string;
    grade: string;
    classRange: string[];
    classCount: number;
    classes: {
        className: string;
        classId: string;
        timetable?: {
            period: number;
            slots: {
                subject: string;
                teacher: string;
            }[];
        }[];
    }[];
}

interface ClassOption {
    classId: string;
    className: string;
}

export const TimeTable = () => {
    const [grades, setGrades] = useState<ClassGroup[]>([]);
    const [selectedGrade, setSelectedGrade] = useState<ClassGroup | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchGrades = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await gradeAPIController.getAllGrades();
            if (response) {
                const transformedGrades: ClassGroup[] = response.map((grade: any) => {
                    const classRange = grade.classRooms
                        .map((cls: any) => cls.className.split('-')[1] || 'N/A')
                        .sort();

                    return {
                        grade: `Grade ${grade.gradeName}`,
                        gradeId: grade.id,
                        classRange,
                        classCount: grade.classRooms.length,
                        classes: grade.classRooms.map((cls: any) => ({
                            className: cls.className,
                            classId: cls.id || cls._id, // fallback if using _id from Mongo
                            timetable: cls.timetable
                        }))
                    };
                });

                setGrades(transformedGrades);
                setSelectedGrade(transformedGrades.find(g => g.classCount > 0) || transformedGrades[0] || null);
            } else {
                setError('Failed to load grades');
            }
        } catch (err) {
            setError('Error fetching grades');
        } finally {
            setLoading(false);
        }
    };

    const handleGradeSelection = async (grade: ClassGroup) => {
        setSelectedGrade(grade);
        setLoading(true);

        try {
            const response = await classTimetableAPIController.findAllTimetablesByGradeId(grade.gradeId);

            if (response) {
                const updatedClasses = grade.classes.map(cls => {
                    const matchingTimetable = response.find(
                        (tt: any) => tt.classId === cls.classId
                    );

                    return {
                        ...cls,
                        timetable: matchingTimetable?.timetablePeriods || null
                    };
                });

                const updatedGrade: ClassGroup = {
                    ...grade,
                    classes: updatedClasses
                };

                setSelectedGrade(updatedGrade);
            }
        } catch (error) {
            console.error("Failed to load timetables", error);
            setError("Failed to load timetables");
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchGrades();
    }, []);

    return (
        <section className="h-max flex w-[95%] flex-col justify-center">
            {error && (
                <Typography color="error" sx={{ mb: 2 }}>
                    {error}
                </Typography>
            )}
            <section className="flex flex-row gap-5">
                {/* Sidebar */}
                <section className="bg-white flex flex-col items-center mt-5 p-5 rounded-xl shadow-md w-[250px]">
                    <div className="flex w-full flex-row justify-between font-semibold mb-2">
                        <h3>Grade</h3>
                        <h3>Class</h3>
                        <h3>Count</h3>
                    </div>
                    {loading ? (
                        <Typography>Loading grades...</Typography>
                    ) : grades.length === 0 ? (
                        <Typography>No grades available</Typography>
                    ) : (
                        grades.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handleGradeSelection(item)}
                                className="mt-2 flex flex-row justify-between w-full px-6 py-3 bg-[#F0F4F9] text-black hover:bg-blue-950 hover:text-white font-medium border-b rounded-md"
                            >
                                <h3>{item.grade}</h3>
                                <h3>{item.classRange.length > 0 ? `${item.classRange[0]} - ${item.classRange[item.classRange.length - 1]}` : '-'}</h3>
                                <h3>{item.classCount}</h3>
                            </button>
                        ))
                    )}
                </section>

                {/* Timetable Panel */}
                {selectedGrade && (
                    <section className="w-[900px] bg-white flex flex-col mt-5 p-5 rounded-xl shadow-md">
                        <section className="text-[#005285] flex flex-row justify-between w-full mb-4">
                            <h3>{selectedGrade.grade} Classes</h3>

                            <TimeTableModal
                                classOptions={selectedGrade.classes.map(cls => ({
                                    classId: cls.classId,
                                    className: cls.className
                                }))}
                                grade={selectedGrade.grade}
                            />
                        </section>

                        <section className="flex flex-col w-full gap-3">
                            {loading ? (
                                <Typography>Loading timetables...</Typography>
                            ) : selectedGrade.classes.length === 0 ? (
                                <Typography>No classes available</Typography>
                            ) : (
                                selectedGrade.classes.map((cls, idx) => (
                                    <Accordion key={idx} className="w-full">
                                        <AccordionSummary
                                            expandIcon={<span className="font-bold">▼</span>}
                                            aria-controls={`panel-${idx}-content`}
                                            id={`panel-${idx}-header`}
                                        >
                                            <Typography component="span" className="font-medium">
                                                {cls.className} Time Table
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {cls.timetable ? (
                                                <ClassTimeTable table={cls.timetable} />
                                            ) : (
                                                <Typography>No timetable available</Typography>
                                            )}
                                        </AccordionDetails>
                                    </Accordion>
                                ))
                            )}
                        </section>
                    </section>
                )}
            </section>
        </section>
    );
};
