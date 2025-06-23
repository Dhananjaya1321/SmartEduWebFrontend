import React, { useState } from "react";
import { Button } from "../../../component/Button/Button"; // If you're using your button component

export const StudentDetailsPanel = () => {
    const [activeTab, setActiveTab] = useState("progress");

    const student = {
        name: "J. P. Isuru Dhananjaya",
        grade: "10 - A",
        index: "5003-56-11",
        enteredDate: "2025/01/12",
        dob: "2025/01/12",
        address: "Address",
        mother: { name: "Mother’s Name", phone: "075 1202 550" },
        father: { name: "Father’s Name", phone: "075 1202 550" }
    };

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
                        <h2 className="text-xl font-bold">{student.name}</h2>
                        <p className="text-sm">{student.grade} | Index No. :- {student.index}</p>
                    </div>
                </div>
                <Button
                    name="+ Achievement"
                    color="bg-[#2FEB00]"
                />
            </div>

            {/* Basic Info */}
            <div className="bg-gray-100 p-4 mt-4 rounded-lg flex flex-col items-start">
                <h3 className="font-semibold text-md mb-5">Student Basic Information</h3>
                <div className="flex flex-col items-start gap-y-5 text-sm">
                    <div className="flex flex-row gap-12">
                        <div className="flex flex-col items-start">
                            <strong>Entered date:</strong>
                            <p>{student.enteredDate}</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <strong>Birth of Date:</strong>
                            <p>{student.dob}</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-12">
                        <div className="flex flex-col items-start">
                            <strong>Address:</strong>
                            <p>{student.address}</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <strong>Mother:</strong>
                            <p>{student.mother.name} | {student.mother.phone}</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <strong>Father:</strong>
                            <p>{student.father.name} | {student.father.phone}</p>
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
                {activeTab === "progress" && <p className="text-gray-500">Progress Chart goes here (Test 1-6)</p>}
                {activeTab === "attendance" && <p className="text-gray-500">Attendance Chart / Table goes here</p>}
                {activeTab === "achievements" && <p className="text-gray-500">Achievements List goes here</p>}
            </div>
        </div>
    );
};
