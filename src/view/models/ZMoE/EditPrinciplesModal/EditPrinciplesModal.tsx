import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Button} from "../../../component/Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTimes} from "@fortawesome/free-solid-svg-icons";
import {TextField} from "../../../component/TextField/TextField";
import {TextArea} from "../../../component/TextArea/TextArea";
import {useState, useEffect} from "react";
import principalAPIController from "../../../../controller/PrincipalAPIController";

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

export default function EditPrinciplesModal({principal}: { principal: any }) {
    const [open, setOpen] = useState(false);
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

    // Initialize form data when modal opens
    useEffect(() => {
        if (open && principal) {
            setFormData({
                id: principal.id || '',
                fullName: principal.fullName || '',
                contact: principal.contact || '',
                nic: principal.nic || '',
                username: principal.username || '',
                email: principal.email || '',
                address: principal.address || ''
            });
        }
    }, [open, principal]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleUpdate = async () => {
        const payload = {
            id: formData.id,
            schoolId: principal.schoolId,
            fullName: formData.fullName,
            contact: formData.contact,
            nic: formData.nic,
            username: formData.username,
            email: formData.email,
            address:formData.address,
        };
        const success = await principalAPIController.update(payload);
        if (success) {
            alert("Principal updated successfully");
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
                <FontAwesomeIcon icon={faPen}/>
            </button>
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <button
                        className="absolute top-[15px] right-[15px] text-red-500 hover:text-gray-700 p-2 w-[40px] h-[40px] bg-white shadow-lg rounded-lg flex justify-center items-center"
                        onClick={handleClose}>
                        <FontAwesomeIcon icon={faTimes} size="lg"/>
                    </button>

                    <Typography variant="h6">Edit Principal</Typography>

                    <section
                        className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                        <div className="w-full items-start flex my-2">
                            <h3 className="font-medium">Edit Details</h3>
                        </div>

                        <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                            <TextField
                                name="fullName"
                                label="Name"
                                important="*"
                                placeholder="ex- Nimal"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                            <TextField
                                name="contact"
                                label="Contact"
                                important="*"
                                placeholder="ex- 0700000000"
                                value={formData.contact}
                                onChange={handleChange}
                            />
                            <TextField
                                name="nic"
                                label="NIC"
                                important="*"
                                placeholder="ex- 000000000V"
                                value={formData.nic}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                            <TextField
                                name="username"
                                label="Username"
                                important="*"
                                placeholder="ex- isuru123"
                                value={formData.username}
                                onChange={handleChange}
                            />
                            <TextField
                                name="email"
                                label="Email"
                                important="*"
                                placeholder="ex- example@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <div className='grow w-[220px] mx-3 my-3 gap-1 flex flex-col justify-start'>
                                <label className='text-black'>Password</label>
                                <input className="text-input p-[7px]" type="text" value="*******" disabled/>
                            </div>
                        </div>

                        <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                            <TextArea
                                name="address"
                                label="Address"
                                placeholder="ex- ABC Road, Galle"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>

                        <div className='flex flex-row flex-wrap items-center justify-end w-full mt-5'>
                            <Button
                                name="Update"
                                color="bg-green-600"
                                onClick={handleUpdate}
                            />
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
