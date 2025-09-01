import React, {useState} from "react";
import {StudentDetailsPanel} from "../StudentDetailsPanel/StudentDetailsPanel";
import CreateStudentModal from "../../../models/School/CreateStudentModal/CreateStudentModal";

// Simulated Backend Data
interface Student {
    id: string;
    name: string;
}

interface ClassData {
    className: string;
    classTeacher: string;
    subject: string;
    students: Student[];
}

interface ClassGroup {
    grade: string;
    classRange: string[];
    classCount: number;
    classes: ClassData[];
}

const classData: ClassGroup[] = [
    {
        grade: "Grade 10",
        classRange: ["A"],
        classCount: 1,
        classes: [
            {
                className: "10-A",
                classTeacher: "Ms. Kamani",
                subject: "Sinhala",
                students: [
                    {id: "S1", name: "Nimal Perera"},
                    {id: "S2", name: "Kamal Fernando"},
                    {id: "S3", name: "Sunethra Silva"}
                ]
            }
        ]
    },
    {
        grade: "Grade 11",
        classRange: ["A", "B"],
        classCount: 2,
        classes: [
            {
                className: "11-A",
                classTeacher: "Mr. Silva",
                subject: "Math",
                students: [
                    {id: "S4", name: "Ruwan Jayasuriya"},
                    {id: "S5", name: "Chathurika Weerasinghe"}
                ]
            },
            {
                className: "11-B",
                classTeacher: "Mrs. Dilani",
                subject: "Geography",
                students: [
                    {id: "S6", name: "Amal Rajapaksha"},
                    {id: "S7", name: "Dinesh Kumara"},
                    {id: "S8", name: "Piumi Nadeesha"}
                ]
            }
        ]
    }
];

export const Students = () => {
    const [selectedStudent, setSelectedStudent] = useState<ClassGroup | null>(null);

    return (
        <>
            <section className="h-max flex w-[95%] flex-col justify-center">
                <section className="flex flex-row gap-5">
                    {/* Sidebar */}
                    <section className="bg-white flex flex-col items-center mt-5 p-5 rounded-xl shadow-md w-[350px]">
                        <table className="flex w-full flex-row justify-between font-semibold mb-2">
                            <tr className="flex w-full flex-row">
                                <th className="flex justify-start w-[80px]">Photo</th>
                                <th className="flex justify-start w-[180px]">Name</th>
                                <th className="flex justify-start w-[20px]">Grade</th>
                            </tr>
                        </table>
                        {classData.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedStudent(item)}
                                className="mt-2 flex flex-row justify-between w-full px-3 py-3 bg-[#F0F4F9] text-black hover:bg-blue-950 hover:text-white font-medium border-b rounded-md"
                            >
                                <tr className="flex w-full flex-row justify-between">
                                    <td className="flex items-center justify-start text-start h-[50px] w-[50px]">
                                        <div className="w-[40px] h-[40px] bg-yellow-600"></div>
                                    </td>
                                    <td className="flex items-center justify-start  text-start h-[50px] overflow-hidden w-[170px]">Kamal
                                        sadaruwan
                                    </td>
                                    <td className="flex items-center justify-start text-start h-[50px] w-[40px]">10-A</td>
                                </tr>
                            </button>
                        ))}
                    </section>

                    <section className="w-[750px] bg-white flex flex-col mt-5 p-5 rounded-xl shadow-md">
                        <section className="text-[#005285] flex flex-row justify-end w-full mb-4">
                            <CreateStudentModal/>
                        </section>
                        {selectedStudent && (
                            <StudentDetailsPanel/>
                        )}
                    </section>
                </section>
            </section>
        </>
    );
}
