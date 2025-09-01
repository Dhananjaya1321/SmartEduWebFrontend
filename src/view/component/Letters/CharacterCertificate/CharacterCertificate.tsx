import React, {useEffect, useState} from "react";
import studentAPIController from "../../../../controller/StudentAPIController";
import principalAPIController from "../../../../controller/PrincipalAPIController";


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

interface CharacterCertificateProps {
    studentName: string;
    studentId: string;
    lastGrade: string;
    description: string;
    requestedDate: string;
    issuedDate?: string;
    setSignatureFile?: (file: File | null) => void; // Prop to update signature file
}

export const CharacterCertificate: React.FC<CharacterCertificateProps> = ({
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
        <div className="w-[800px] mx-auto p-10 border border-gray-300 rounded-xl shadow-lg bg-white font-serif">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-400 pb-4 mb-6">
                <div className="text-center flex-grow">
                    <h1 className='text-2xl font-bold uppercase'>{principleData.schoolName}</h1>
                    <h2 className="text-lg font-medium">Character Certificate</h2>
                </div>
            </div>

            {/* Content */}
            <div className="text-[17px] text-gray-800 space-y-4 leading-8">
                <p>
                    This is to certify that <strong>{studentName}</strong>, who studied up to{" "}
                    <strong>{lastGrade}</strong> in this institution, has maintained good character during
                    the period of their education.
                </p>
                <p>
                    Remarks on conduct: <strong>{description}</strong>
                </p>
                <p>
                    This certificate is issued upon the student’s request on{" "}
                    <strong>{requestedDate}</strong>.
                </p>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-end mt-10 pt-6 border-t border-gray-400">
                <div>
                    <p className="text-sm text-gray-600">Date of Issue:</p>
                    <p className="font-semibold">{issuedDate || "Pending"}</p>
                </div>
                <div className="text-right">
                    <div className='flex flex-col items-start w-full mt-5'>
                        <label className='text-sm font-semibold mb-2'>Upload Principal's Signature</label>
                        <input type='file' accept='image/*' onChange={handleFileChange}/>
                    </div>

                    <p className='font-semibold'>{principleData.fullName}</p>
                    <p className='text-sm text-gray-600'>Principal</p>
                </div>
            </div>
        </div>
    );
};
