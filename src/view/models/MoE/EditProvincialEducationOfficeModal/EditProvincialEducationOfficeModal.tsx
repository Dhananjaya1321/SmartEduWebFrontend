import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextArea } from "../../../component/TextArea/TextArea";
import { Button } from "../../../component/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons";
import { DropdownField } from "../../../component/DropdownField/DropdownField";
import { useState } from "react";
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
    overflowY: 'auto'
};

interface EditModalProps {
    office: {
        id: string;
        institutionID: string;
        province: string;
        officeAddress: string;
        address: string;
        name: string;
        contact: string;
        nic: string;
        username: string;
        email: string;
    };
}

export default function EditProvincialEducationOfficeModal({ office }: EditModalProps) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [updatedOfficeAddress, setUpdatedOfficeAddress] = useState(office.officeAddress);
    const [updatedAdminAddress, setUpdatedAdminAddress] = useState(office.address);

    const handleSave = async () => {
        const payload = {
            institutionID: office.institutionID,
            officeAddress: updatedOfficeAddress,
            address: updatedAdminAddress
        };

        try {
            const response = await pMOEAPIController.updatePMOEOffice(payload);
            if (response) {
                alert("Office updated successfully");
                handleClose();
            } else {
                alert("Update failed.");
            }
        } catch (error) {
            console.error("Error updating office:", error);
            alert("An error occurred.");
        }
    };

    return (
        <div>
            <button className="rounded-xl w-[40px] h-[40px] text-green-600 hover:bg-green-100" onClick={handleOpen}>
                <FontAwesomeIcon icon={faPen} />
            </button>
            <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <button
                        className="absolute top-[15px] right-[15px] text-red-500 hover:text-gray-700 p-2 w-[40px] h-[40px] bg-white shadow-lg rounded-lg flex justify-center items-center"
                        onClick={handleClose}
                    >
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    </button>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Provincial Education Office
                    </Typography>
                    <section className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                        <section className='w-full flex flex-row flex-wrap items-center justify-center'>
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
                                    disabled={true}
                                    options={[{ label: office.province, value: office.province }]}
                                    value={office.province}
                                />
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextArea
                                    name="provincialAddress"
                                    placeholder={'ex- ABC Road, Galle'}
                                    label={'Provincial Office Address'}
                                    value={updatedOfficeAddress}
                                    onChange={(e) => setUpdatedOfficeAddress(e.target.value)}
                                />
                            </div>
                        </section>

                        <div className="w-full items-start flex my-2">
                            <h3 className="font-medium">Admin Address</h3>
                        </div>
                        <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                            <TextArea
                                name="adminAddress"
                                placeholder={'ex- ABC Road, Galle'}
                                label={'Admin Address'}
                                value={updatedAdminAddress}
                                onChange={(e) => setUpdatedAdminAddress(e.target.value)}
                            />
                        </div>

                        <div className='flex flex-row flex-wrap items-center justify-end w-full'>
                            <Button name={'Update'} color={'bg-green-600'} onClick={handleSave} />
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
