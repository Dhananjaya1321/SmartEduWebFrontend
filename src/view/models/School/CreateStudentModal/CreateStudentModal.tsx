import * as React from 'react';
import {
    Box, Typography, Modal,
    Table, TableBody, TableCell, TableHead, TableRow,
    IconButton, Tooltip
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TextArea } from '../../../component/TextArea/TextArea';
import { Button } from '../../../component/Button/Button';
import { TextField } from '../../../component/TextField/TextField';
import { DropdownField } from '../../../component/DropdownField/DropdownField';
import studentAPIController from '../../../../controller/StudentAPIController';
import gradeAPIController from '../../../../controller/GradeAPIController';

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

export default function CreateStudentModal({ onStudentSaved }: { onStudentSaved?: () => void }) {
    const [open, setOpen] = React.useState(false);
    const [grades, setGrades] = React.useState<any[]>([]);
    const [formData, setFormData] = React.useState<any>({});

    const handleOpen = async () => {
        const regNumber = await studentAPIController.generateRegistrationNumber();
        setFormData((prev: any) => ({
            ...prev,
            regNumber: regNumber || ''
        }));
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const loadGrades = async () => {
        const response = await gradeAPIController.getAllGrades();
        if (response) {
            setGrades(response);
        }
    };

    React.useEffect(() => {
        loadGrades();
    }, []);

    const handleChange = (name: string, value: string) => {
        setFormData((prev: any) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        const adjustedStudentPayload = {
            entryDate: formData.entryDate,
            fullName: formData.fullName,
            fullNameWithInitials: formData.fullNameWithInitial,
            dateOfBirth: formData.dob,

            motherName: formData.motherName,
            motherContact: formData.motherContact,
            fatherName: formData.fatherName,
            fatherContact: formData.fatherContact,
            address: formData.address,

            registrationNumber: formData.regNumber,
            gradeId: formData.gradeId || formData.grade,
            classId: formData.classId || formData.classRoom,
        };

        console.log(adjustedStudentPayload)
        const response = await studentAPIController.saveStudent(adjustedStudentPayload);
        if (response && response.state === 'OK') {
            alert('Student created successfully!');
            setFormData({});
            setOpen(false);
            onStudentSaved?.();
        } else {
            alert('Failed to create student.');
        }
    };

    const gradeOptions = grades.map((g: any) => ({
        label: g.gradeName,
        value: g.id
    }));

    const selectedGrade = grades.find((g) => g.id === formData.grade);
    const classOptions = selectedGrade?.classRooms?.map((cls: any) => ({
        label: cls.className,
        value: cls.id
    })) || [];

    return (
        <div>
            <button
                className={`h-[46px] bg-green-600 px-6 py-3 rounded-md text-white font-medium mx-3 mt-2`}
                onClick={handleOpen}
            >
                Add New Student
            </button>

            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <button
                        className="absolute top-[15px] right-[15px] text-red-500 hover:text-gray-700 p-2 w-[40px] h-[40px] bg-white shadow-lg rounded-lg flex justify-center items-center"
                        onClick={handleClose}
                    >
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    </button>
                    <Typography variant="h6" component="h2">Create Student</Typography>

                    {/* Student Basic Info */}
                    <section className='mt-5 p-5 bg-white shadow-md rounded-xl'>
                        <h3 className="font-medium mb-4">Student Basic Information</h3>
                        <div className='flex flex-wrap gap-3'>
                            <TextField name="entryDate" type="date" label="Date the student entered school" onChange={(e) => handleChange("entryDate", e.target.value)} />
                            <TextField name="fullName" label="Full Name" onChange={(e) => handleChange("fullName", e.target.value)} />
                            <TextField name="fullNameWithInitial" label="Full Name With Initial" onChange={(e) => handleChange("fullNameWithInitial", e.target.value)} />
                            <TextField name="dob" type="date" label="Birth of Date" onChange={(e) => handleChange("dob", e.target.value)} />
                        </div>
                    </section>

                    {/* Parents Details */}
                    <section className='mt-5 p-5 bg-white shadow-md rounded-xl'>
                        <h3 className="font-medium mb-4">Parents Details</h3>
                        <div className='flex flex-wrap gap-3'>
                            <TextField name="motherName" label="Mother’s Name" onChange={(e) => handleChange("motherName", e.target.value)} />
                            <TextField name="motherContact" label="Mother’s Contact Number" onChange={(e) => handleChange("motherContact", e.target.value)} />
                            <TextField name="fatherName" label="Father’s Name" onChange={(e) => handleChange("fatherName", e.target.value)} />
                            <TextField name="fatherContact" label="Father’s Contact Number" onChange={(e) => handleChange("fatherContact", e.target.value)} />
                            <TextField name="address" label="Address" onChange={(e) => handleChange("address", e.target.value)} />
                        </div>
                    </section>

                    {/* Grade/Class Details */}
                    <section className='mt-5 p-5 bg-white shadow-md rounded-xl'>
                        <h3 className="font-medium mb-4">Other Details</h3>
                        <div className='flex flex-wrap gap-3'>
                            <TextField
                                important="*"
                                name="regNumber"
                                label="Student Registration Number"
                                value={formData.regNumber || ''}
                                onChange={(e) => handleChange("regNumber", e.target.value)}
                                disabled={true}
                            />
                            <DropdownField label="Grade" options={gradeOptions} value={formData.grade} onChange={(e) => handleChange("grade", e.target.value)} important="*" />
                            <DropdownField label="Class" options={classOptions} value={formData.classRoom} onChange={(e) => handleChange("classRoom", e.target.value)} important="*" />
                        </div>
                    </section>

                    <section className='mt-5 flex justify-end'>
                        <Button name="Create Student" color="bg-green-600" onClick={handleSubmit} />
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
