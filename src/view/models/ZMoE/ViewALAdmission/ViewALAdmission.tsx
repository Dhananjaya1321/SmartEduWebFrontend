import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {TextArea} from "../../../component/TextArea/TextArea";
import {Button} from "../../../component/Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faTimes} from "@fortawesome/free-solid-svg-icons";
import {TextField} from "../../../component/TextField/TextField";
import {DropdownField} from "../../../component/DropdownField/DropdownField";
import {Table, TableBody, TableCell, TableHead, TableRow, Collapse} from "@mui/material";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    maxHeight: '90vh', // Ensure the modal doesn't exceed the viewport height
    bgcolor: 'background.paper',
    border: '2px solid #006CAF',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto' // Enable scrolling if content overflows
};
// Simulated data from backend
const alAdmissionData = {
    streams: [
        {
            streamName: "Science",
            classes: [
                {
                    className: "M1",
                    students: [
                        { name: "Nimal", score: 245 },
                        { name: "Kamal", score: 230 }
                    ]
                },
                {
                    className: "M2",
                    students: [
                        { name: "Sunil", score: 210 }
                    ]
                }
            ]
        },
        {
            streamName: "Commerce",
            classes: [
                {
                    className: "C1",
                    students: [
                        { name: "Kasun", score: 200 }
                    ]
                }
            ]
        }
    ]
};


export default function ViewALAdmission() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button
                className="rounded-xl w-[40px] h-[40px] text-blue-600 hover:bg-blue-100"
                onClick={handleOpen}>
                <FontAwesomeIcon icon={faEye}/>
            </button>
            <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <button
                        className="absolute top-[15px] right-[15px] text-red-500 hover:text-gray-700 p-2 w-[40px]
                        h-[40px] bg-white shadow-lg rounded-lg flex justify-center items-center"
                        onClick={handleClose}
                    >
                        <FontAwesomeIcon icon={faTimes} size="lg"/>
                    </button>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        View A/L Admissions
                    </Typography>
                    <section
                        className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                        <section
                            className='w-full flex flex-row flex-wrap items-center justify-center'>
                            <div className="w-full items-start flex my-2">
                                <h3 className="font-medium">A/L Admissions</h3>
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextField
                                    name="schoolName"
                                    placeholder={'School name'}
                                    important={"*"}
                                    label={'School name'}
                                    disabled={true}
                                />
                                <TextField
                                    name="year"
                                    placeholder={'2025'}
                                    important={"*"}
                                    label={'Year'}
                                    disabled={true}
                                />
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextField
                                    name="classesCount"
                                    placeholder={'5'}
                                    important={"*"}
                                    label={'Classes count'}
                                    disabled={true}
                                />
                                <TextField
                                    name="studentCount"
                                    placeholder={'121'}
                                    important={"*"}
                                    label={'Student count'}
                                    disabled={true}
                                />
                            </div>
                        </section>
                        <section
                            className='w-full flex flex-row flex-wrap items-center justify-center'>
                            {alAdmissionData.streams.map((stream, streamIdx) => (
                                <div key={streamIdx} className="w-full items-start flex flex-col my-5">
                                    {/* Stream Name */}
                                    <div className="w-full items-start flex">
                                        <h3 className="font-medium text-lg text-blue-700">{stream.streamName}</h3>
                                    </div>

                                    {/* Classes in Stream */}
                                    {stream.classes.map((cls, clsIdx) => (
                                        <div key={clsIdx} className="w-full items-start flex flex-col my-4">
                                            <div className="w-full items-start flex my-2">
                                                <h3 className="font-medium">{cls.className}</h3>
                                            </div>
                                            <Table size="small">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Student Name</TableCell>
                                                        <TableCell>Total Score</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {cls.students.map((student, studentIdx) => (
                                                        <TableRow key={studentIdx}>
                                                            <TableCell>{student.name}</TableCell>
                                                            <TableCell>{student.score}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </section>
                        <div className='flex flex-row flex-wrap items-center justify-end w-full'>
                            <Button
                                name={'Done'}
                                color={'bg-blue-600'}
                                onClick={handleClose}
                            />
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
