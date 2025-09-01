import React, { useState } from "react";
import { Button } from "../../../component/Button/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import {ClassTimeTable} from "../../../component/ClassTimeTable/ClassTimeTable";
import TimeTableModal from "../../../models/School/TimeTableModal/TimeTableModal";

interface ClassGroup {
    grade: string;
    classRange: string[];
    classCount: number;
    classes: {
        className: string;
        timetable: {
            period: number;
            slots: {
                subject: string;
                teacher: string;
            }[];
        }[]; // <- Now an array of 8 period objects
    }[];
}

const classData: ClassGroup[] = [
    {
        grade: "Grade 10",
        classRange: ["A"],
        classCount: 1,
        classes: [
            {
                className: "10-A",
                timetable: [
                    {
                        period: 1,
                        slots: [
                            { subject: "Sinhala", teacher: "Teacher" },
                            { subject: "English", teacher: "Teacher" },
                            { subject: "Math", teacher: "Teacher" },
                            { subject: "Science", teacher: "Teacher" },
                            { subject: "ICT", teacher: "Teacher" },
                        ],
                    },
                    {
                        period: 2,
                        slots: [
                            { subject: "Math", teacher: "Teacher" },
                            { subject: "English", teacher: "Teacher" },
                            { subject: "Science", teacher: "Teacher" },
                            { subject: "ICT", teacher: "Teacher" },
                            { subject: "Geography", teacher: "Teacher" },
                        ],
                    },
                    {
                        period: 3,
                        slots: [
                            { subject: "Science", teacher: "Teacher" },
                            { subject: "ICT", teacher: "Teacher" },
                            { subject: "English", teacher: "Teacher" },
                            { subject: "Math", teacher: "Teacher" },
                            { subject: "Sinhala", teacher: "Teacher" },
                        ],
                    },
                    {
                        period: 4,
                        slots: [
                            { subject: "Geography", teacher: "Teacher" },
                            { subject: "Math", teacher: "Teacher" },
                            { subject: "Sinhala", teacher: "Teacher" },
                            { subject: "Science", teacher: "Teacher" },
                            { subject: "ICT", teacher: "Teacher" },
                        ],
                    },
                    {
                        period: 5,
                        slots: [

                        ],
                    },
                    {
                        period: 6,
                        slots: [
                            { subject: "ICT", teacher: "Teacher" },
                            { subject: "Math", teacher: "Teacher" },
                            { subject: "Sinhala", teacher: "Teacher" },
                            { subject: "English", teacher: "Teacher" },
                            { subject: "Science", teacher: "Teacher" },
                        ],
                    },
                    {
                        period: 7,
                        slots: [
                            { subject: "Math", teacher: "Teacher" },
                            { subject: "English", teacher: "Teacher" },
                            { subject: "Geography", teacher: "Teacher" },
                            { subject: "Science", teacher: "Teacher" },
                            { subject: "ICT", teacher: "Teacher" },
                        ],
                    },
                    {
                        period: 8,
                        slots: [
                            { subject: "Sinhala", teacher: "Teacher" },
                            { subject: "Math", teacher: "Teacher" },
                            { subject: "Science", teacher: "Teacher" },
                            { subject: "ICT", teacher: "Teacher" },
                            { subject: "English", teacher: "Teacher" },
                        ],
                    },
                    {
                        period: 9,
                        slots: [
                            { subject: "Sinhala", teacher: "Teacher" },
                            { subject: "Math", teacher: "Teacher" },
                            { subject: "Science", teacher: "Teacher" },
                            { subject: "ICT", teacher: "Teacher" },
                            { subject: "English", teacher: "Teacher" },
                        ],
                    },
                ]
            },
        ],
    },
    {
        grade: "Grade 11",
        classRange: ["A","B"],
        classCount: 2,
        classes: [
            {
                className: "11-A",
                timetable: [
                    {
                        period: 1,
                        slots: [
                            { subject: "Sinhala", teacher: "Teacher" },
                            { subject: "English", teacher: "Teacher" },
                            { subject: "Math", teacher: "Teacher" },
                            { subject: "Science", teacher: "Teacher" },
                            { subject: "ICT", teacher: "Teacher" },
                        ],
                    },
                    {
                        period: 2,
                        slots: [
                            { subject: "Math", teacher: "Teacher" },
                            { subject: "English", teacher: "Teacher" },
                            { subject: "Science", teacher: "Teacher" },
                            { subject: "ICT", teacher: "Teacher" },
                            { subject: "Geography", teacher: "Teacher" },
                        ],
                    },
                    {
                        period: 3,
                        slots: [
                            { subject: "Science", teacher: "Teacher" },
                            { subject: "ICT", teacher: "Teacher" },
                            { subject: "English", teacher: "Teacher" },
                            { subject: "Math", teacher: "Teacher" },
                            { subject: "Sinhala", teacher: "Teacher" },
                        ],
                    },
                    {
                        period: 4,
                        slots: [
                            { subject: "Geography", teacher: "Teacher" },
                            { subject: "Math", teacher: "Teacher" },
                            { subject: "Sinhala", teacher: "Teacher" },
                            { subject: "Science", teacher: "Teacher" },
                            { subject: "ICT", teacher: "Teacher" },
                        ],
                    },
                    {
                        period: 5,
                        slots: [

                        ],
                    },
                    {
                        period: 6,
                        slots: [
                            { subject: "ICT", teacher: "Teacher" },
                            { subject: "Math", teacher: "Teacher" },
                            { subject: "Sinhala", teacher: "Teacher" },
                            { subject: "English", teacher: "Teacher" },
                            { subject: "Science", teacher: "Teacher" },
                        ],
                    },
                    {
                        period: 7,
                        slots: [
                            { subject: "Math", teacher: "Teacher" },
                            { subject: "English", teacher: "Teacher" },
                            { subject: "Geography", teacher: "Teacher" },
                            { subject: "Science", teacher: "Teacher" },
                            { subject: "ICT", teacher: "Teacher" },
                        ],
                    },
                    {
                        period: 8,
                        slots: [
                            { subject: "Sinhala", teacher: "Teacher" },
                            { subject: "Math", teacher: "Teacher" },
                            { subject: "Science", teacher: "Teacher" },
                            { subject: "ICT", teacher: "Teacher" },
                            { subject: "English", teacher: "Teacher" },
                        ],
                    },
                    {
                        period: 9,
                        slots: [
                            { subject: "Sinhala", teacher: "Teacher" },
                            { subject: "Math", teacher: "Teacher" },
                            { subject: "Science", teacher: "Teacher" },
                            { subject: "ICT", teacher: "Teacher" },
                            { subject: "English", teacher: "Teacher" },
                        ],
                    },
                ]
            },
            {
                className: "11-B",
                timetable: [
                    {
                        period: 1,
                        slots: [
                            { subject: "Sinhala", teacher: "Teacher" },
                            { subject: "English", teacher: "Teacher" },
                            { subject: "Math", teacher: "Teacher" },
                            { subject: "Science", teacher: "Teacher" },
                            { subject: "ICT", teacher: "Teacher" },
                        ],
                    },
                    {
                        period: 2,
                        slots: [
                            { subject: "Math", teacher: "Teacher" },
                            { subject: "English", teacher: "Teacher" },
                            { subject: "Science", teacher: "Teacher" },
                            { subject: "ICT", teacher: "Teacher" },
                            { subject: "Geography", teacher: "Teacher" },
                        ],
                    },
                    {
                        period: 3,
                        slots: [
                            { subject: "Science", teacher: "Teacher" },
                            { subject: "ICT", teacher: "Teacher" },
                            { subject: "English", teacher: "Teacher" },
                            { subject: "Math", teacher: "Teacher" },
                            { subject: "Sinhala", teacher: "Teacher" },
                        ],
                    },
                    {
                        period: 4,
                        slots: [
                            { subject: "Geography", teacher: "Teacher" },
                            { subject: "Math", teacher: "Teacher" },
                            { subject: "Sinhala", teacher: "Teacher" },
                            { subject: "Science", teacher: "Teacher" },
                            { subject: "ICT", teacher: "Teacher" },
                        ],
                    },
                    {
                        period: 5,
                        slots: [

                        ],
                    },
                    {
                        period: 6,
                        slots: [
                            { subject: "ICT", teacher: "Teacher" },
                            { subject: "Math", teacher: "Teacher" },
                            { subject: "Sinhala", teacher: "Teacher" },
                            { subject: "English", teacher: "Teacher" },
                            { subject: "Science", teacher: "Teacher" },
                        ],
                    },
                    {
                        period: 7,
                        slots: [
                            { subject: "Math", teacher: "Teacher" },
                            { subject: "English", teacher: "Teacher" },
                            { subject: "Geography", teacher: "Teacher" },
                            { subject: "Science", teacher: "Teacher" },
                            { subject: "ICT", teacher: "Teacher" },
                        ],
                    },
                    {
                        period: 8,
                        slots: [
                            { subject: "Sinhala", teacher: "Teacher" },
                            { subject: "Math", teacher: "Teacher" },
                            { subject: "Science", teacher: "Teacher" },
                            { subject: "ICT", teacher: "Teacher" },
                            { subject: "English", teacher: "Teacher" },
                        ],
                    },
                    {
                        period: 9,
                        slots: [
                            { subject: "Sinhala", teacher: "Teacher" },
                            { subject: "Math", teacher: "Teacher" },
                            { subject: "Science", teacher: "Teacher" },
                            { subject: "ICT", teacher: "Teacher" },
                            { subject: "English", teacher: "Teacher" },
                        ],
                    },
                ]
            },
        ],
    },
];

