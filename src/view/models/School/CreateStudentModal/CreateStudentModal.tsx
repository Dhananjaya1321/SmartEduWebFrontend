import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {TextArea} from "../../../component/TextArea/TextArea";
import {Button} from "../../../component/Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faPen, faTimes, faTrash} from "@fortawesome/free-solid-svg-icons";
import {TextField} from "../../../component/TextField/TextField";
import {DropdownField} from "../../../component/DropdownField/DropdownField";
import {Table, TableBody, TableCell, TableHead, TableRow, IconButton, Tooltip} from "@mui/material";
import {gradeOptions} from "../../../context/Arrays";

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

export default function CreateStudentModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const classOptions = [
        { label: 'A', value: 'A' },
        { label: 'B', value: 'B' },
        { label: 'C', value: 'C' },
    ];
    return (
        <div>
            <button
                className={`h-[46px] bg-green-600 px-6 py-3 rounded-md text-white font-medium mx-3 mt-2`}
                onClick={handleOpen}
            >
                Add New Student
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
                        Create Class
                    </Typography>
                    <section
                        className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                        <section
                            className='w-full flex flex-row flex-wrap items-center justify-center'>
                            <section className='w-full flex flex-row flex-wrap items-center justify-center'>
                                <div className="w-full items-start flex my-2">
                                    <h3 className="font-medium">Student Basic Information</h3>
                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <TextField name="entryDate" type="date" label="Date the student entered school" />
                                    <TextField name="fullName" label="Full Name" />
                                    <TextField name="fullNameWithInitial" label="Full Name With Initial" />
                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <TextField name="dob" type="date" label="Birth of Date" />
                                </div>
                            </section>
                        </section>
                    </section>
                    <section
                        className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                        <section className='w-full flex flex-row flex-wrap items-center justify-center'>
                            <div className="w-full items-start flex my-2">
                                <h3 className="font-medium">Parents Details</h3>
                            </div>
                            <div className="mx-2 w-full flex flex-row gap-3 items-center">
                                <TextField name="motherName" label="Mother’s Name" />
                                <TextField name="motherContact" label="Mother’s Contact Number" />
                                <TextField name="fatherName" label="Father’s Name" />
                            </div>
                            <div className="mx-2 w-full flex flex-row gap-3 items-center">
                                <TextField name="fatherContact" label="Father’s Contact Number" />
                                <TextField name="address" label="Address" />
                            </div>
                        </section>
                    </section>
                    <section
                        className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                        <section className='w-full flex flex-row flex-wrap items-center justify-center'>
                            <div className="w-full items-start flex my-2">
                                <h3 className="font-medium">Other Details</h3>
                            </div>
                            <div className="mx-2 w-full flex flex-row gap-3 items-center">
                                <TextField name="regNumber" label="Student Registration Number" />
                                <DropdownField label="Grade" options={gradeOptions} important="*" />
                                <DropdownField label="Class" options={classOptions} important="*" />
                            </div>
                        </section>
                    </section>
                    <section
                        className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                        <div className='flex flex-row flex-wrap items-center justify-end w-full'>
                            <Button
                                name={'Create Class'}
                                color={'bg-green-600'}
                            />
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
