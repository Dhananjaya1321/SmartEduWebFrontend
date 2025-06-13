import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {TextArea} from "../../component/TextArea/TextArea";
import {Button} from "../../component/Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faTimes} from "@fortawesome/free-solid-svg-icons";
import {TextField} from "../../component/TextField/TextField";
import {DropdownField} from "../../component/DropdownField/DropdownField";
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

export default function ZonalEducationOfficeModal() {
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
            <button
                className={`h-[46px] bg-green-600 px-6 py-3 rounded-md text-white font-medium mx-3 mt-2`}
                onClick={handleOpen}
            >
                Add New
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
                        Create Zonal Education Office
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
                                <TextArea
                                    name="zonalAddress"
                                    placeholder={'ex- ABC Road, Galle'}
                                    label={'Address'}

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
                                />
                                <TextField
                                    name="contact"
                                    placeholder={'ex- 070 000 0000'}
                                    label={'Contact'}
                                    important={"*"}
                                />
                                <TextField
                                    name="nic"
                                    placeholder={'ex- 000000000000 or 000000000v'}
                                    label={'NIC'}
                                    important={"*"}
                                />
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextField
                                    name="username"
                                    placeholder={'ex- Isuru123'}
                                    label={'Username'}
                                    important={"*"}

                                />
                                <TextField
                                    name="email"
                                    placeholder={'ex- example@gmail.com'}
                                    label={'Email'}
                                    important={"*"}

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
                                            {"The password is automatically generated and sent to the user's provided email address."}
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextArea
                                    name="adminAddress"
                                    placeholder={'ex- ABC Road, Galle'}
                                    label={'Address'}

                                />
                            </div>
                        </section>
                        <div className='flex flex-row flex-wrap items-center justify-end w-full'>
                            <Button
                                name={'Create'}
                                color={'bg-green-600'}
                            />
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
