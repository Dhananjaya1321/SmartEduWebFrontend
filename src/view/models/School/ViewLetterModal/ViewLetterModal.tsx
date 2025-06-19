import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from "../../../component/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { SchoolLeavingCertificate } from "../../../component/Letters/SchoolLeavingCertificate/SchoolLeavingCertificate";
import { CharacterCertificate } from "../../../component/Letters/CharacterCertificate/CharacterCertificate";
import { RecommendationLetter } from "../../../component/Letters/RecommendationLetter/RecommendationLetter";

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

interface ViewLetterModalProps {
    letterType: 'leaving' | 'character' | 'recommendation';
    open: boolean;
    onClose: () => void;
    onAccept: () => void;
    data: any;
}

export default function ViewLetterModal({
                                            letterType,
                                            open,
                                            onClose,
                                            onAccept,
                                            data
                                        }: ViewLetterModalProps) {
    const renderLetter = () => {
        switch (letterType) {
            case 'leaving':
                return <SchoolLeavingCertificate {...data} />;
            case 'character':
                return <CharacterCertificate {...data} />;
            case 'recommendation':
                return <RecommendationLetter {...data} />;
            default:
                return null;
        }
    };

    const getTitle = () => {
        switch (letterType) {
            case 'leaving':
                return 'School Leaving Certificate';
            case 'character':
                return 'Character Certificate';
            case 'recommendation':
                return 'Letter of Recommendation';
            default:
                return '';
        }
    };

    return (
        <Modal open={open} onClose={onClose} aria-labelledby="modal-modal-title">
            <Box sx={style}>
                <button
                    className="absolute top-[15px] right-[15px] text-red-500 hover:text-gray-700 p-2 w-[40px]
                    h-[40px] bg-white shadow-lg rounded-lg flex justify-center items-center"
                    onClick={onClose}
                >
                    <FontAwesomeIcon icon={faTimes} size="lg" />
                </button>

                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {getTitle()}
                </Typography>

                <section className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                    <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                        {renderLetter()}
                    </div>
                    <div className='flex flex-row flex-wrap items-center justify-end w-full mt-5'>
                        <Button name={'Accept'} color={'bg-blue-600'} onClick={onAccept} />
                    </div>
                </section>
            </Box>
        </Modal>
    );
}