export const TimeTable = () => {
    const [selectedGrade, setSelectedGrade] = useState<ClassGroup | null>(null);

    return (
        <section className="h-max flex w-[95%] flex-col justify-center">
            <section className="flex flex-row gap-5">
                {/* Sidebar */}
                <section className="bg-white flex flex-col items-center mt-5 p-5 rounded-xl shadow-md w-[250px]">
                    <div className="flex w-full flex-row justify-between font-semibold mb-2">
                        <h3>Grade</h3>
                        <h3>Class</h3>
                        <h3>Count</h3>
                    </div>
                    {classData.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedGrade(item)}
                            className="mt-2 flex flex-row justify-between w-full px-6 py-3 bg-[#F0F4F9] text-black hover:bg-blue-950 hover:text-white font-medium border-b rounded-md"
                        >
                            <h3>{item.grade}</h3>
                            <h3>{item.classRange[0]} - {item.classRange[item.classRange.length - 1]}</h3>
                            <h3>{item.classCount}</h3>
                        </button>
                    ))}
                </section>

                {/* Timetable Panel */}
                {selectedGrade && (
                    <section className="w-[900px] bg-white flex flex-col mt-5 p-5 rounded-xl shadow-md">
                        <section className="text-[#005285] flex flex-row justify-between w-full mb-4">
                            <h3>{selectedGrade.grade} Classes</h3>
                            <TimeTableModal classOptions={selectedGrade.classRange} grade={selectedGrade.grade} />
                        </section>

                        <section className="flex flex-col w-full gap-3">
                            {selectedGrade.classes.map((cls, idx) => (
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
                                        <ClassTimeTable table={cls.timetable} />
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </section>
                    </section>
                )}
            </section>
        </section>
    );
};
