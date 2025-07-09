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

// Add this if not already defined
interface ViewModalProps {
    office: {
        province: string;
        district: string;
        zonal: string;
        officeAddress: string;
        name: string;
        contact: string;
        nic: string;
        username: string;
        email: string;
        address: string;
    };
}

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

// Optional: Replace with real district and zonal options if needed
const districtOptions = (district: string) => [
    { label: district, value: district }
];
const zonalOptions = (zonal: string) => [
    { label: zonal, value: zonal }
];

export default function ViewZonalEducationOfficeModal({ office }: ViewModalProps) {
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
                                value={office.district}
                                options={districtOptions(office.district)}
                            />
                            <DropdownField
                                label="Zonal"
                                important="*"
                                disabled={true}
                                mt={"12px"} mb={"12px"} ml={"12px"} mr={"12px"}
                                value={office.zonal}
                                options={zonalOptions(office.zonal)}
                            />
                        </div>
                        <div className='w-full'>
                            <TextArea
                                name="zonalAddress"
                                placeholder={'ex- ABC Road, Galle'}
                                label={'Zonal Office Address'}
                                disabled={true}
                                value={office.officeAddress}
                            />
                        </div>

                        {/* Admin Details */}
                        <div className="w-full items-start flex my-4">
                            <h3 className="font-medium">Admin Details</h3>
                        </div>
                        <div className='flex flex-wrap w-full'>
                            <TextField
                                name="name"
                                placeholder={'ex- Nimal'}
                                label={'Name'}
                                disabled={true}
                                value={office.name}
                            />
                            <TextField
                                name="contact"
                                placeholder={'ex- 070 000 0000'}
                                label={'Contact'}
                                disabled={true}
                                value={office.contact}
                            />
                            <TextField
                                name="nic"
                                placeholder={'ex- 000000000000 or 000000000v'}
                                label={'NIC'}
                                disabled={true}
                                value={office.nic}
                            />
                        </div>
                        <div className='flex flex-wrap w-full'>
                            <TextField
                                name="username"
                                placeholder={'ex- Isuru123'}
                                label={'Username'}
                                disabled={true}
                                value={office.username}
                            />
                            <TextField
                                name="email"
                                placeholder={'ex- example@gmail.com'}
                                label={'Email'}
                                disabled={true}
                                value={office.email}
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
                                />
                                <div className={`h-[5px]`}>
                                    <small className={`text-start text-red-600 block`}>
                                        Password is auto-generated and emailed to the user.
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <TextArea
                                name="adminAddress"
                                placeholder={''}
                                label={'Admin Address'}
                                disabled={true}
                                value={office.address}
                            />
                        </div>

                        <div className='w-full flex justify-end mt-4'>
                            <Button name={'Done'} color={'bg-blue-600'} onClick={handleClose}/>
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
