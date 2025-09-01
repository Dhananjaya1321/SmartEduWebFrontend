import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {TextArea} from "../../../component/TextArea/TextArea";
import {Button} from "../../../component/Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTimes} from "@fortawesome/free-solid-svg-icons";
import {DropdownField} from "../../../component/DropdownField/DropdownField";
import {useEffect, useState} from "react";
import {districtZoneMap, provinceDistrictMap} from "../../../context/Arrays";
import zMOEAPIController from "../../../../controller/ZMOEAPIController";

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

interface EditZonalEducationOfficeModalProps {
    office: {
        id: string;
        institutionID: string;
        province: string;
        district: string;
        zonal: string;
        officeAddress: string;
    };
}

export default function EditZonalEducationOfficeModal({ office }: EditZonalEducationOfficeModalProps) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [districts, setDistricts] = useState<string[]>([]);
    const [zonals, setZonals] = useState<string[]>([]);
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedZonal, setSelectedZonal] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        if (office?.province) {
            console.log(office)
            const loadedDistricts = provinceDistrictMap[office.province] || [];
            setDistricts(loadedDistricts);
            setSelectedDistrict(office.district || '');
            const loadedZonals = districtZoneMap[office.district] || [];
            setZonals(loadedZonals);
            setSelectedZonal(office.zonal || '');
            setAddress(office.officeAddress || '');
        }
    }, [office]);

    const handleUpdate = async () => {
        const success = await zMOEAPIController.updateZMOEOffice({
            institutionID: office.institutionID,
            address: address,
            officeAddress: address
        });

        if (success) {
            alert("Office address updated successfully.");
            handleClose();
        } else {
            alert("Failed to update address. Please try again.");
        }
    };

    return (
        <div>
            <button className="rounded-xl w-[40px] h-[40px] text-green-600 hover:bg-green-100" onClick={handleOpen}>
                <FontAwesomeIcon icon={faPen}/>
            </button>
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <button
                        className="absolute top-[15px] right-[15px] text-red-500 hover:text-gray-700 p-2 w-[40px]
                        h-[40px] bg-white shadow-lg rounded-lg flex justify-center items-center"
                        onClick={handleClose}
                    >
                        <FontAwesomeIcon icon={faTimes} size="lg"/>
                    </button>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Zonal Education Office
                    </Typography>
                    <section className='bg-white flex flex-col items-center justify-center mt-5 p-5 rounded-xl shadow-md'>

                        {/* Zonal Office Details */}
                        <div className="w-full items-start flex my-2">
                            <h3 className="font-medium">Zonal Education Office Details</h3>
                        </div>
                        <div className='flex flex-wrap w-full'>
                            <DropdownField
                                label="District"
                                important="*"
                                disabled={true}
                                mt={"12px"} mb={"12px"} ml={"12px"} mr={"12px"}
                                options={[{label: selectedDistrict, value: selectedDistrict}]}
                                value={selectedDistrict}
                            />
                            <DropdownField
                                label="Zonal"
                                important="*"
                                disabled={true}
                                mt={"12px"} mb={"12px"} ml={"12px"} mr={"12px"}
                                options={[{label: selectedZonal, value: selectedZonal}]}
                                value={selectedZonal}
                            />
                        </div>
                        <div className='w-full'>
                            <TextArea
                                name="zonalAddress"
                                placeholder={'ex- ABC Road, Galle'}
                                label={'Zonal Office Address'}
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>

                        {/* Update Button */}
                        <div className='w-full flex justify-end mt-4'>
                            <Button name={'Update'} color={'bg-green-600'} onClick={handleUpdate}/>
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
