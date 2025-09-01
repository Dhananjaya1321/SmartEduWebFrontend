import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {Button} from "../../../component/Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTimes} from "@fortawesome/free-solid-svg-icons";
import {TextField} from "../../../component/TextField/TextField";
import {TextArea} from "../../../component/TextArea/TextArea";
import {DropdownField} from "../../../component/DropdownField/DropdownField";
import {eventGradeOptions} from "../../../context/Arrays";
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


export default function EditEventModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                                <h3 className="font-medium">Edit Event</h3>
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextField
                                    name="eventName"
                                    placeholder={'ex- Sportmeet'}
                                    label={'Event name'}
                                    important={"*"}
                                />
                                <DropdownField
                                    label="Select Grade"
                                    important="*"
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={eventGradeOptions}

                                />
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextField
                                    name="startDate"
                                    label={'Start date'}
                                    important={"*"}
                                    type={"date"}
                                />
                                <TextField
                                    name="endDate"
                                    label={'End date'}
                                    important={"*"}
                                    type={"date"}
                                />
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextArea
                                    name="description"
                                    placeholder={'ex- Event details'}
                                    label={'Description'}
                                />
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
