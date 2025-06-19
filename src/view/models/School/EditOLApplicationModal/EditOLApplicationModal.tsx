import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {Button} from "../../../component/Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTimes} from "@fortawesome/free-solid-svg-icons";
import {Autocomplete} from "@mui/material";
import {FileUploader} from "../../../component/FileUploader/FileUploader";
import {useState} from "react";
import {TextField} from "../../../component/TextField/TextField";

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
interface Student {
    id: number;
    name: string;
    index: string;
}


export default function EditOLApplicationModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [selectedApplication, setSelectedApplication] = useState('');
    const [student, setStudent] = useState<Student[]>([]);
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
    const handleStudentSearch = async (inputValue: string) => {

    };

    return (
        <div>
            <button
                className="rounded-xl w-[40px] h-[40px] text-green-600 hover:bg-green-100"
                onClick={handleOpen}>
                <FontAwesomeIcon icon={faPen}/>
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
                    <section
                        className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                        <section
                            className='w-full flex flex-row flex-wrap items-center justify-center'>
                            <div className="w-full items-start flex my-2">
                                <h3 className="font-medium">Edit O/L Application</h3>
                            </div>

                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextField
                                    name="studentName"
                                    label={'Student name'}
                                    important={"*"}
                                    disabled={true}
                                />
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div
                                        className='mx-3 flex flex-row flex-wrap items-center justify-center w-full'>
                                        <FileUploader label={"Birth certificate photo"}/>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div
                                        className='mx-3 flex flex-row flex-wrap items-center justify-center w-full'>
                                        <FileUploader label={"NIC front side photo"}/>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div
                                        className='mx-3 flex flex-row flex-wrap items-center justify-center w-full'>
                                        <FileUploader label={"NIC back side photo"}/>
                                    </div>
                                </div>
                            </div>

                        </section>
                        <div className='flex flex-row flex-wrap items-center justify-end w-full'>
                            <Button
                                name={'Update'}
                                color={'bg-green-600'}
                            />
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
