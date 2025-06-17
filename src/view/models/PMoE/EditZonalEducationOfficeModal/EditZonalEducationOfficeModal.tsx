import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {TextArea} from "../../../component/TextArea/TextArea";
import {Button} from "../../../component/Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faPen, faTimes} from "@fortawesome/free-solid-svg-icons";
import {DropdownField} from "../../../component/DropdownField/DropdownField";
import {useEffect, useState} from "react";
import {districtZoneMap, provinceDistrictMap} from "../../../context/Arrays"

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

export default function EditZonalEducationOfficeModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [districts, setDistricts] = useState<string[]>([]);
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [zonals, setZonals] = useState<string[]>([]);
    const [selectedZonal, setSelectedZonal] = useState('');

    // Load districts when province comes from DB
    useEffect(() => {
        if ("Western") {
            const loadedDistricts = provinceDistrictMap["Western"] || [];
            setDistricts(loadedDistricts);
            setSelectedDistrict('');
            setZonals([]);
            setSelectedZonal('');
        }
    }, ["Western"]);

    // Load zonals when a district is selected
    const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const district = e.target.value;
        setSelectedDistrict(district);
        setZonals(districtZoneMap[district] || []);
        setSelectedZonal('');
    };
    return (
        <div>
            <button className="rounded-xl w-[40px] h-[40px] text-green-600 hover:bg-green-100"
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
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Zonal Education Office
                    </Typography>
                    <section
                        className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                        <section
                            className='w-full flex flex-row flex-wrap items-center justify-center'>
                            <div className="w-full items-start flex my-2">
                                <h3 className="font-medium">Zonal Education Office Details</h3>
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <DropdownField
                                        label="Select District"
                                        important="*"
                                        disabled={true}
                                        mt={"12px"}
                                        mb={"12px"}
                                        ml={"12px"}
                                        mr={"12px"}
                                        options={[{label: 'Select...', value: ''}, ...districts.map(d => ({
                                            label: d,
                                            value: d
                                        }))]}
                                        value={selectedDistrict}
                                        onChange={handleDistrictChange}
                                    />
                                    <DropdownField
                                        label="Select Zonal"
                                        important="*"
                                        disabled={true}
                                        mt={"12px"}
                                        mb={"12px"}
                                        ml={"12px"}
                                        mr={"12px"}
                                        options={[{label: 'Select...', value: ''}, ...zonals.map(z => ({
                                            label: z,
                                            value: z
                                        }))]}
                                        value={selectedZonal}
                                        onChange={(e) => setSelectedZonal(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextArea
                                    name="provincialAddress"
                                    placeholder={'ex- ABC Road, Galle'}
                                    label={'Address'}

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
