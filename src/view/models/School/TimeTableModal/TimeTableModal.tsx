import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '../../../component/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { gradeSubjectMap } from '../../../context/Arrays';
import teacherAPIController from '../../../../controller/TeacherAPIController';
import Typography from '@mui/material/Typography';
import classTimetableAPIController from "../../../../controller/ClassTimetableAPIController";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxHeight: '90vh',
    bgcolor: 'background.paper',
    border: '2px solid #006CAF',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto',
};

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const emptyTimetable = Array.from({ length: 8 }, (_, periodIndex) => ({
    period: periodIndex + 1,
    slots: days.map(() => ({ subject: '', teacherId: '', teacherName: '' })),
}));

interface TimeTableModalProps {
    classOptions: { classId: string; className: string }[];
    grade: string;
}

export default function TimeTableModal({ classOptions = [], grade }: TimeTableModalProps) {
    const [open, setOpen] = useState(false);
    const [selectedClass, setSelectedClass] = useState('');
    const [timetable, setTimetable] = useState(emptyTimetable);
    const [teachers, setTeachers] = useState<{ id: string; fullName: string }[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setSelectedClass('');
        setTimetable(emptyTimetable);
        setError(null);
    };

    const handleSubjectChange = (periodIndex: number, dayIndex: number, value: string) => {
        const updated = [...timetable];
        updated[periodIndex].slots[dayIndex].subject = value;
        setTimetable(updated);
    };

    const handleTeacherChange = (periodIndex: number, dayIndex: number, selectedId: string) => {
        const selectedTeacher = teachers.find(t => t.id === selectedId);

        const updated = [...timetable];
        updated[periodIndex].slots[dayIndex].teacherId = selectedId;
        updated[periodIndex].slots[dayIndex].teacherName = selectedTeacher?.fullName || '';

        setTimetable(updated);
    };



    const normalizedGrade = grade.toLowerCase().replace(" ", "_");
    const subjects = gradeSubjectMap[normalizedGrade] || [];

    useEffect(() => {
        const fetchTeachers = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await teacherAPIController.findAllForSchool();
                if (response) {
                    setTeachers(response);
                } else {
                    setError('Failed to load teachers');
                }
            } catch (err) {
                setError('Error fetching teachers');
            } finally {
                setLoading(false);
            }
        };
        fetchTeachers();
    }, []);

    const handleSave = async () => {
        if (!selectedClass || !grade) {
            setError('Please select a class and fill the timetable');
            return;
        }

        const classObj = classOptions.find(cls => cls.className === selectedClass);
        if (!classObj) {
            setError('Invalid class selected');
            return;
        }

        const classId = classObj.classId;

        setLoading(true);
        setError(null);

        try {
            const transformedTimetable = {
                classId: classId,
                timetablePeriods: timetable.map(periodObj => ({
                    period: periodObj.period,
                    slots: periodObj.slots.map(slot => ({
                        subject: slot.subject,
                        teacherId: slot.teacherId || "",      // You must ensure this is present
                        teacherName: slot.teacherName || ""       // Rename from "teacher" to "teacherName"
                    }))
                }))
            };

            const success = await classTimetableAPIController.saveClassTimetable(transformedTimetable);

            if (success) {
                alert('Timetable saved successfully');
                handleClose();
            } else {
                setError('Failed to save timetable');
            }
        } catch (err) {
            console.error(err);
            setError('Error saving timetable');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div>
            <button
                className="rounded-xl w-max h-max p-3 bg-green-600 text-white hover:bg-green-700"
                onClick={handleOpen}
            >
                Create Time Table
            </button>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title">
                <Box sx={style}>
                    <button
                        className="absolute top-[15px] right-[15px] text-red-500 hover:text-gray-700 p-2 w-[40px] h-[40px] bg-white shadow-lg rounded-lg flex justify-center items-center"
                        onClick={handleClose}
                    >
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    </button>
                    <section className="bg-white w-full mt-5 p-5 rounded-xl shadow-md">
                        <h3 className="text-lg font-semibold mb-3">Create Time Table</h3>

                        {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}
                        {loading && <Typography>Loading...</Typography>}

                        <label className="block mb-2 text-sm font-medium">Select Class <span className="text-red-500">*</span></label>
                        <select
                            className="border rounded px-2 py-2 w-full mb-4"
                            value={selectedClass}
                            onChange={(e) => setSelectedClass(e.target.value)}
                        >
                            <option value="">-- Select Class --</option>
                            {classOptions.map((cls, idx) => (
                                <option key={idx} value={cls.className}>
                                    {cls.className}
                                </option>
                            ))}
                        </select>

                        {/* Timetable Grid */}
                        <div className="w-full mt-6">
                            <div className="flex font-semibold text-center bg-gray-100">
                                <div className="w-[60px] p-2 border">#</div>
                                {days.map((day, index) => (
                                    <div key={index} className="flex-1 p-2 border">
                                        {day}
                                    </div>
                                ))}
                            </div>
                            {timetable.map((row, periodIndex) => (
                                <div key={periodIndex} className="w-full">
                                    <div className="flex text-center">
                                        <div className="w-[60px] p-2 border font-semibold flex items-center justify-center">
                                            {row.period}
                                        </div>
                                        {row.slots.map((slot, dayIndex) => (
                                            <div
                                                key={dayIndex}
                                                className="w-[209px] p-2 border flex flex-col gap-1"
                                            >
                                                <select
                                                    className="border rounded px-2 py-1"
                                                    value={slot.subject}
                                                    onChange={(e) =>
                                                        handleSubjectChange(
                                                            periodIndex,
                                                            dayIndex,
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">Subject</option>
                                                    {subjects.map((subject, idx) => (
                                                        <option key={idx} value={subject}>
                                                            {subject}
                                                        </option>
                                                    ))}
                                                </select>
                                                <select
                                                    className="border rounded px-2 py-1"
                                                    value={slot.teacherId}
                                                    onChange={(e) =>
                                                        handleTeacherChange(
                                                            periodIndex,
                                                            dayIndex,
                                                            e.target.value // teacherId is passed
                                                        )
                                                    }
                                                >
                                                    <option value="">Teacher</option>
                                                    {teachers.map((teacher, idx) => (
                                                        <option key={idx} value={teacher.id}>
                                                            {teacher.fullName}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        ))}
                                    </div>
                                    {row.period === 4 && (
                                        <div className="text-center bg-lime-200 py-3 font-semibold">
                                            Interval
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="w-full flex justify-end mt-5">
                            <Button
                                name={loading ? 'Saving...' : 'Create'}
                                color={'bg-green-600'}
                                onClick={handleSave}
                            />
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
