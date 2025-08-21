import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Button} from '../../../component/Button/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {SchoolLeavingCertificate} from '../../../component/Letters/SchoolLeavingCertificate/SchoolLeavingCertificate';
import {CharacterCertificate} from '../../../component/Letters/CharacterCertificate/CharacterCertificate';
import {RecommendationLetter} from '../../../component/Letters/RecommendationLetter/RecommendationLetter';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import letterAPIController from "../../../../controller/LetterAPIController";

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
    overflowY: 'auto',
};

interface ViewLetterModalProps {
    letterType: 'LEAVING_CERTIFICATE' | 'CHARACTER_CERTIFICATE' | 'recommendation';
    open: boolean;
    onClose: () => void;
    onAccept: () => void;
    data: {
        [key: string]: any;
    };
}

export default function ViewLetterModal({
                                            letterType,
                                            open,
                                            onClose,
                                            onAccept,
                                            data,
                                        }: ViewLetterModalProps) {
    const [signatureFile, setSignatureFile] = useState<File | null>(null);

    const renderLetter = () => {
        switch (letterType) {
            case 'LEAVING_CERTIFICATE':
                return <SchoolLeavingCertificate studentName={data.studentName} studentId={data.studentId}
                                                 lastGrade={data.lastGrade}
                                                 description={data.description}
                                                 requestedDate={data.requestedDate} {...data}
                                                 setSignatureFile={setSignatureFile}/>;
            case 'CHARACTER_CERTIFICATE':
                return <CharacterCertificate studentName={data.studentName} studentId={data.studentId}
                                             lastGrade={data.lastGrade}
                                             description={data.description}
                                             requestedDate={data.requestedDate} {...data}
                                             setSignatureFile={setSignatureFile}/>;
            case 'recommendation':
                return <RecommendationLetter schoolName={''} schoolLogoUrl={''} studentName={''} admissionNo={''}
                                             academicPerformance={''} achievements={''} personalTraits={''}
                                             recommendationPurpose={''} issueDate={''} principalName={''}
                                             principalSignatureUrl={''} {...data} />;
            default:
                return null;
        }
    };

    const getTitle = () => {
        switch (letterType) {
            case 'LEAVING_CERTIFICATE':
                return 'School Leaving Certificate';
            case 'CHARACTER_CERTIFICATE':
                return 'Character Certificate';
            case 'recommendation':
                return 'Letter of Recommendation';
            default:
                return '';
        }
    };

    const handleAccept = async () => {
        const element = document.getElementById('certificate-content');
        if (!element) {
            console.error('Certificate content element not found');
            return;
        }

        try {
            const canvas = await html2canvas(element, {scale: 2});
            const imgData = canvas.toDataURL('image/png');

            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgProps = (pdf as any).getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

            // Convert to Blob
            const pdfBlob = pdf.output('blob');

            // Prepare form data
            const formData = new FormData();
            formData.append('file', pdfBlob, 'school_leaving_certificate.pdf');
            if (signatureFile) {
                formData.append('signature', signatureFile);
            }

            // Send to backend using saveLetterPDF
            const response = await letterAPIController.saveLetterPDF(formData, data.studentId, data.id);

            if (!response) {
                throw new Error('Failed to upload certificate');
            }

            onAccept();
            onClose();
        } catch (error) {
            console.error('Error generating or uploading PDF:', error);
        }
    };

    return (
        <Modal open={open} onClose={onClose} aria-labelledby='modal-modal-title'>
            <Box sx={style}>
                <button
                    className='absolute top-[15px] right-[15px] text-red-500 hover:text-gray-700 p-2 w-[40px] h-[40px] bg-white shadow-lg rounded-lg flex justify-center items-center'
                    onClick={onClose}
                >
                    <FontAwesomeIcon icon={faTimes} size='lg'/>
                </button>

                <Typography id='modal-modal-title' variant='h6' component='h2'>
                    {getTitle()}
                </Typography>

                <section
                    className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                    <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                        <div id='certificate-content'>{renderLetter()}</div>
                    </div>
                    <div className='flex flex-row flex-wrap items-center justify-end w-full mt-5'>
                        <Button name={'Accept'} color={'bg-blue-600'} onClick={handleAccept}/>
                    </div>
                </section>
            </Box>
        </Modal>
    );
}
