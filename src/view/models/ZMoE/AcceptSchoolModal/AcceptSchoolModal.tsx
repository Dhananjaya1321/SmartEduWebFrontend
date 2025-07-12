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
import principalAPIController from "../../../../controller/PrincipalAPIController";
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
interface AcceptSchoolModalProps {
    school: any;
}

export default function AcceptSchoolModal({ school }: AcceptSchoolModalProps) {
    const [principal, setPrincipal] = React.useState<any>(null);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [actionLoading, setActionLoading] = React.useState(false);

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    const handleOpen = async () => {
        setOpen(true);
        if (school?.principal?.id) {
            setLoading(true);
            const data = await principalAPIController.getPrincipalUserAccountDetailsByProfileId(school.principal.id);
            setPrincipal(data);
            setLoading(false);
        }
    };

    const handleStatusChange = async (status: 'APPROVED' | 'REJECTED') => {
        if (!school?.id) return;
        setActionLoading(true);
        const success = await schoolAPIController.updateSchoolStatus(school.id, status);
        setActionLoading(false);
        if (success) {
            alert(`School ${status.toLowerCase()} successfully.`);
            handleClose(); // Close modal
        } else {
            alert('Failed to update school status.');
        }
    };

    return (
        <div>
            <button
                className="rounded-xl w-[40px] h-[40px] text-orange-600 hover:bg-orange-100"
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
                        School Registration Request
                    </Typography>
                    <section
                        className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                        <section
                            className='w-full flex flex-row flex-wrap items-center justify-center'>
                            <div className="w-full items-start flex my-2">
                                <h3 className="font-medium">View School Details</h3>
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextField label="School Name" value={school?.schoolName || ''} disabled={true} />
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextField label="Province" value={school?.province || ''} disabled={true} />
                                <TextField label="District" value={school?.district || ''} disabled={true} />
                                <TextField label="Zonal" value={school?.zonal || ''} disabled={true} />
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextField label="Level of School" value={school?.levelOfSchool || ''} disabled={true} />
                                <TextField label="Type of School" value={school?.typeOfSchool || ''} disabled={true} />
                                <TextField label="Grade Span" value={school?.gradeSpan || ''} disabled={true} />
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextField label="Gender" value={school?.gender || ''} disabled={true} />
                                <TextField label="Ethnicity" value={school?.ethnicity || ''} disabled={true} />
                                <TextField label="Language Medium" value={school?.languageMedium || ''} disabled={true} />
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextField label="Student Population" value={school?.studentPopulation || ''} disabled={true} />
                                <TextField label="Teacher Population" value={school?.teacherPopulation || ''} disabled={true} />
                                <TextField label="Class Count" value={school?.classCount || ''} disabled={true} />
                            </div>
                        </section>
                        <section
                            className='w-full flex flex-row flex-wrap items-center justify-center'>
                            <div className="w-full items-start flex my-2">
                                <h3 className="font-medium">Principal Details</h3>
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextField label="Principal Name" value={school?.principal?.fullName || ''} disabled={true} />
                                <TextField label="Contact" value={principal?.contact || ''} disabled={true} />
                                <TextField label="NIC" value={principal?.nic || ''} disabled={true} />
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextField label="Username" value={principal?.username || ''} disabled={true} />
                                <TextField label="Email" value={principal?.email || ''} disabled={true} />
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <TextArea
                                    name="adminAddress"
                                    placeholder={'ex- ABC Road, Galle'}
                                    label={'Address'}
                                    disabled={true}
                                    value={principal?.address || ''}
                                />
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <div className='grow mx-3 mt-3 gap-1 flex flex-col justify-start'>
                                    <div className='flex flex-row'>
                                        <label className='text-black flex justify-start'>NIC front side</label>
                                    </div>
                                </div>
                                <img
                                    className="w-full bg-blue-950 rounded-md mx-3 my-3"
                                     src={school?.principal?.nicFrontImageUrl}
                                ></img>
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <div className='grow mx-3 mt-3 gap-1 flex flex-col justify-start'>
                                    <div className='flex flex-row'>
                                        <label className='text-black flex justify-start'>NIC back side</label>
                                    </div>
                                </div>
                                <img
                                    className="w-full bg-blue-950 rounded-md mx-3 my-3"
                                    src={school?.principal?.nicBackImageUrl}
                                ></img>
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <div className='grow mx-3 mt-3 gap-1 flex flex-col justify-start'>
                                    <div className='flex flex-row'>
                                        <label className='text-black flex justify-start'>MoE ID card front side</label>
                                    </div>
                                </div>
                                <img
                                    className="w-full bg-blue-950 rounded-md mx-3 my-3"
                                    src={school?.principal?.nicFrontImageUrl}
                                ></img>
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <div className='grow mx-3 mt-3 gap-1 flex flex-col justify-start'>
                                    <div className='flex flex-row'>
                                        <label className='text-black flex justify-start'>MoE ID card back side</label>
                                    </div>
                                </div>
                                <img
                                    className="w-full bg-blue-950 rounded-md mx-3 my-3"
                                    src={school?.principal?.nicBackImageUrl}
                                ></img>
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <div className='grow mx-3 mt-3 gap-1 flex flex-col justify-start'>
                                    <div className='flex flex-row'>
                                        <label className='text-black flex justify-start'>Appointment letter</label>
                                    </div>
                                </div>
                                <img
                                    className="w-full bg-blue-950 rounded-md mx-3 my-3"
                                    src={school?.principal?.appointmentLetterUrl}
                                ></img>
                            </div>
                        </section>
                        <div className='flex flex-row flex-wrap items-center justify-end w-full'>
                            <Button
                                name={'Reject'}
                                color={'bg-red-600'}
                                onClick={() => handleStatusChange('REJECTED')}
                            />
                            <Button
                                name={'Accept'}
                                color={'bg-blue-600'}
                                onClick={() => handleStatusChange('APPROVED')}
                            />

                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
