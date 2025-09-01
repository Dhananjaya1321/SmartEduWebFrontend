import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {Button} from "../../../component/Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faPen, faTimes} from "@fortawesome/free-solid-svg-icons";
import {TextField} from "../../../component/TextField/TextField";

import {TextArea} from "../../../component/TextArea/TextArea";
import {useEffect, useState} from "react";
import userAPIController from "../../../../controller/UserAPIController";
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

interface EditUserModalProps {
    rowData: {
        id: string;
        name: string;
        contact: string;
        nic: string;
        username: string;
        email: string;
        address: string;
        role?: string;
    };
    onUpdateUser: (updatedUser: {
        id: string;
        name: string;
        contact: string;
        nic: string;
        username: string;
        email: string;
        address: string;
        role?: string;
    }) => void;
}

export default function EditUserModal({ rowData, onUpdateUser }: EditUserModalProps) {
    const [open, setOpen] = useState(false);
    const [userData, setUserData] = useState(rowData);

    useEffect(() => {
        setUserData(rowData);
    }, [rowData]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUserData(prev => ({ ...prev, [name]: value }));
    };

    const handleUserUpdate = async () => {
        if (!userData.name || userData.name.trim().length < 2) {
            alert("Name is required");
            return;
        }

        try {
            const response = await userAPIController.updateUser(userData);
            if (response) {
                onUpdateUser(userData);
                alert("User updated successfully!");
                handleClose();
            } else {
                alert(response?.message || "Failed to update user.");
            }
        } catch (error) {
            console.error("Error updating user:", error);
            alert("Unexpected error occurred.");
        }
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
                                <h3 className="font-medium">Edit User</h3>
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextField
                                    name="name"
                                    placeholder={'ex- Nimal'}
                                    label={'Name'}
                                    important={"*"}
                                    value={userData.name}
                                    onChange={handleChange}
                                />
                                <TextField
                                    name="contact"
                                    placeholder={'ex- 070 000 0000'}
                                    label={'Contact'}
                                    important={"*"}
                                    value={userData.contact}
                                    onChange={handleChange}
                                />
                                <TextField
                                    name="nic"
                                    placeholder={'ex- 000000000000 or 000000000v'}
                                    label={'NIC'}
                                    important={"*"}
                                    value={userData.nic}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextField
                                    name="username"
                                    placeholder={'ex- Isuru123'}
                                    label={'Username'}
                                    important={"*"}
                                    value={userData.username}
                                    onChange={handleChange}
                                />
                                <TextField
                                    name="email"
                                    placeholder={'ex- example@gmail.com'}
                                    label={'Email'}
                                    important={"*"}
                                    value={userData.email}
                                    onChange={handleChange}
                                />
                                <div className='grow w-[220px] mx-3 my-3 gap-1 flex flex-col justify-start'>
                                    <div className='flex flex-row'>
                                        <label className='text-black flex justify-start'>Password</label>
                                    </div>
                                    <input
                                        className={`text-input p-[7px]`}
                                        type={"text"}
                                        placeholder={"*******"}
                                        disabled={true}
                                        name={"Password"}
                                    ></input>
                                    <div className={`h-[5px]`}>
                                        <small
                                            className={`text-start text-red-600 block`}>
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextArea
                                    name="address"
                                    placeholder={'ex- ABC Road, Galle'}
                                    label={'Address'}
                                    value={userData.address}
                                    onChange={handleChange}
                                />
                            </div>
                        </section>
                        <div className='flex flex-row flex-wrap items-center justify-end w-full'>
                            <Button
                                name={'Update'}
                                color={'bg-green-600'}
                                onClick={handleUserUpdate}
                            />
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
