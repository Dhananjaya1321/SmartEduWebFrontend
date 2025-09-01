import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '../../../component/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormControlLabel, Checkbox, FormGroup } from '@mui/material';
import { useState } from 'react';
import gradeAPIController from "../../../../controller/GradeAPIController";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxHeight: '90vh',
    bgcolor: 'background.paper',
    border: '2px solid #006CAF',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto',
};

export default function GradeCreationModal({ openByDefault = false }: { openByDefault?: boolean }) {
    const [open, setOpen] = useState(openByDefault);

    // Grade checkboxes
    const [grades, setGrades] = useState({
        g1_5: true,
        g6: false,
        g7: false,
        g8: false,
        g9: false,
        g10_11: false,
        g12_13: false,
    });

    // Streams
    const [streams, setStreams] = useState({
        Science: false,
        Commerce: false,
        Tech: false,
        Arts: false,
    });

    const handleGradeChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setGrades(prev => ({ ...prev, [key]: e.target.checked }));
    };

    const handleStreamChange = (key: keyof typeof streams) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setStreams(prev => ({ ...prev, [key]: e.target.checked }));
    };

    const getGradeSpan = (): string => {
        const selectedGrades: number[] = [];

        if (grades.g1_5) selectedGrades.push(1, 2, 3, 4, 5);
        if (grades.g6) selectedGrades.push(6);
        if (grades.g7) selectedGrades.push(7);
        if (grades.g8) selectedGrades.push(8);
        if (grades.g9) selectedGrades.push(9);
        if (grades.g10_11) selectedGrades.push(10, 11);
        if (grades.g12_13) selectedGrades.push(12, 13);

        const min = Math.min(...selectedGrades);
        const max = Math.max(...selectedGrades);
        return `${min}-${max}`;
    };

    const handleSubmit = async () => {
        const gradeSpan = getGradeSpan();
        const streamsOfALs = grades.g12_13
            ? Object.entries(streams)
                .filter(([_, checked]) => checked)
                .map(([name]) => name)
            : [];

        const payload = {
            gradeSpan,
            streamsOfALs,
        };

        const saved = await gradeAPIController.saveGrades(payload);
        if (saved) {
            alert("Grades saved successfully.");
            setOpen(false);
        } else {
            alert("Failed to save grades.");
        }
    };

    return (
        <div>
            <Modal open={open} aria-labelledby="modal-modal-title">
                <Box sx={style}>
                    <section className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                        <section className='w-full flex flex-row flex-wrap items-center justify-center'>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <div className="w-full items-start flex my-2">
                                    <h3 className="font-medium">Please select all the grades available at your school.</h3>
                                </div>

                                <div className="w-full items-start flex my-2">
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox checked={grades.g1_5} onChange={handleGradeChange('g1_5')} />} label="Grade 1 to 5" />
                                        <FormControlLabel control={<Checkbox checked={grades.g6} onChange={handleGradeChange('g6')} />} label="Grade 6" />
                                        <FormControlLabel control={<Checkbox checked={grades.g7} onChange={handleGradeChange('g7')} />} label="Grade 7" />
                                        <FormControlLabel control={<Checkbox checked={grades.g8} onChange={handleGradeChange('g8')} />} label="Grade 8" />
                                        <FormControlLabel control={<Checkbox checked={grades.g9} onChange={handleGradeChange('g9')} />} label="Grade 9" />
                                        <FormControlLabel control={<Checkbox checked={grades.g10_11} onChange={handleGradeChange('g10_11')} />} label="Grade 10 and 11" />
                                        <div>
                                            <FormControlLabel
                                                control={<Checkbox checked={grades.g12_13} onChange={handleGradeChange('g12_13')} />}
                                                label="Grade 12 and 13"
                                            />
                                            {grades.g12_13 && (
                                                <Box sx={{ display: 'flex', flexDirection: 'row', ml: 3 }}>
                                                    <FormControlLabel
                                                        label="Science"
                                                        control={<Checkbox checked={streams.Science} onChange={handleStreamChange('Science')} />}
                                                    />
                                                    <FormControlLabel
                                                        label="Commerce"
                                                        control={<Checkbox checked={streams.Commerce} onChange={handleStreamChange('Commerce')} />}
                                                    />
                                                    <FormControlLabel
                                                        label="Tech"
                                                        control={<Checkbox checked={streams.Tech} onChange={handleStreamChange('Tech')} />}
                                                    />
                                                    <FormControlLabel
                                                        label="Arts"
                                                        control={<Checkbox checked={streams.Arts} onChange={handleStreamChange('Arts')} />}
                                                    />
                                                </Box>
                                            )}
                                        </div>
                                    </FormGroup>
                                </div>
                            </div>
                        </section>
                        <div className='flex flex-row flex-wrap items-center justify-end w-full'>
                            <div className="w-full flex justify-end mt-5">
                                <Button name={'Create'} color={'bg-green-600'} onClick={handleSubmit} />
                            </div>
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
