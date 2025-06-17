import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Button} from "../../../component/Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faPen, faTimes} from "@fortawesome/free-solid-svg-icons";
import {TextField} from "../../../component/TextField/TextField";
import {DropdownField} from "../../../component/DropdownField/DropdownField";
import {useEffect, useState} from "react";
import {
    districtZoneMap, ethnicityOptions, genderOptions,
    gradeSpanOptions, languageMediumOptions,
    provinceDistrictMap,
    schoolLevelOptions,
    schoolTypeOptions, studentPopulationOptions
} from "../../../context/Arrays"
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


export default function EditSchoolModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [districts, setDistricts] = useState<string[]>([]);
    const [zonals, setZonals] = useState<string[]>([]);
    const [selectedZonal, setSelectedZonal] = useState('');

    // Load districts when province changes
    useEffect(() => {
        if ("Western") {
            const loadedDistricts = provinceDistrictMap["Western"] || [];
            setDistricts(loadedDistricts);
        }
    }, ["Western"]);

    // Load zonals when district changes
    useEffect(() => {
        if ("Colombo") {
            const zones = districtZoneMap["Colombo"] || [];
            setZonals(zones);
        }
    }, ["Colombo"]);

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
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        School Details
                    </Typography>
                    <section
                        className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                        <section
                            className='w-full flex flex-row flex-wrap items-center justify-center'>
                            <div className="w-full items-start flex my-2">
                                <h3 className="font-medium">Edit Details</h3>
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextField
                                    name="schoolName"
                                    placeholder={'School name'}
                                    important={"*"}
                                    label={'School name'}

                                />
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <DropdownField
                                    important={"*"}
                                    label={"Select province"}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={
                                        [
                                            {label: 'Select...', value: ''},
                                        ]
                                    }
                                    disabled={true}
                                />
                                <DropdownField
                                    important={"*"}
                                    label={"Select district"}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={
                                        [
                                            {label: 'Select...', value: ''},
                                        ]
                                    }
                                    disabled={true}
                                />
                                <DropdownField
                                    important={"*"}
                                    label={"Select zonal"}
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
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <DropdownField
                                    important={"*"}
                                    label={"Level of School"}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={schoolLevelOptions}
                                />
                                <DropdownField
                                    important={"*"}
                                    label={"Type of School"}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={schoolTypeOptions}
                                />
                                <DropdownField
                                    important={"*"}
                                    label={"Grade Span"}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={gradeSpanOptions}
                                />
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <DropdownField
                                    important={"*"}
                                    label={"Select gender"}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={genderOptions}
                                />
                                <DropdownField
                                    important={"*"}
                                    label={"Select ethnicity"}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={ethnicityOptions}
                                />
                                <DropdownField
                                    important={"*"}
                                    label={"Select language medium"}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={languageMediumOptions}
                                />
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <DropdownField
                                    important={"*"}
                                    label={"Select student Population"}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={studentPopulationOptions}
                                />
                                <DropdownField
                                    important={"*"}
                                    label={"Select teacher Population"}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={studentPopulationOptions}
                                />
                                <TextField
                                    name="classCount"
                                    placeholder={'Class count'}
                                    important={"*"}
                                    label={'Number of Grade 1 classes'}

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
