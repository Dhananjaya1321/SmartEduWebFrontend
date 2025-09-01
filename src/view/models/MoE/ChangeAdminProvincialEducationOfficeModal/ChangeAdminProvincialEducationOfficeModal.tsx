import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextArea } from "../../../component/TextArea/TextArea";
import { Button } from "../../../component/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons";
import { TextField } from "../../../component/TextField/TextField";
import { useEffect, useState } from "react";
import pMOEAPIController from "../../../../controller/PMOEAPIController";

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
    overflowY: 'auto',
};

interface ChangeAdminPMOEProps {
    office: {
        institutionID: string;
        province: string;
        name: string;
        contact: string;
        nic: string;
        username: string;
        email: string;
        address: string;
    };
}

export default function ChangeAdminProvincialEducationOfficeModal({ office }: ChangeAdminPMOEProps) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [nic, setNIC] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [adminAddress, setAdminAddress] = useState('');

    // Populate form when modal opens
    useEffect(() => {
        if (open) {
            setName(office.name || '');
            setContact(office.contact || '');
            setNIC(office.nic || '');
            setUsername(office.username || '');
            setEmail(office.email || '');
            setAdminAddress(office.address || '');
        }
    }, [open, office]);

    const handleSubmit = async () => {
        const payload = {
            institutionID: office.institutionID,
            name,
            contact,
            nic,
            username,
            email,
            address: adminAddress,
        };

        const success = await pMOEAPIController.createNewAdminForProvincialEducationOffice(payload);
        console.log(success);
        if (success) {
            alert("Admin updated successfully.");
            handleClose();
        } else {
            console.log(success);
            alert("Failed to update admin. Please try again.");
        }
    };

    return (
        <div>
            <button className="rounded-xl w-[40px] h-[40px] text-orange-600 hover:bg-orange-100" onClick={handleOpen}>
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
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Change Provincial Education Office Admin
                    </Typography>
                    <section className='bg-white flex flex-col flex-wrap mt-5 p-5 rounded-xl shadow-md'>
                        <div className="w-full items-start flex my-2">
                            <h3 className="font-medium">Admin Details</h3>
                        </div>
                        <div className='flex flex-wrap w-full justify-between'>
                            <TextField
                                name="name"
                                placeholder="ex- Nimal"
                                label="Name"
                                important="*"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                name="contact"
                                placeholder="ex- 070 000 0000"
                                label="Contact"
                                important="*"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                            />
                            <TextField
                                name="nic"
                                placeholder="ex- 000000000000 or 000000000v"
                                label="NIC"
                                important="*"
                                value={nic}
                                onChange={(e) => setNIC(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-wrap w-full justify-between'>
                            <TextField
                                name="username"
                                placeholder="ex- Isuru123"
                                label="Username"
                                important="*"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <TextField
                                name="email"
                                placeholder="ex- example@gmail.com"
                                label="Email"
                                important="*"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className='grow w-[220px] mx-3 my-3 gap-1 flex flex-col justify-start'>
                                <label className='text-black'>Password</label>
                                <input
                                    className="text-input p-[7px]"
                                    type="text"
                                    placeholder="*******"
                                    disabled
                                    name="Password"
                                />
                                <small className='text-start text-red-600 block'>
                                    The password is automatically generated and sent to the user's provided email address.
                                </small>
                            </div>
                        </div>
                        <div className='w-full'>
                            <TextArea
                                name="adminAddress"
                                placeholder="ex- ABC Road, Galle"
                                label="Address"
                                value={adminAddress}
                                onChange={(e) => setAdminAddress(e.target.value)}
                            />
                        </div>
                        <div className='w-full flex justify-end mt-4'>
                            <Button
                                name="Update"
                                color="bg-orange-600"
                                onClick={handleSubmit}
                            />
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
