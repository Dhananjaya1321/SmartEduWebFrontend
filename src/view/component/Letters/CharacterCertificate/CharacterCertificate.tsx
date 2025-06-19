import React from 'react';

interface CharacterCertificateProps {
    schoolName: string;
    schoolLogoUrl: string;
    studentName: string;
    admissionNo: string;
    gradeOrClass: string;
    duration: string;
    characterDescription: string;
    issueDate: string;
    principalName: string;
    principalSignatureUrl: string;
}

export const CharacterCertificate: React.FC<CharacterCertificateProps> = ({
                                                                              schoolName,
                                                                              schoolLogoUrl,
                                                                              studentName,
                                                                              admissionNo,
                                                                              gradeOrClass,
                                                                              duration,
                                                                              characterDescription,
                                                                              issueDate,
                                                                              principalName,
                                                                              principalSignatureUrl,
                                                                          }) => {
    return (
        <div className="w-[800px] mx-auto p-10 border border-gray-300 rounded-xl shadow-lg bg-white font-serif">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-400 pb-4 mb-6">
                <img src={schoolLogoUrl} alt="School Logo" className="h-20 w-20 object-contain" />
                <div className="text-center flex-grow">
                    <h1 className="text-2xl font-bold uppercase">{schoolName}</h1>
                    <h2 className="text-lg font-medium">Character Certificate</h2>
                </div>
            </div>

            {/* Content */}
            <div className="text-[17px] text-gray-800 space-y-4 leading-8">
                <p>This is to certify that <strong>{studentName}</strong> (Admission No: <strong>{admissionNo}</strong>) was a student of class <strong>{gradeOrClass}</strong> at our school during the period <strong>{duration}</strong>.</p>
                <p>To the best of our knowledge and belief, their character and conduct during their stay at the school has been: <strong>{characterDescription}</strong>.</p>
                <p>This certificate is being issued upon the student’s request for future academic or personal use.</p>
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
