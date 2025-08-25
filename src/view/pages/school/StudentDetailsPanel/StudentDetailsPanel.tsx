import React, {useState} from "react";
import {Button} from "../../../component/Button/Button";
import CreateAchievementModal from "../../../models/School/CreateAchievementModal/CreateAchievementModal";

interface Student {
    id: string;
    fullName: string;
    fullNameWithInitials: string;
    registrationNumber: string;
    dateOfBirth: string;
    entryDate: string;
    address: string;
    motherName: string;
    motherContact: string;
    fatherName: string;
    fatherContact: string;
    gradeId: string;
    gradeName: string;
    classId: string;
    className: string;
    schoolId: string;
}

interface StudentDetailsPanelProps {
    student: Student;
}

export const StudentDetailsPanel = ({student}: StudentDetailsPanelProps) => {
    const [activeTab, setActiveTab] = useState("progress");
    console.log(student)
    return (
        <div className="w-full bg-white rounded-xl shadow-md p-4">
            {/* Student Header Card */}
            <div className="flex items-center justify-between bg-[#005285] text-white p-4 rounded-xl">
                <div className="flex items-center">
                    <img
                        src="https://via.placeholder.com/80"
                        alt="student"
                        className="w-[80px] h-[80px] rounded-lg mr-4 border-2 border-white"
                    />
                    <div className="flex flex-col items-start">
                        <h2 className="text-xl font-bold">{student.fullNameWithInitials}</h2>
                        <p className="text-sm">{student.className} | Index No.: {student.registrationNumber}</p>
                    </div>
                </div>
                <CreateAchievementModal studentId={student.id} />
            </div>

            {/* Basic Info */}
            <div className="bg-gray-100 p-4 mt-4 rounded-lg flex flex-col items-start">
                <h3 className="font-semibold text-md mb-5">Student Basic Information</h3>
                <div className="flex flex-col items-start gap-y-5 text-sm">
                    <div className="flex flex-row gap-12">
                        <div className="flex flex-col items-start">
                            <strong>Entered date:</strong>
                            <p>{student.entryDate}</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <strong>Date of Birth:</strong>
                            <p>{student.dateOfBirth}</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-12">
                        <div className="flex flex-col items-start">
                            <strong>Address:</strong>
                            <p>{student.address}</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <strong>Mother:</strong>
                            <p>{student.motherName} | {student.motherContact}</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <strong>Father:</strong>
                            <p>{student.fatherName} | {student.fatherContact}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex space-x-4 mt-6 border-b">
                {["Progress", "Attendance", "Achievements"].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab.toLowerCase())}
                        className={`px-4 py-2 font-medium ${activeTab === tab.toLowerCase() ? 'border-b-4 border-[#005285] text-[#005285]' : 'text-gray-500'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="mt-4 h-[220px] flex items-center justify-center bg-white rounded-lg border">
                {activeTab === "progress" && (
                    <div className="w-full p-4 overflow-y-auto">
                        <p className="text-gray-500">No progress recorded</p>
                    </div>
                )}
                {activeTab === "attendance" && (
                    <div className="w-full p-4 overflow-y-auto">
                        <p className="text-gray-500">No attendance recorded</p>
                    </div>
                )}
                {activeTab === "achievements" && (
                    <div className="w-full p-4 overflow-y-auto">
                        <p className="text-gray-500">No achievements recorded</p>
                    </div>
                )}
            </div>
        </div>
    );
};
