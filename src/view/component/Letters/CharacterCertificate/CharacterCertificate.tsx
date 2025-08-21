import React from "react";

interface CharacterCertificateProps {
    schoolName: string;
    schoolLogoUrl: string;
    studentName: string;
    lastGrade: string;
    description: string;
    requestedDate: string;
    issuedDate?: string;
    principalName: string;
    principalSignatureUrl: string;
}

export const CharacterCertificate: React.FC<CharacterCertificateProps> = ({
                                                                              schoolName,
                                                                              schoolLogoUrl,
                                                                              studentName,
                                                                              lastGrade,
                                                                              description,
                                                                              requestedDate,
                                                                              issuedDate,
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
