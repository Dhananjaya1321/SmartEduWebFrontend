import * as React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTimes} from "@fortawesome/free-solid-svg-icons";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {TextField} from "../../../component/TextField/TextField";
import {TextArea} from "../../../component/TextArea/TextArea";
import {Button} from "../../../component/Button/Button";
import {DropdownField} from "../../../component/DropdownField/DropdownField";
import {schoolLevelOptions} from "../../../context/Arrays";

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

export const TransferModal = () => {
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
                                <h3 className="font-medium">Transfer</h3>
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextField
                                    name="currentSchool"
                                    label={'Current School'}
                                    important={"*"}
                                />
                                <DropdownField
                                    important={"*"}
                                    label={"Assigned new School"}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={
                                        schoolLevelOptions //methanata school list eka enna one
                                    }
                                />
                                <TextField
                                    name="startingDate"
                                    label={'Starting date'}
                                    important={"*"}
                                    type={"date"}
                                />
                            </div>
                        </section>
                        <div className='flex flex-row flex-wrap items-center justify-end w-full'>
                            <Button
                                name={'Create Transfer'}
                                color={'bg-green-600'}
                            />
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
};
