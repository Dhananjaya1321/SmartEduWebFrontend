import React from 'react';

interface CertificateProps {
    schoolName: string;
    schoolLogoUrl: string;
    studentName: string;
    admissionNo: string;
    dateOfAdmission: string;
    dateOfLeaving: string;
    reasonForLeaving: string;
    conduct: string;
    principalName: string;
    principalSignatureUrl: string;
    issueDate: string;
    gradeCompleted: string;
}

export const SchoolLeavingCertificate: React.FC<CertificateProps> = ({
                                                                         schoolName,
                                                                         schoolLogoUrl,
                                                                         studentName,
                                                                         admissionNo,
                                                                         dateOfAdmission,
                                                                         dateOfLeaving,
                                                                         reasonForLeaving,
                                                                         conduct,
                                                                         principalName,
                                                                         principalSignatureUrl,
                                                                         issueDate,
                                                                         gradeCompleted,
                                                                     }) => {
    return (
        <div className="w-[800px] mx-auto p-10 border border-gray-300 rounded-xl shadow-lg bg-white font-serif">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-400 pb-4 mb-6">
                <img src={schoolLogoUrl} alt="School Logo" className="h-20 w-20 object-contain" />
                <div className="text-center flex-grow">
                    <h1 className="text-2xl font-bold uppercase">{schoolName}</h1>
                    <h2 className="text-lg font-medium">School Leaving Certificate</h2>
                </div>
            </div>

            {/* Body */}
            <div className="text-[17px] text-gray-800 space-y-4 leading-8">
                <p>This is to certify that <strong>{studentName}</strong>, bearing admission number <strong>{admissionNo}</strong>, was admitted to this school on <strong>{dateOfAdmission}</strong> and left on <strong>{dateOfLeaving}</strong>.</p>

                <p>During their stay, the student successfully completed up to grade <strong>{gradeCompleted}</strong>. The reason for leaving the school is stated as: <strong>{reasonForLeaving}</strong>.</p>

                <p>The conduct of the student during their stay in the school was: <strong>{conduct}</strong>.</p>

                <p>This certificate is issued upon the request of the student for future reference.</p>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-end mt-10 pt-6 border-t border-gray-400">
                <div>
                    <p className="text-sm text-gray-600">Date of Issue:</p>
                    <p className="font-semibold">{issueDate}</p>
                </div>

                <div className="text-right">
                    <img
                        src={principalSignatureUrl}
                        alt="Principal Signature"
                        className="h-16 w-auto object-contain mx-auto mb-1"
                    />
                    <p className="font-semibold">{principalName}</p>
                    <p className="text-sm text-gray-600">Principal</p>
                </div>
            </div>
        </div>
    );
};
