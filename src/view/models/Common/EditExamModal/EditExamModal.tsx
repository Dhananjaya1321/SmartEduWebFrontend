import * as React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTimes, faTrash} from "@fortawesome/free-solid-svg-icons";
import {TextField} from "../../../component/TextField/TextField";
import {Button} from "../../../component/Button/Button";
import {DropdownField} from "../../../component/DropdownField/DropdownField";
import {
    alStreams,
    alStreamSubjects,
    gradeOptions,
    gradeSubjectMap,
    paperType
} from "../../../context/Arrays";
import {useEffect, useState} from "react";
import {Table, TableBody, TableCell, TableHead, TableRow, IconButton, Tooltip} from "@mui/material";
import examsAPIController from "../../../../controller/ExamsAPIController";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    maxHeight: '90vh',
    bgcolor: 'background.paper',
    border: '2px solid #006CAF',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto'
};

export const EditExamModal = ({examData}: { examData: any }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // exam fields
    const [examId, setExamId] = useState("");
    const [examName, setExamName] = useState("");
    const [examYear, setExamYear] = useState("");
    const [selectedGrade, setSelectedGrade] = useState("");
    const [selectedStream, setSelectedStream] = useState("");
    const [examLevel, setExamLevel] = useState("");

    // timetable
    const [subjects, setSubjects] = useState<string[]>([]);
    const [selectedSubject, setSelectedSubject] = useState("");
    const [selectedPaper, setSelectedPaper] = useState("");
    const [examDate, setExamDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const [examSubjects, setExamSubjects] = useState<any[]>([]);

    const showStream = selectedGrade === "grade_12" || selectedGrade === "grade_13";

    // prefill when modal opens
    useEffect(() => {
        if (examData) {
            setExamId(examData.id || "");
            setExamName(examData.examName || "");
            setExamYear(examData.year || "");
            setSelectedGrade(examData.grade || "");
            setSelectedStream(examData.stream || "");
            setExamLevel(examData.level || "");
            setExamSubjects(examData.timetable || []);
        }
    }, [examData]);

    useEffect(() => {
        if (!showStream) {
            const subjectList = gradeSubjectMap[selectedGrade] || [];
            setSubjects(subjectList);
            setSelectedStream("");
        } else {
            setSubjects([]);
        }
        setSelectedSubject("");
    }, [selectedGrade]);

    useEffect(() => {
        if (showStream && selectedStream) {
            setSubjects(alStreamSubjects[selectedStream] || []);
            setSelectedSubject("");
        }
    }, [selectedStream]);

    const handleAddSubject = () => {
        if (!selectedSubject || !selectedPaper || !examDate || !startTime || !endTime) return;

        const newEntry = {
            stream: selectedStream,
            subject: selectedSubject,
            paper: selectedPaper,
            date: examDate,
            startTime,
            endTime
        };

        setExamSubjects(prev => [...prev, newEntry]);
        setSelectedSubject("");
        setSelectedPaper("");
        setExamDate("");
        setStartTime("");
        setEndTime("");
    };

    const handleRemoveSubject = (index: number) => {
        setExamSubjects(prev => prev.filter((_, i) => i !== index));
    };

    const handleUpdateExam =async () => {
        const payload = {
            id: examId,
            examName,
            year: examYear,
            grade: selectedGrade,
            level: examLevel,
            timetable: examSubjects
        };

        console.log("Updated Exam Payload:", payload);
        const response = await examsAPIController.update(payload);
        if (response) {
            setSelectedSubject("");
            setSelectedPaper("");
            setExamDate("");
            setStartTime("");
            setEndTime("");
            setSelectedStream("");
            handleClose();
        }
    };

    return (
        <div>
            <button
                className="rounded-xl w-[40px] h-[40px] text-green-600 hover:bg-green-100"
                onClick={handleOpen}>
                <FontAwesomeIcon icon={faPen}/>
            </button>

            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <button
                        className="absolute top-[15px] right-[15px] text-red-500 hover:text-gray-700 p-2 w-[40px]
                        h-[40px] bg-white shadow-lg rounded-lg flex justify-center items-center"
                        onClick={handleClose}>
                        <FontAwesomeIcon icon={faTimes} size="lg"/>
                    </button>

                    <section
                        className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                        <section className='w-full flex flex-row flex-wrap items-center justify-center'>
                            <div className="w-full items-start flex my-2">
                                <h3 className="font-medium">Update Exam</h3>
                            </div>
                            <div className="flex flex-row flex-wrap items-center justify-center w-full">
                                <DropdownField
                                    label="Select Grade"
                                    important="*"
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={gradeOptions}
                                    value={selectedGrade}
                                    onChange={(e) => setSelectedGrade(e.target.value)}
                                />
                                <TextField
                                    name="examName"
                                    placeholder="Exam name"
                                    label="Exam name"
                                    important="*"
                                    value={examName}
                                    onChange={(e) => setExamName(e.target.value)}
                                />
                                <TextField
                                    name="year"
                                    label="Year"
                                    important="*"
                                    type="text"
                                    value={examYear}
                                    onChange={(e) => setExamYear(e.target.value)}
                                />
                            </div>
                        </section>
                    </section>
                    <section
                        className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                        <section className='w-full flex flex-row flex-wrap items-center justify-center'>
                            <div className="w-full items-start flex my-2">
                                <h3 className="font-medium">Create Time Table</h3>
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                {showStream && (
                                    <DropdownField
                                        label="Select A/L Stream"
                                        important="*"
                                        mt={"12px"}
                                        mb={"12px"}
                                        ml={"12px"}
                                        mr={"12px"}
                                        options={[{label: "Select...", value: ""}, ...alStreams]}
                                        value={selectedStream}
                                        onChange={(e) => setSelectedStream(e.target.value)}
                                    />
                                )}
                                <DropdownField
                                    label="Select Subject"
                                    important="*"
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={[{label: "Select...", value: ""}, ...subjects.map(s => ({
                                        label: s,
                                        value: s
                                    }))]}
                                    value={selectedSubject}
                                    onChange={(e) => setSelectedSubject(e.target.value)}
                                />
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <DropdownField
                                    label="Select Paper"
                                    important="*"
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={paperType}
                                    value={selectedPaper}
                                    onChange={(e) => setSelectedPaper(e.target.value)}
                                />
                                <TextField
                                    name="date"
                                    label="Date"
                                    important="*"
                                    type="date"
                                    value={examDate}
                                    onChange={(e) => setExamDate(e.target.value)}
                                />
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextField
                                    name="startTime"
                                    label="Start time"
                                    important="*"
                                    type="time"
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                />
                                <TextField
                                    name="endTime"
                                    label="End time"
                                    important="*"
                                    type="time"
                                    value={endTime}
                                    onChange={(e) => setEndTime(e.target.value)}
                                />
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-end w-full'>
                                <Button name="Add Subject" color="bg-green-600" onClick={handleAddSubject}/>
                            </div>

                            {examSubjects.length > 0 && (
                                <Table className="mt-6">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Subject</TableCell>
                                            <TableCell>Paper</TableCell>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Start Time</TableCell>
                                            <TableCell>End Time</TableCell>
                                            <TableCell>Remove</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {examSubjects.map((row, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{row.subject}</TableCell>
                                                <TableCell>{row.paper}</TableCell>
                                                <TableCell>{row.date}</TableCell>
                                                <TableCell>{row.startTime}</TableCell>
                                                <TableCell>{row.endTime}</TableCell>
                                                <TableCell>
                                                    <Tooltip title="Remove">
                                                        <IconButton onClick={() => handleRemoveSubject(index)}>
                                                            <FontAwesomeIcon icon={faTrash}
                                                                             className="text-red-600"/>
                                                        </IconButton>
                                                    </Tooltip>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            )}
                        </section>
                    </section>
                    <section
                        className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                        <div className='flex flex-row flex-wrap items-center justify-end w-full'>
                            <Button name="Update" color="bg-green-600" onClick={handleUpdateExam}/>
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
};
