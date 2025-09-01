import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextArea } from "../../../component/TextArea/TextArea";
import { Button } from "../../../component/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTimes } from "@fortawesome/free-solid-svg-icons";
import { TextField } from "../../../component/TextField/TextField";
import principalAPIController from "../../../../controller/PrincipalAPIController";

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

interface ViewSchoolModalProps {
    school: any;
}

export default function ViewSchoolModal({ school }: ViewSchoolModalProps) {
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

    return (
        <div>
            <button
                className="rounded-xl w-[40px] h-[40px] text-blue-600 hover:bg-blue-100"
                onClick={handleOpen}>
                <FontAwesomeIcon icon={faEye} />
            </button>

            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <button
                        className="absolute top-[15px] right-[15px] text-red-500 hover:text-gray-700 p-2 w-[40px]
                        h-[40px] bg-white shadow-lg rounded-lg flex justify-center items-center"
                        onClick={handleClose}
                    >
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    </button>

                    <Typography id="modal-modal-title" variant="h6">School Details</Typography>

                    <section
                        className='bg-white flex flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                        {/* School Info */}
                        <div className="w-full items-start flex my-2">
                            <h3 className="font-medium">School Details</h3>
                        </div>
                        <div className='w-full flex flex-wrap'>
                            <TextField
                                name="schoolName"
                                label="School Name"
                                value={school?.schoolName || ''}
                                disabled
                            />
                        </div>
                        <div className='w-full flex flex-wrap'>
                            <TextField label="Province" value={school?.province || ''} disabled/>
                            <TextField label="District" value={school?.district || ''} disabled/>
                            <TextField label="Zonal" value={school?.zonal || ''} disabled/>
                        </div>
                        <div className='w-full flex flex-wrap'>
                            <TextField label="Level of School" value={school?.levelOfSchool || ''} disabled/>
                            <TextField label="Type of School" value={school?.typeOfSchool || ''} disabled/>
                            <TextField label="Grade Span" value={school?.gradeSpan || ''} disabled/>
                        </div>
                        <div className='w-full flex flex-wrap'>
                            <TextField label="Gender" value={school?.gender || ''} disabled/>
                            <TextField label="Ethnicity" value={school?.ethnicity || ''} disabled/>
                            <TextField label="Language Medium" value={school?.languageMedium || ''} disabled/>
                        </div>
                        <div className='w-full flex flex-wrap'>
                            <TextField label="Student Population" value={school?.studentPopulation || ''} disabled/>
                            <TextField label="Teacher Population" value={school?.teacherPopulation || ''} disabled/>
                            <TextField label="Class Count" value={school?.classCount?.toString() || ''} disabled/>
                        </div>

                        {/* Principal Info */}
                        <div className="w-full items-start flex my-2">
                            <h3 className="font-medium">Principal Details</h3>
                        </div>
                        <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                            <TextField label="Principal Name" value={school?.principal?.fullName || ''}
                                       disabled={true}/>
                            <TextField label="Contact" value={principal?.contact || ''} disabled={true}/>
                            <TextField label="NIC" value={principal?.nic || ''} disabled={true}/>
                        </div>
                        <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                            <TextField label="Username" value={principal?.username || ''} disabled={true}/>
                            <TextField label="Email" value={principal?.email || ''} disabled={true}/>
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

                        <div className='flex w-full justify-end'>
                            <Button name="Done" color="bg-blue-600" onClick={handleClose}/>
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
