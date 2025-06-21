import React, { useState } from "react";
import TimeTableModal from "../../../models/School/TimeTableModal/TimeTableModal";
import {Paper, Tooltip} from "@mui/material";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import EditUserModal from "../../../models/Common/EditUserModal/EditUserModal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {Button} from "../../../component/Button/Button";

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
                    { id: "S1", name: "Nimal Perera" },
                    { id: "S2", name: "Kamal Fernando" },
                    { id: "S3", name: "Sunethra Silva" }
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
                    { id: "S4", name: "Ruwan Jayasuriya" },
                    { id: "S5", name: "Chathurika Weerasinghe" }
                ]
            },
            {
                className: "11-B",
                classTeacher: "Mrs. Dilani",
                subject: "Geography",
                students: [
                    { id: "S6", name: "Amal Rajapaksha" },
                    { id: "S7", name: "Dinesh Kumara" },
                    { id: "S8", name: "Piumi Nadeesha" }
                ]
            }
        ]
    }
];

export const GradesAndClasses = () => {
    const columns: GridColDef[] = [
        {
            field: 'classTeacher', headerName: 'Class Teacher', width: 200, renderCell: (params) => (
                <Tooltip title={params.value}>
                    <div
                        style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            textAlign: 'start',
                        }}
                    >
                        {params.value}
                    </div>
                </Tooltip>
            ),
        },
        {
            field: 'subjects',
            headerName: 'Subjects',
            width: 250,
            valueGetter: (params) => params.row.subject
        },
        { field: 'className', headerName: 'Class', width: 120 },
        {
            field: 'studentsCount',
            headerName: 'Students Count',
            width: 160,
            valueGetter: (params) => params.row.students.length
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 100,
            renderCell: (params) => (
                <>
                    <EditUserModal/>
                    <button
                        className="rounded-xl w-[40px] h-[40px] text-red-600 hover:bg-red-100">
                        <FontAwesomeIcon icon={faTrash}/>
                    </button>
                </>
            ),
        },
    ];

    const [selectedGrade, setSelectedGrade] = useState<ClassGroup | null>(null);

    return (
        <section className="h-max flex w-[95%] flex-col justify-center">
            <section className="flex flex-row gap-5">
                {/* Sidebar */}
                <section className="bg-white flex flex-col items-center mt-5 p-5 rounded-xl shadow-md w-[250px]">
                    <div className="flex w-full flex-row justify-between font-semibold mb-2">
                        <h3>Grade</h3>
                        <h3>Class</h3>
                        <h3>Count</h3>
                    </div>
                    {classData.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedGrade(item)}
                            className="mt-2 flex flex-row justify-between w-full px-6 py-3 bg-[#F0F4F9] text-black hover:bg-blue-950 hover:text-white font-medium border-b rounded-md"
                        >
                            <h3>{item.grade}</h3>
                            <h3>{item.classRange[0]} - {item.classRange[item.classRange.length - 1]}</h3>
                            <h3>{item.classCount}</h3>
                        </button>
                    ))}
                </section>

                {/* Timetable Panel */}
                {selectedGrade && (
                    <section className="w-[900px] bg-white flex flex-col mt-5 p-5 rounded-xl shadow-md">
                        <section className="text-[#005285] flex flex-row justify-between w-full mb-4">
                            <h3>{selectedGrade.grade} Classes</h3>
                            <Button name={"Create Class"} color={"bg-green-600"}/>
                        </section>

                        <section className="flex flex-col w-full gap-3">
                            <Paper sx={{height: 400, width: '100%'}}>
                                <DataGrid
                                    rows={selectedGrade.classes}
                                    columns={columns}
                                    getRowId={(row) => row.className}
                                    pagination
                                    pageSizeOptions={[5, 10]}
                                    // checkboxSelection
                                    sx={{
                                        border: 0,
                                        '& .MuiDataGrid-row:hover': {
                                            backgroundColor: 'inherit' // Removes hover effect
                                        },
                                        '& .MuiDataGrid-cell:focus-within': {
                                            outline: 'none', // Removes focus outline on edit mode
                                        }
                                    }}
                                    disableRowSelectionOnClick
                                    disableColumnMenu
                                    /*paginationModel={paginationModel}
                                    rowCount={totalElements} // Total number of rows
                                    paginationMode="server" // Use server-side pagination
                                    onPaginationModelChange={(newPagination) => {
                                        setPaginationModel(newPagination);
                                        fetchAllCustomers(newPagination.page, newPagination.pageSize).then(r => {
                                        });
                                    }}*/
                                />
                            </Paper>
                        </section>
                    </section>
                )}
            </section>
        </section>
    );
};
