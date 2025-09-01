import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {Button} from '../../../component/Button/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faTimes} from '@fortawesome/free-solid-svg-icons';
import {TextField} from '../../../component/TextField/TextField';
import {DropdownField} from '../../../component/DropdownField/DropdownField';
import teacherAPIController from "../../../../controller/TeacherAPIController";
import classAPIController from "../../../../controller/ClassAPIController";
import {useEffect} from "react";


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

interface EditClassModalProps {
    classData: any;
}

export default function EditClassModal({classData}: EditClassModalProps) {
    const [open, setOpen] = React.useState(false);
    const [teachers, setTeachers] = React.useState<{ label: string, value: string }[]>([]);
    const [selectedTeacherId, setSelectedTeacherId] = React.useState('');
    const [className, setClassName] = React.useState('');

    const handleOpen = () => {
        console.log(classData)
        setSelectedTeacherId(classData.teacherId || '');
        setClassName(classData.className || '');

        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const fetchTeachers = async () => {
        const data = await teacherAPIController.findAllForSchool();
        if (data) {
            const formatted = data.map((t: any) => ({
                label: `${t.fullName}`,
                value: t.id
            }));
            console.log(formatted)
            setTeachers(formatted);
        }
    };

    const handleUpdate = async () => {
        const updatedClass = {
            id: classData.id,
            className:className,
            classTeacherId: selectedTeacherId
        };

        const success = await classAPIController.updateClasses(updatedClass);
        if (success) {
            handleClose();
            alert('Class updated successfully.');

        } else {
            alert('Failed to update class.');
        }
    };

    useEffect(() => {
        fetchTeachers();
    }, []);

    return (
        <div>
            <button
                className="rounded-xl w-[40px] h-[40px] text-green-600 hover:bg-green-100"
                onClick={handleOpen}
            >
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
                    <section
                        className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                        <section className='w-full flex flex-row flex-wrap items-center justify-center'>
                            <div className="w-full items-start flex my-2">
                                <h3 className="font-medium">Edit Class</h3>
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <DropdownField
                                    label="Select class teacher"
                                    important="*"
                                    value={selectedTeacherId}
                                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedTeacherId(e.target.value)}
                                    options={[{label: 'Select...', value: ''}, ...teachers]}
                                    mt={"12px"} mb={"12px"} ml={"12px"} mr={"12px"}
                                />
                                <TextField
                                    name="className"
                                    placeholder={'ex- A'}
                                    label={'Class name'}
                                    value={className}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setClassName(e.target.value)}
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
