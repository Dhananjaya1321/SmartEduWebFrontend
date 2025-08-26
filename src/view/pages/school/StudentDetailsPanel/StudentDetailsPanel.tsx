import React, {useEffect, useState} from "react";
import {Button} from "../../../component/Button/Button";
import CreateAchievementModal from "../../../models/School/CreateAchievementModal/CreateAchievementModal";
import studentAPIController from "../../../../controller/StudentAPIController";
import achievementAPIController from "../../../../controller/AchievementAPIController";
import attendanceAPIController from "../../../../controller/AttendanceAPIController";
import eventAPIController from "../../../../controller/EventAPIController";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

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
    const [attendance, setAttendance] = useState<any>(null);
    const [achievements, setAchievements] = useState<any[]>([]);
    const [activeTab, setActiveTab] = useState("attendance");

    const handleDelete = async (id: string) => {
        const confirmed = window.confirm("Are you sure you want to delete this achievement?");
        if (!confirmed) return;

        const success = await achievementAPIController.deleteAchievementsByStudentId(id);
        if (success) {
            await fetchAchievements();
        } else {
            alert("Failed to delete achievement.");
        }
    };

    const fetchAchievements = async () => {
        const response = await achievementAPIController.getAchievementsByStudentId(student.id);
        if (response) {
            setAchievements(response);
        }
    };

    const fetchAttendance = async () => {
        const response = await attendanceAPIController.getAttendanceByStudentId(student.id);
        if (response) {
            setAttendance(response);
        }
    };

    useEffect(() => {
        fetchAchievements();
        fetchAttendance();
    }, [student]);

    return (
        <div className="w-full bg-white rounded-xl shadow-md p-4">
            {/* Student Header Card */}
            <div className="flex items-center justify-between bg-[#005285] text-white p-4 rounded-xl">
                <div className="flex items-center">
                    <div className="flex flex-col items-start">
                        <h2 className="text-xl font-bold">{student.fullNameWithInitials}</h2>
                        <p className="text-sm">{student.className} | Index No.: {student.registrationNumber}</p>
                    </div>
                </div>
                <CreateAchievementModal studentId={student.id}/>
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
                {["Attendance", "Achievements"].map(tab => (
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
            <div className="mt-4 h-[220px] bg-white rounded-lg border overflow-y-auto p-4">
                {activeTab === "attendance" && (
                    <div className="flex items-center justify-center w-full h-full">
                        {attendance ? (
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="flex text-start items-start self-start text-xl"><strong>Total
                                    Days: </strong> {attendance.totalDays}</div>
                                <div className="flex text-start items-start self-start text-xl">
                                    <strong>Attended: </strong> {attendance.totalAttended}</div>
                                <div className="flex text-start items-start self-start text-xl">
                                    <strong>Absent: </strong> {attendance.totalAbsent}</div>
                                <div className="flex text-start items-start self-start text-xl"><strong>Attendance
                                    Rate: </strong> {attendance.attendedRate}%
                                </div>
                            </div>
                        ) : (
                            <p className="text-gray-500">No attendance recorded</p>
                        )}
                    </div>
                )}

                {activeTab === "achievements" && (
                    <div>
                        {achievements.length > 0 ? (
                            <ul className="space-y-3 text-sm">
                                {achievements.map((ach) => (
                                    <li key={ach.id}
                                        className="relative flex flex-col  border p-3 rounded-lg shadow-sm gap-3 flex-wrap">
                                        <button
                                            className="absolute right-0 top-0 rounded-xl w-[40px] h-[40px] text-red-600 hover:bg-red-100"
                                            onClick={() => handleDelete(ach.id)}
                                        ><FontAwesomeIcon icon={faTrash}/></button>
                                        <div className="flex flex-col">
                                            <p className="flex flex-row gap-1 text-xl">{ach.name} ({ach.place} PLACE)</p>
                                            <p className="flex flex-row gap-1">{ach.description} ({ach.level})</p>
                                        </div>

                                        <div className="flex flex-col">
                                            <p className="flex flex-row gap-1">
                                                <strong>Category:</strong> {ach.category}</p>
                                            <p className="flex flex-row gap-1"><strong>Date:</strong> {ach.date}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500">No achievements recorded</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
