import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {TextArea} from "../../../component/TextArea/TextArea";
import {Button} from "../../../component/Button/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faPen, faTimes, faTrash} from "@fortawesome/free-solid-svg-icons";
import {TextField} from "../../../component/TextField/TextField";
import {DropdownField} from "../../../component/DropdownField/DropdownField";
import {Table, TableBody, TableCell, TableHead, TableRow, IconButton, Tooltip} from "@mui/material";

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

export default function CreateClassModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

// Inside your component
    const [availableStudents, setAvailableStudents] = React.useState([
        {label: "Kasun Perera", value: "kasun"},
        {label: "Nimali Silva", value: "nimalis"},
        {label: "Amal Rajapaksha", value: "amal"},
    ]);
    const [selectedStudent, setSelectedStudent] = React.useState('');
    const [studentsInClass, setStudentsInClass] = React.useState<any[]>([]);

    const handleAddStudent = () => {
        if (!selectedStudent) return;
        const student = availableStudents.find(s => s.value === selectedStudent);
        if (student && !studentsInClass.some(s => s.value === selectedStudent)) {
            setStudentsInClass([...studentsInClass, student]);
            setSelectedStudent('');
        }
    };

    const handleRemoveStudent = (value: string) => {
        setStudentsInClass(prev => prev.filter(s => s.value !== value));
    };
    return (
        <div>
            <button
                className={`h-[46px] bg-green-600 px-6 py-3 rounded-md text-white font-medium mx-3 mt-2`}
                onClick={handleOpen}
            >
                Create Class
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
                        Create Class
                    </Typography>
                    <section
                        className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                        <section
                            className='w-full flex flex-row flex-wrap items-center justify-center'>
                            <section className='w-full flex flex-row flex-wrap items-center justify-center'>
                                <div className="w-full items-start flex my-2">
                                    <h3 className="font-medium">Class Details</h3>
                                </div>
                                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                    <DropdownField
                                        label="Select class teacher"
                                        important="*"
                                        mt={"12px"}
                                        mb={"12px"}
                                        ml={"12px"}
                                        mr={"12px"}
                                        options={
                                            [
                                                {label: 'Select...', value: ''},
                                            ]
                                        }
                                    />
                                    <TextField
                                        name="className"
                                        placeholder={'ex- A'}
                                        label={'Class name'}
                                    />
                                </div>
                            </section>
                        </section>
                    </section>
                    <section
                        className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>

                        <section className='w-full flex flex-row flex-wrap items-center justify-center'>
                            <div className="w-full items-start flex my-2">
                                <h3 className="font-medium">Add Students For The Class</h3>
                            </div>
                            <div className="mx-2 w-full flex flex-row gap-3 items-center">
                                <DropdownField
                                    label="Select Student"
                                    important="*"
                                    options={[{label: 'Select...', value: ''}, ...availableStudents]}
                                    value={selectedStudent}
                                    onChange={(e) => setSelectedStudent(e.target.value)}
                                />
                            </div>
                            <div className='flex flex-row flex-wrap items-center justify-end w-full'>
                                <Button
                                    name={'Add'}
                                    color={'bg-green-600'}
                                    onClick={handleAddStudent}
                                />
                            </div>
                            {studentsInClass.length > 0 && (
                                <Table className="mt-6 w-full">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Student Name</TableCell>
                                            <TableCell>Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {studentsInClass.map((student, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{student.label}</TableCell>
                                                <TableCell>
                                                    <Tooltip title="Remove">
                                                        <IconButton
                                                            onClick={() => handleRemoveStudent(student.value)}>
                                                            <FontAwesomeIcon icon={faTrash}
                                                                             className="text-red-600"/>
                                                        </IconButton>
                                                    </Tooltip>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            )}
                        </section>
                    </section>
                    <section
                        className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                        <div className='flex flex-row flex-wrap items-center justify-end w-full'>
                            <Button
                                name={'Create Class'}
                                color={'bg-blue-600'}
                            />
                        </div>
                    </section>

                </Box>
            </Modal>
        </div>
    );
}
