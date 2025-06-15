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

const provinceDistrictMap: Record<string, string[]> = {
    "Western": ["Colombo", "Gampaha", "Kalutara"],
    "Central": ["Kandy", "Matale", "Nuwara Eliya"],
    "Southern": ["Galle", "Matara", "Hambantota"],
    "Northern": ["Jaffna", "Mannar", "Vavuniya", "Mullaitivu", "Kilinochchi"],
    "Eastern": ["Batticaloa", "Ampara", "Trincomalee"],
    "North Western": ["Kurunegala", "Puttalam"],
    "North Central": ["Anuradhapura", "Polonnaruwa"],
    "Uva": ["Badulla", "Moneragala"],
    "Sabaragamuwa": ["Ratnapura", "Kegalle"]
};
export const districtZoneMap: Record<string, string[]> = {
    "Colombo": ["Colombo", "Homagama", "Piliyandala", "Sri Jayawardanapura"],
    "Gampaha": ["Gampaha", "Kelaniya", "Minuwangoda", "Negombo"],
    "Kalutara": ["Horana", "Kalutara", "Matugama"],

    "Kandy": ["Denuwara", "Gampola", "Kandy", "Katugastota", "Teldeniya", "Wathegama"],
    "Matale": ["Galewela", "Matale", "Naula", "Wilgamuwa"],
    "Nuwara Eliya": ["Hanguranketha", "Hatton", "Kotmale", "Nuwara Eliya", "Walapane"],

    "Galle": ["Ambalangoda", "Elpitiya", "Galle", "Udugama"],
    "Matara": ["Akuressa", "Matara", "Morawaka", "Mulatiyana (Hakmana)"],
    "Hambantota": ["Hambantota", "Tangalle", "Walasmulla"],

    "Jaffna": ["Islands", "Jaffna", "Thenmarachchi", "Vadamarachchi", "Valikamam"],
    "Mannar": ["Madhu", "Mannar"],
    "Vavuniya": ["Vavuniya North", "Vavuniya South"],
    "Mullaitivu": ["Mullaitivu", "Thunukkai"],
    "Kilinochchi": ["Kilinochchi North", "Kilinochchi South"],

    "Batticaloa": ["Batticaloa", "Batticaloa Central", "Batticaloa West", "Kalkudah", "Paddiruppu"],
    "Ampara": ["Akkaraipattu", "Ampara", "Dehiattakandiya", "Kalmunai", "Mahaoya", "Sammanthurai", "Thirukkovil"],
    "Trincomalee": ["Kantale", "Kinniya", "Muttur", "Trincomalee", "Trincomalee North"],

    "Kurunegala": ["Giriulla", "Ibbagamuwa", "Kuliyapitiya", "Kurunegala", "Maho", "Nikaweratiya"],
    "Puttalam": ["Chilaw", "Puttalam"],

    "Anuradhapura": ["Anuradhapura", "Galenbindunuwewa", "Kebithigollewa", "Kekirawa", "Thambuttegama"],
    "Polonnaruwa": ["Dimbulagala", "Hingurakgoda", "Polonnaruwa"],

    "Badulla": ["Badulla", "Bandarawela", "Mahiyanganaya", "Passara", "Viyaluwa", "Welimada"],
    "Moneragala": ["Bibile", "Moneragala", "Thanamalwila", "Wellawaya"],

    "Ratnapura": ["Balangoda", "Embilipitiya", "Nivitigala", "Ratnapura"],
    "Kegalle": ["Dehiowita", "Kegalle", "Mawanella"]
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
                                    options={[
                                        {label: 'Select...', value: ''},
                                        {label: "National Schools", value: "national"},
                                        {label: "Provincial Schools", value: "provincial"}
                                    ]}
                                />
                                <DropdownField
                                    important={"*"}
                                    label={"Type of School"}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={[
                                        {label: 'Select...', value: ''},
                                        {label: "1AB Schools", value: "1ab"},
                                        {label: "1C Schools", value: "1c"},
                                        {label: "Type 2 Schools", value: "type2"},
                                        {label: "Type 3 Schools", value: "type3"}
                                    ]}
                                />
                                <DropdownField
                                    important={"*"}
                                    label={"Grade Span"}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={[
                                        {label: 'Select...', value: ''},
                                        {label: "Grade 1-5", value: "1-5"},
                                        {label: "Grade 1-8", value: "1-8"},
                                        {label: "Grade 1-11", value: "1-11"},
                                        {label: "Grade 1-13", value: "1-13"},
                                        {label: "Grade 6-11", value: "6-11"},
                                        {label: "Grade 6-13", value: "6-13"}
                                    ]}
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
                                    options={[
                                        {label: 'Select...', value: ''},
                                        {label: "Boys Schools", value: "boys"},
                                        {label: "Girls Schools", value: "girls"},
                                        {label: "Mixed Schools", value: "mixed"}
                                    ]}
                                />
                                <DropdownField
                                    important={"*"}
                                    label={"Select ethnicity"}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={[
                                        {label: 'Select...', value: ''},
                                        {label: "Sinhala Schools", value: "sinhala"},
                                        {label: "Tamil Schools", value: "tamil"},
                                        {label: "Muslim Schools", value: "muslim"}
                                    ]}
                                />
                                <DropdownField
                                    important={"*"}
                                    label={"Select language medium"}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={[
                                        {label: 'Select...', value: ''},
                                        {label: "Sinhala Medium", value: "sinhala"},
                                        {label: "Tamil Medium", value: "tamil"},
                                        {label: "Sinhala and Tamil Medium", value: "sinhala_tamil"},
                                        {label: "Sinhala and Bilingual (S/E)", value: "sinhala_bilingual"},
                                        {label: "Tamil and Bilingual (T/E)", value: "tamil_bilingual"},
                                        {label: "Trilingual", value: "trilingual"}
                                    ]}
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
                                    options={[
                                        {label: 'Select...', value: ''},
                                        {label: "1–50", value: "1-50"},
                                        {label: "51–100", value: "51-100"},
                                        {label: "101–200", value: "101-200"},
                                        {label: "201–500", value: "201-500"},
                                        {label: "501–1,000", value: "501-1000"},
                                        {label: "Above 1,000", value: "above_1000"}
                                    ]}
                                />
                                <DropdownField
                                    important={"*"}
                                    label={"Select teacher Population"}
                                    mt={"12px"}
                                    mb={"12px"}
                                    ml={"12px"}
                                    mr={"12px"}
                                    options={[
                                        {label: 'Select...', value: ''},
                                        {label: "1–50", value: "1-50"},
                                        {label: "51–100", value: "51-100"},
                                        {label: "101–200", value: "101-200"},
                                        {label: "201–500", value: "201-500"},
                                        {label: "501–1,000", value: "501-1000"},
                                        {label: "Above 1,000", value: "above_1000"}
                                    ]}
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
