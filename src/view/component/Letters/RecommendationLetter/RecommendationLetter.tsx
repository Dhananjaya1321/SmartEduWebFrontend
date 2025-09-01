import React from 'react';

interface RecommendationLetterProps {
    schoolName: string;
    schoolLogoUrl: string;
    studentName: string;
    admissionNo: string;
    academicPerformance: string;
    achievements: string;
    personalTraits: string;
    recommendationPurpose: string;
    issueDate: string;
    principalName: string;
    principalSignatureUrl: string;
}

export const RecommendationLetter: React.FC<RecommendationLetterProps> = ({
                                                                              schoolName,
                                                                              schoolLogoUrl,
                                                                              studentName,
                                                                              admissionNo,
                                                                              academicPerformance,
                                                                              achievements,
                                                                              personalTraits,
                                                                              recommendationPurpose,
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
                    <h2 className="text-lg font-medium">Letter of Recommendation</h2>
                </div>
            </div>

            {/* Content */}
            <div className="text-[17px] text-gray-800 space-y-4 leading-8">
                <p>I am pleased to recommend <strong>{studentName}</strong> (Admission No: <strong>{admissionNo}</strong>) who has been a student at our school.</p>
                <p>Academically, they have shown <strong>{academicPerformance}</strong>. In addition, they have achieved <strong>{achievements}</strong>.</p>
                <p>They possess <strong>{personalTraits}</strong> which makes them a strong candidate for <strong>{recommendationPurpose}</strong>.</p>
                <p>I have no doubt they will excel in any endeavor they choose to pursue.</p>
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
