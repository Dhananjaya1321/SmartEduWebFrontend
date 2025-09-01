import React, {useEffect, useState} from "react";
import CreateStudentModal from "../../../models/School/CreateStudentModal/CreateStudentModal";
import studentAPIController from "../../../../controller/StudentAPIController";
import {StudentDetailsPanel} from "../StudentDetailsPanel/StudentDetailsPanel";
import {Alert} from "@mui/material";

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

export const Students = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

    const fetchStudents = async () => {
        const response = await studentAPIController.getAllStudents();
        if (response) {
            setStudents(response);
        }
    };
    const handleClassesReshuffle = async () => {
        const response = await studentAPIController.classesReshuffle();
        if (response) {
            alert('Classes Reshuffle Successfully')
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <section className="h-max flex w-[95%] flex-col justify-center">
            <section className="flex flex-row gap-5">
                {/* Sidebar */}
                <section className="bg-white flex flex-col items-center mt-5 p-5 rounded-xl shadow-md w-[350px]">
                    <table className="flex w-full flex-row justify-between font-semibold mb-2">
                        <tr className="flex w-full flex-row justify-between">
                            <th className="flex justify-start w-[180px]">Name</th>
                            <th className="flex justify-start w-[20px] mr-8">Class</th>
                        </tr>
                    </table>
                    {students.map((student) => (
                        <button
                            key={student.id}
                            onClick={() => setSelectedStudent(student)}
                            className="mt-2 flex flex-row justify-between w-full px-3 py-3 bg-[#F0F4F9] text-black hover:bg-blue-950 hover:text-white font-medium border-b rounded-md"
                        >
                            <tr className="flex w-full flex-row justify-between">
                                <td className="flex items-center justify-start text-start h-[50px] overflow-hidden w-[170px]">
                                    {student.fullName}
                                </td>
                                <td className="flex items-center justify-start text-start h-[50px] w-[40px]">
                                    {student.className}
                                </td>
                            </tr>
                        </button>
                    ))}
                </section>

                {/* Details Panel */}
                <section className="w-[750px] bg-white flex flex-col mt-5 p-5 rounded-xl shadow-md">
                    <section className="text-[#005285] flex flex-row justify-end w-full mb-4">
                        <button
                            className={`h-[46px] bg-green-600 px-6 py-3 rounded-md text-white font-medium mx-3 mt-2`}
                            onClick={handleClassesReshuffle}
                        >
                            Reshuffle Classes
                        </button>

                        <CreateStudentModal/>
                    </section>
                    {selectedStudent && (
                        <StudentDetailsPanel student={selectedStudent}/>
                    )}
                </section>
            </section>
        </section>
    );
};
