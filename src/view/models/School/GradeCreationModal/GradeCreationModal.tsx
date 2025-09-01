import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {Button} from '../../../component/Button/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {DropdownField} from '../../../component/DropdownField/DropdownField';
import {useState} from 'react';
import {gradeSubjectMap} from '../../../context/Arrays';
import {TextField} from "../../../component/TextField/TextField";
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";

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


    const [checked, setChecked] = React.useState([true, false]);

    const handleChangeALStreams = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, event.target.checked]);
    };

    const handleChangeScienceStream = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, checked[1]]);
    };

    const handleChangeCommerceStream = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], event.target.checked]);
    };
    const handleChangeTechStream = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], event.target.checked]);
    };
    const handleChangeArtStream = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], event.target.checked]);
    };

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'row', ml: 3 }}>
            <FormControlLabel
                label="Science stream"
                control={<Checkbox checked={checked[0]} onChange={handleChangeScienceStream} />}
            />
            <FormControlLabel
                label="Commerce stream"
                control={<Checkbox checked={checked[1]} onChange={handleChangeCommerceStream} />}
            />
            <FormControlLabel
                label="Tech stream"
                control={<Checkbox checked={checked[2]} onChange={handleChangeTechStream} />}
            />
            <FormControlLabel
                label="Art stream"
                control={<Checkbox checked={checked[3]} onChange={handleChangeArtStream} />}
            />
        </Box>
    );
    return (
        <div>
            <Modal open={open} aria-labelledby="modal-modal-title">
                <Box sx={style}>
                    <section
                        className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                        <section
                            className='w-full flex flex-row flex-wrap items-center justify-center'>
                            <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                                <div className="w-full items-start flex my-2">
                                    <h3 className="font-medium">Please select all the grades available at your
                                        school.</h3>
                                </div>

                                <div className="w-full items-start flex my-2">
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked/>} label="Grade 1 to 5"/>
                                        <FormControlLabel control={<Checkbox/>} label="Grade 6"/>
                                        <FormControlLabel control={<Checkbox/>} label="Grade 7"/>
                                        <FormControlLabel control={<Checkbox/>} label="Grade 8"/>
                                        <FormControlLabel control={<Checkbox/>} label="Grade 9"/>
                                        <FormControlLabel control={<Checkbox/>} label="Grade 10 and 11"/>
                                        <div>
                                            <FormControlLabel
                                                label="Grade 12 and 13"
                                                control={
                                                    <Checkbox
                                                        checked={checked[0]}
                                                        indeterminate={checked[0] !== checked[1]}
                                                        onChange={handleChangeALStreams}
                                                    />
                                                }
                                            />
                                            {children}
                                        </div>
                                    </FormGroup>
                                </div>
                            </div>
                        </section>
                        <div className='flex flex-row flex-wrap items-center justify-end w-full'>
                            <div className="w-full flex justify-end mt-5">
                                <Button name={'Create'} color={'bg-green-600'}/>
                            </div>
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
