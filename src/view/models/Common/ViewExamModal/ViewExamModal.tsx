import * as React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTimes } from "@fortawesome/free-solid-svg-icons";
import { TextField } from "../../../component/TextField/TextField";
import { Button } from "../../../component/Button/Button";
import { DropdownField } from "../../../component/DropdownField/DropdownField";
import { gradeOptions, paperType } from "../../../context/Arrays";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    maxHeight: "90vh",
    bgcolor: "background.paper",
    border: "2px solid #006CAF",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
};

interface ExamTimetable {
    subject: string;
    paper: string;
    date: string;
    startTime: string;
    endTime: string;
}

interface ViewExamModalProps {
    examData?: {
        grade: string;
        examName: string;
        year: string;
        stream?: string;
        timetable?: ExamTimetable[];
    };
}

export const ViewExamModal: React.FC<ViewExamModalProps> = ({ examData }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            {/* Eye Icon Button */}
            <button
                className="rounded-xl w-[40px] h-[40px] text-blue-600 hover:bg-blue-100"
                onClick={handleOpen}
            >
                <FontAwesomeIcon icon={faEye} />
            </button>

            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/* Close button */}
                    <button
                        className="absolute top-[15px] right-[15px] text-red-500 hover:text-gray-700 p-2 w-[40px]
                        h-[40px] bg-white shadow-lg rounded-lg flex justify-center items-center"
                        onClick={handleClose}
                    >
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    </button>

                    {/* Exam Details */}
                    <section className="bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md">
                        <section className="w-full flex flex-row flex-wrap items-center justify-center">
                            <div className="w-full items-start flex my-2">
                                <h3 className="font-medium">Exam</h3>
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
                                    disabled={true}
                                    value={examData?.grade}
                                />
                                <TextField
                                    name="examName"
                                    placeholder={"ex- First Term Exam"}
                                    label={"Exam name"}
                                    important={"*"}
                                    disabled={true}
                                    value={examData?.examName}
                                />
                                <TextField
                                    name="year"
                                    label={"Year"}
                                    important={"*"}
                                    type={"number"}
                                    disabled={true}
                                    value={examData?.year}
                                />
                            </div>
                        </section>
                    </section>

                    {/* Timetable */}
                    <section className="bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md">
                        <section className="w-full flex flex-row flex-wrap items-center justify-center">
                            <div className="w-full items-start flex my-2">
                                <h3 className="font-medium">Exam Timetable</h3>
                            </div>

                            {/* Table */}
                            <Table className="mt-6">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Subject</TableCell>
                                        <TableCell>Paper</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Start Time</TableCell>
                                        <TableCell>End Time</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {examData?.timetable?.length ? (
                                        examData.timetable.map((row, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{row.subject}</TableCell>
                                                <TableCell>{row.paper}</TableCell>
                                                <TableCell>{row.date}</TableCell>
                                                <TableCell>{row.startTime}</TableCell>
                                                <TableCell>{row.endTime}</TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan={5} align="center">
                                                No timetable available
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </section>
                    </section>

                    {/* Footer */}
                    <section className="bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md">
                        <div className="flex flex-row flex-wrap items-center justify-end w-full">
                            <Button name={"Done"} color={"bg-blue-600"} onClick={handleClose} />
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
};
