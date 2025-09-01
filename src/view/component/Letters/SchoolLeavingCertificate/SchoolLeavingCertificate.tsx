import React, { useEffect, useState } from 'react';
import studentAPIController from '../../../../controller/StudentAPIController';
import principalAPIController from '../../../../controller/PrincipalAPIController';

interface StudentData {
    entryDate?: string;
    dateOfBirth?: string;
    className?: string;
    gradeName?: string;
    fatherName?: string;
    motherName?: string;
    address?: string;
    registrationNumber?: string;
    [key: string]: any;
}

interface PrincipleData {
    schoolName?: string;
    fullName?: string;
}

interface SchoolLeavingCertificateProps {
    studentName: string;
    studentId: string;
    lastGrade: string;
    description: string;
    requestedDate: string;
    issuedDate?: string;
    setSignatureFile?: (file: File | null) => void; // Prop to update signature file
}

export const SchoolLeavingCertificate: React.FC<SchoolLeavingCertificateProps> = ({
                                                                                      studentName,
                                                                                      studentId,
                                                                                      lastGrade,
                                                                                      description,
                                                                                      requestedDate,
                                                                                      issuedDate,
                                                                                      setSignatureFile,
                                                                                  }) => {
    const [studentData, setStudentData] = useState<StudentData>({});
    const [principleData, setPrincipleData] = useState<PrincipleData>({});
    const [localSignatureFile, setLocalSignatureFile] = useState<File | null>(null);

    useEffect(() => {
        fetchStudent();
        fetchSchoolDetails();
    }, [studentId]);

    const fetchStudent = async () => {
        try {
            const response = await studentAPIController.getStudentByStudentId(studentId);
            setStudentData(response);
        } catch (err) {
            console.error('Failed to fetch student:', err);
        }
    };

    const fetchSchoolDetails = async () => {
        try {
            const response = await principalAPIController.getPrincipalById();
            setPrincipleData(response);
        } catch (err) {
            console.error('Failed to fetch principal:', err);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setLocalSignatureFile(file);
            if (setSignatureFile) {
                setSignatureFile(file); // Update parent component state
            }
        } else {
            setLocalSignatureFile(null);
            if (setSignatureFile) {
                setSignatureFile(null);
            }
        }
    };

    return (
        <div id='certificate-content' className='w-[800px] mx-auto p-10 border border-gray-300 rounded-xl shadow-lg bg-white font-serif'>
            {/* Header */}
            <div className='flex items-center justify-between border-b border-gray-400 pb-4 mb-6'>
                <div className='text-center flex-grow'>
                    <h1 className='text-2xl font-bold uppercase'>{principleData.schoolName}</h1>
                    <h2 className='text-lg font-medium'>School Leaving Certificate</h2>
                </div>
            </div>

            {/* Body */}
            <div className='text-[17px] text-gray-800 space-y-4 leading-8'>
                <p>
                    This is to certify that <strong>{studentName}</strong>, bearing admission number{' '}
                    <strong>{studentData.registrationNumber || 'N/A'}</strong>, was admitted to this school on{' '}
                    <strong>{studentData.entryDate || 'N/A'}</strong> and has requested to leave on{' '}
                    <strong>{requestedDate}</strong>.
                </p>

                <p>
                    During their stay, the student successfully completed up to grade{' '}
                    <strong>{lastGrade}</strong>. The reason for leaving the school is stated as:{' '}
                    <strong>{description}</strong>.
                </p>

                <p>
                    The conduct of the student during their stay in the school was:{' '}
                    <strong>Good</strong>.
                </p>

                <p>
                    This certificate is issued upon the request of the student for future reference.
                </p>
            </div>

            {/* Footer */}
            <div className='flex justify-between items-end mt-10 pt-6 border-t border-gray-400'>
                <div>
                    <p className='text-sm text-gray-600'>Date of Issue:</p>
                    <p className='font-semibold'>{issuedDate || 'Pending'}</p>
                </div>

                <div className='text-right'>
                    <div className='flex flex-col items-start w-full mt-5'>
                        <label className='text-sm font-semibold mb-2'>Upload Principal's Signature</label>
                        <input type='file' accept='image/*' onChange={handleFileChange} />
                    </div>

                    <p className='font-semibold'>{principleData.fullName}</p>
                    <p className='text-sm text-gray-600'>Principal</p>
                </div>
            </div>
        </div>
    );
};
