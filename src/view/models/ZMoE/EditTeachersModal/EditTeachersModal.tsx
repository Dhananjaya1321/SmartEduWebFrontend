import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from "../../../component/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faTimes } from "@fortawesome/free-solid-svg-icons";
import { TextField } from "../../../component/TextField/TextField";
import { TextArea } from "../../../component/TextArea/TextArea";
import { useEffect, useState } from "react";
import teacherAPIController from "../../../../controller/TeacherAPIController";

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

export default function EditTeachersModal({ teacher }: { teacher: any }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [formData, setFormData] = useState({
        id: '',
        fullName: '',
        contact: '',
        nic: '',
        username: '',
        email: '',
        address: ''
    });

    useEffect(() => {
        if (teacher) {
            setFormData({
                id: teacher.id,
                fullName: teacher.fullName || '',
                contact: teacher.contact || '',
                nic: teacher.nic || '',
                username: teacher.username || '',
                email: teacher.email || '',
                address: teacher.address || ''
            });
        }
    }, [teacher]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdate = async () => {
        const success = await teacherAPIController.update(formData);
        if (success) {
            alert("Teacher updated successfully");
            handleClose();
        } else {
            alert("Update failed");
        }
    };

    return (
        <div>
            <button
                className="rounded-xl w-[40px] h-[40px] text-green-600 hover:bg-green-100"
                onClick={handleOpen}>
                <FontAwesomeIcon icon={faPen} />
            </button>

            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <button
                        className="absolute top-[15px] right-[15px] text-red-500 hover:text-gray-700 p-2 w-[40px]
                        h-[40px] bg-white shadow-lg rounded-lg flex justify-center items-center"
                        onClick={handleClose}
                    >
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    </button>

                    <section className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                        <section className='w-full flex flex-row flex-wrap items-center justify-center'>
                            <div className="w-full items-start flex my-2">
                                <h3 className="font-medium">Edit Teacher</h3>
                            </div>

                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextField
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="ex- Nimal"
                                    label="Name"
                                    important="*"
                                />
                                <TextField
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    placeholder="ex- 070 000 0000"
                                    label="Contact"
                                    important="*"
                                />
                                <TextField
                                    name="nic"
                                    value={formData.nic}
                                    onChange={handleChange}
                                    placeholder="ex- 000000000V"
                                    label="NIC"
                                    important="*"
                                />
                            </div>

                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextField
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="ex- Isuru123"
                                    label="Username"
                                    important="*"
                                />
                                <TextField
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="ex- example@gmail.com"
                                    label="Email"
                                    important="*"
                                />
                                <div className='grow w-[220px] mx-3 my-3 gap-1 flex flex-col justify-start'>
                                    <label className='text-black flex justify-start'>Password</label>
                                    <input
                                        className="text-input p-[7px]"
                                        type="text"
                                        placeholder="*******"
                                        disabled
                                        name="password"
                                    />
                                </div>
                            </div>

                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextArea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="ex- ABC Road, Galle"
                                    label="Address"
                                />
                            </div>
                        </section>

                        <div className='flex flex-row flex-wrap items-center justify-end w-full'>
                            <Button name="Update" color="bg-green-600" onClick={handleUpdate} />
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
