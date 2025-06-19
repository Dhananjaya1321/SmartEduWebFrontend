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

export default function ViewOLApplicationModal() {
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
                                <h3 className="font-medium">View O/L Application</h3>
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <TextField
                                        name="studentName"
                                        label={'Student name'}
                                        important={"*"}
                                        disabled={true}
                                    />
                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div className='grow mx-3 mt-3 gap-1 flex flex-col justify-start'>
                                        <div className='flex flex-row'>
                                            <label className='text-black flex justify-start'>Birth certificate front
                                                side</label>
                                        </div>
                                    </div>
                                    <div className="w-full h-[1000px] bg-blue-950 rounded-md mx-3 my-3"></div>
                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div className='grow mx-3 mt-3 gap-1 flex flex-col justify-start'>
                                        <div className='flex flex-row'>
                                            <label className='text-black flex justify-start'>Birth certificate back side</label>
                                        </div>
                                    </div>
                                    <div className="w-full h-[1000px] bg-blue-950 rounded-md mx-3 my-3"></div>
                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div className='grow mx-3 mt-3 gap-1 flex flex-col justify-start'>
                                        <div className='flex flex-row'>
                                            <label className='text-black flex justify-start'>NIC front side</label>
                                        </div>
                                    </div>
                                    <div className="w-full h-[400px] bg-blue-950 rounded-md mx-3 my-3"></div>
                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <div className='grow mx-3 mt-3 gap-1 flex flex-col justify-start'>
                                        <div className='flex flex-row'>
                                            <label className='text-black flex justify-start'>NIC back side</label>
                                        </div>
                                    </div>
                                    <div className="w-full h-[400px] bg-blue-950 rounded-md mx-3 my-3"></div>
                                </div>
                            </div>
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
