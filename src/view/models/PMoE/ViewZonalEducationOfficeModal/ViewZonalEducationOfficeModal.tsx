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

export default function ViewZonalEducationOfficeModal() {
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
                        View Zonal Education Office
                    </Typography>
                    <section
                        className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                        <section
                            className='w-full flex flex-row flex-wrap items-center justify-center'>
                            <div className="w-full items-start flex my-2">
                                <h3 className="font-medium">Zonal Education Office Details</h3>
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <DropdownField
                                    label="Select District"
                                    important="*"
                                    disabled={true}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={
                                        [
                                            {label: 'Select...', value: ''},
                                        ]
                                    }
                                />
                                <DropdownField
                                    label="Select Zonal"
                                    important="*"
                                    disabled={true}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={
                                        [
                                            {label: 'Select...', value: ''},
                                        ]
                                    }/>
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextArea
                                    name="zonalAddress"
                                    placeholder={'ex- ABC Road, Galle'}
                                    label={'Address'}
                                    disabled={true}
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
                                    disabled={true}
                                />
                                <TextField
                                    name="contact"
                                    placeholder={'ex- 070 000 0000'}
                                    label={'Contact'}
                                    important={"*"}
                                    disabled={true}
                                />
                                <TextField
                                    name="nic"
                                    placeholder={'ex- 000000000000 or 000000000v'}
                                    label={'NIC'}
                                    important={"*"}
                                    disabled={true}
                                />
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextField
                                    name="username"
                                    placeholder={'ex- Isuru123'}
                                    label={'Username'}
                                    important={"*"}
                                    disabled={true}
                                />
                                <TextField
                                    name="email"
                                    placeholder={'ex- example@gmail.com'}
                                    label={'Email'}
                                    important={"*"}
                                    disabled={true}
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
                                    name="adminAddress"
                                    placeholder={'ex- ABC Road, Galle'}
                                    label={'Address'}
                                    disabled={true}
                                />
                            </div>
                        </section>
                        <div className='flex flex-row flex-wrap items-center justify-end w-full'>
                            <Button
                                name={'Done'}
                                color={'bg-blue-600'}
                            />
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
