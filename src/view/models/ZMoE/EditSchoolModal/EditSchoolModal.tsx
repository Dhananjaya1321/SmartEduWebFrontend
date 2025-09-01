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
import schoolAPIController from "../../../../controller/SchoolAPIController";

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


export default function EditSchoolModal({school}: { school: any }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [formData, setFormData] = useState({
        schoolName: '',
        province: '',
        district: '',
        zonal: '',
        levelOfSchool: '',
        typeOfSchool: '',
        gradeSpan: '',
        gender: '',
        ethnicity: '',
        languageMedium: '',
        studentPopulation: '',
        teacherPopulation: '',
        classCount: ''
    });

    const [districts, setDistricts] = useState<string[]>([]);
    const [zonals, setZonals] = useState<string[]>([]);

    // Load data into form on open
    useEffect(() => {
        if (school) {
            setFormData({
                schoolName: school.schoolName || '',
                province: school.province || '',
                district: school.district || '',
                zonal: school.zonal || '',
                levelOfSchool: school.levelOfSchool || '',
                typeOfSchool: school.typeOfSchool || '',
                gradeSpan: school.gradeSpan || '',
                gender: school.gender || '',
                ethnicity: school.ethnicity || '',
                languageMedium: school.languageMedium || '',
                studentPopulation: school.studentPopulation || '',
                teacherPopulation: school.teacherPopulation || '',
                classCount: school.classCount?.toString() || ''
            });
        }
    }, [school, open]);

    useEffect(() => {
        setDistricts(provinceDistrictMap[formData.province] || []);
    }, [formData.province]);

    useEffect(() => {
        setZonals(districtZoneMap[formData.district] || []);
    }, [formData.district]);

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({...prev, [field]: value}));
    };

    const handleUpdate = async () => {
        const payload = {
            id: school.id,
            schoolName: formData.schoolName,
            province: formData.province,
            district: formData.district,
            zonal: formData.zonal,
            levelOfSchool: formData.levelOfSchool,
            typeOfSchool: formData.typeOfSchool,
            gradeSpan: formData.gradeSpan,
            gender: formData.gender,
            ethnicity: formData.ethnicity,
            languageMedium: formData.languageMedium,
            studentPopulation: formData.studentPopulation,
            teacherPopulation: formData.teacherPopulation,
            classCount: formData.classCount,
            logoUrl: school.logoUrl,
            schoolNumber: school.schoolNumber,
            status: school.status
        };

        const success = await schoolAPIController.updateSchoolDetails(payload);

        if (success) {
            alert("School updated successfully");
            handleClose();
        } else {
            alert("Update failed");
        }
    };



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
                                    value={formData.schoolName}
                                    onChange={(e) => handleChange("schoolName", e.target.value)}
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
                                    value={formData.province}
                                    options={[{
                                        label: 'Select...',
                                        value: ''
                                    }, ...Object.keys(provinceDistrictMap).map(p => ({label: p, value: p}))]}
                                    disabled={true}
                                />
                                <DropdownField
                                    important={"*"}
                                    label={"Select district"}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    value={formData.district}
                                    options={[{label: 'Select...', value: ''}, ...districts.map(d => ({
                                        label: d,
                                        value: d
                                    }))]}
                                    disabled={true}
                                />
                                <DropdownField
                                    important={"*"}
                                    label={"Select zonal"}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    value={formData.zonal}
                                    options={[{label: 'Select...', value: ''}, ...zonals.map(z => ({
                                        label: z,
                                        value: z
                                    }))]}
                                    onChange={(e) => handleChange("zonal", e.target.value)}
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
                                    value={formData.levelOfSchool}
                                    onChange={(e) => handleChange("levelOfSchool", e.target.value)}
                                />
                                <DropdownField
                                    important={"*"}
                                    label={"Type of School"}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={schoolTypeOptions}
                                    value={formData.typeOfSchool}
                                    onChange={(e) => handleChange("typeOfSchool", e.target.value)}
                                />
                                <DropdownField
                                    important={"*"}
                                    label={"Grade Span"}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={gradeSpanOptions}
                                    value={formData.gradeSpan}
                                    onChange={(e) => handleChange("gradeSpan", e.target.value)}
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
                                    value={formData.gender}
                                    onChange={(e) => handleChange("gender", e.target.value)}
                                />
                                <DropdownField
                                    important={"*"}
                                    label={"Select ethnicity"}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={ethnicityOptions}
                                    value={formData.ethnicity}
                                    onChange={(e) => handleChange("ethnicity", e.target.value)}
                                />
                                <DropdownField
                                    important={"*"}
                                    label={"Select language medium"}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={languageMediumOptions}
                                    value={formData.languageMedium}
                                    onChange={(e) => handleChange("languageMedium", e.target.value)}
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
                                    value={formData.studentPopulation}
                                    onChange={(e) => handleChange("studentPopulation", e.target.value)}
                                />
                                <DropdownField
                                    important={"*"}
                                    label={"Select teacher Population"}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={studentPopulationOptions}
                                    value={formData.teacherPopulation}
                                    onChange={(e) => handleChange("teacherPopulation", e.target.value)}
                                />
                                <TextField
                                    name="classCount"
                                    placeholder={'Class count'}
                                    important={"*"}
                                    label={'Number of Grade 1 classes'}
                                    value={formData.classCount}
                                    onChange={(e) => handleChange("classCount", e.target.value)}
                                />
                            </div>
                        </section>
                        <div className='flex flex-row flex-wrap items-center justify-end w-full'>
                            <Button
                                name={'Update'}
                                color={'bg-green-600'}
                                onClick={handleUpdate}
                            />
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
