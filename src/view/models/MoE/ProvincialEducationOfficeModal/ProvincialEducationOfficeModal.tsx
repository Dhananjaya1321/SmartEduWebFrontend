import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {TextArea} from "../../../component/TextArea/TextArea";
import {Button} from "../../../component/Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTimes} from "@fortawesome/free-solid-svg-icons";
import {TextField} from "../../../component/TextField/TextField";
import {DropdownField} from "../../../component/DropdownField/DropdownField";
import {useState} from "react";
import pMOEAPIController from "../../../../controller/PMOEAPIController";

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
const provinceDistrictMap: Record<string, string> = {
    "Western": "Western",
    "Central": "Central",
    "Southern": "Southern",
    "Northern": "Northern",
    "Eastern": "Eastern",
    "North Western": "North Western",
    "North Central": "North Central",
    "Uva": "Uva",
    "Sabaragamuwa": "Sabaragamuwa"
};
export default function ProvincialEducationOfficeModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [formData, setFormData] = useState({
        selectedProvince: '',
        provincialAddress: '',
        name: '',
        contact: '',
        nic: '',
        username: '',
        email: '',
        adminAddress: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, selectedProvince: e.target.value }));
    };

    const handleSave = async () => {
        if (!formData.selectedProvince || !formData.name || !formData.contact || !formData.nic || !formData.username || !formData.email) {
            alert("All fields marked with * are required");
            return;
        }

        const payload = {
            province: formData.selectedProvince,
            officeAddress: formData.provincialAddress,
            name: formData.name,
            nic: formData.nic,
            contact: formData.contact,
            username: formData.username,
            password: '', // Placeholder, backend will generate
            address: formData.adminAddress,
            email: formData.email
        };

        try {
            const response = await pMOEAPIController.savePMOEOfficeWithAdmin(payload);
            if (response) {
                alert("Provincial Education Office created successfully!");
                handleClose();
                setFormData({
                    selectedProvince: '',
                    provincialAddress: '',
                    name: '',
                    contact: '',
                    nic: '',
                    username: '',
                    email: '',
                    adminAddress: ''
                });
            } else {
                alert("Failed to create provincial office.");
            }
        } catch (error) {
            console.error("Error saving provincial office:", error);
            alert("Unexpected error occurred.");
        }
    };

    return (
        <div>
            <button
                className={`h-[46px] bg-green-600 px-6 py-3 rounded-md text-white font-medium mx-3 mt-2`}
                onClick={handleOpen}
            >
                Add New
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
                        Create Provincial Education Office
                    </Typography>
                    <section
                        className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                        <section
                            className='w-full flex flex-row flex-wrap items-center justify-center'>
                            <div className="w-full items-start flex my-2">
                                <h3 className="font-medium">Provincial Education Office Details</h3>
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <DropdownField
                                    important={"*"}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    label={"Select province"}
                                    options={
                                        [
                                            {label: 'Select...', value: ''},
                                            ...Object.keys(provinceDistrictMap).map(p => ({label: p, value: p}))
                                        ]
                                    }
                                    value={formData.selectedProvince}
                                    onChange={handleProvinceChange}
                                />

                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextArea
                                    name="provincialAddress"
                                    placeholder={'ex- ABC Road, Galle'}
                                    label={'Address'}
                                    value={formData.provincialAddress}
                                    onChange={handleChange}
                                />
                            </div>
                        </section>
                        <section
                            className='w-full flex flex-row flex-wrap items-center justify-center'>
                            <div className="w-full items-start flex my-2">
                                <h3 className="font-medium">Admin Details</h3>
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextField
                                    name="name"
                                    placeholder={'ex- Nimal'}
                                    label={'Name'}
                                    important={"*"}
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <TextField
                                    name="contact"
                                    placeholder={'ex- 070 000 0000'}
                                    label={'Contact'}
                                    important={"*"}
                                    value={formData.contact}
                                    onChange={handleChange}
                                />
                                <TextField
                                    name="nic"
                                    placeholder={'ex- 000000000000 or 000000000v'}
                                    label={'NIC'}
                                    important={"*"}
                                    value={formData.nic}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextField
                                    name="username"
                                    placeholder={'ex- Isuru123'}
                                    label={'Username'}
                                    important={"*"}
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                                <TextField
                                    name="email"
                                    placeholder={'ex- example@gmail.com'}
                                    label={'Email'}
                                    important={"*"}
                                    value={formData.email}
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
                                            {"The password is automatically generated and sent to the user's provided email address."}
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextArea
                                    name="adminAddress"
                                    placeholder={'ex- ABC Road, Galle'}
                                    label={'Address'}
                                    value={formData.adminAddress}
                                    onChange={handleChange}
                                />
                            </div>
                        </section>
                        <div className='flex flex-row flex-wrap items-center justify-end w-full'>
                            <Button
                                name={'Create'}
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
