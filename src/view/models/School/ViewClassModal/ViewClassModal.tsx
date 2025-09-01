import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faTimes} from "@fortawesome/free-solid-svg-icons";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    maxHeight: '80vh',
    bgcolor: 'background.paper',
    border: '2px solid #006CAF',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto'
};

interface Student {
    id: string;
    name: string;
}

interface ClassData {
    className: string;
    classTeacher: string;
    subject: string;
    students: Student[];
}

interface ViewClassModalProps {
    classData: ClassData;
}

const ViewClassModal: React.FC<ViewClassModalProps> = ({classData}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <button
                onClick={handleOpen}
                className="rounded-xl w-[40px] h-[40px] text-blue-600 hover:bg-blue-100"
            >
                <FontAwesomeIcon icon={faEye}/>
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

                    <Typography variant="h6" component="h2" className="mb-4">
                        Class: {classData.className}
                    </Typography>

                    <div className="mb-4">
                        <p><strong>Class Teacher:</strong> {classData.classTeacher}</p>
                        <p><strong>Subject:</strong> {classData.subject}</p>
                    </div>

                    <Typography variant="subtitle1" className="mt-4 mb-2">
                        Students in Class
                    </Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {classData.students.map((student) => (
                                <TableRow key={student.id}>
                                    <TableCell>{student.id}</TableCell>
                                    <TableCell>{student.name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </Modal>
        </>
    );
};

export default ViewClassModal;
