import React, { useState, useEffect } from "react";
import TimeTableModal from "../../../models/School/TimeTableModal/TimeTableModal";
import { Paper, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditUserModal from "../../../models/Common/EditUserModal/EditUserModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../../../component/Button/Button";
import CreateClassModal from "../../../models/School/CreateClassModal/CreateClassModal";
import ViewClassModal from "../../../models/School/ViewClassModal/ViewClassModal";
import EditClassModal from "../../../models/School/EditClassModal/EditClassModal";
import GradeCreationModal from "../../../models/School/GradeCreationModal/GradeCreationModal";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import gradeAPIController from "../../../../controller/GradeAPIController";


// Interfaces based on API response
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
    id: string;
    gradeName: number;
    classRooms: ClassData[];
    streamsOfALs: string[] | null;
}

export const GradesAndClasses = () => {
    const columns: GridColDef[] = [
        {
            field: 'classTeacher',
            headerName: 'Class Teacher',
            width: 200,
            renderCell: (params) => (
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
            width: 150,
            renderCell: (params) => (
                <>
                    <ViewClassModal classData={params.row} />
                    <EditClassModal />
                    <button
                        className="rounded-xl w-[40px] h-[40px] text-red-600 hover:bg-red-100"
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </>
            ),
        },
    ];

    const [grades, setGrades] = useState<ClassGroup[]>([]);
    const [selectedGrade, setSelectedGrade] = useState<ClassGroup | null>(null);
    const [loading, setLoading] = useState(true);

    const refreshGrades = async () => {
        try {
            const response = await gradeAPIController.getAllGrades();
            if (response) {
                const transformedGrades: ClassGroup[] = response.map((grade: any) => ({
                    id: grade.id,
                    gradeName: grade.gradeName,
                    classRooms: grade.classRooms.map((classRoom: any) => ({
                        className: classRoom.className || `${grade.gradeName}-${classRoom.section || 'N/A'}`,
                        classTeacher: classRoom.classTeacherName || 'Unassigned',
                        subject: classRoom.classTeacherSubject || 'N/A',
                        students: classRoom.students || []
                    })),
                    streamsOfALs: grade.streamsOfALs
                }));
                setGrades(transformedGrades);
                // Update selected grade if it exists
                if (selectedGrade) {
                    const updatedGrade = transformedGrades.find(g => g.id === selectedGrade.id);
                    setSelectedGrade(updatedGrade || transformedGrades.find(g => g.classRooms.length > 0) || transformedGrades[0] || null);
                } else {
                    setSelectedGrade(transformedGrades.find(g => g.classRooms.length > 0) || transformedGrades[0] || null);
                }
            }
        } catch (error) {
            console.error('Error fetching grades:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        refreshGrades();
    }, []);

    const schoolHasNoClasses = grades.length === 0;

    return (
        <>
            {schoolHasNoClasses && <GradeCreationModal openByDefault />}
            <section className="h-max flex w-[95%] flex-col justify-center">
                <section className="flex flex-row gap-5">
                    {/* Sidebar */}
                    <section className="bg-white flex flex-col items-center mt-5 p-5 rounded-xl shadow-md w-[250px]">
                        <div className="flex w-full flex-row justify-between font-semibold mb-2">
                            <h3>Grade</h3>
                            <h3>Class</h3>
                            <h3>Count</h3>
                        </div>
                        {grades.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setSelectedGrade(item)}
                                className="mt-2 flex flex-row justify-between w-full px-6 py-3 bg-[#F0F4F9] text-black hover:bg-blue-950 hover:text-white font-medium border-b rounded-md"
                            >
                                <h3>Grade {item.gradeName}</h3>
                                <h3>{item.classRooms.length > 0 ? item.classRooms[0].className.split('-')[1] : '-'}</h3>
                                <h3>{item.classRooms.length}</h3>
                            </button>
                        ))}
                    </section>

                    {/* Timetable Panel */}
                    {selectedGrade && (
                        <section className="w-[900px] bg-white flex flex-col mt-5 p-5 rounded-xl shadow-md">
                            <section className="text-[#005285] flex flex-row justify-between w-full mb-4">
                                <h3>Grade {selectedGrade.gradeName} Classes</h3>
                                <CreateClassModal grade={selectedGrade} onClassCreated={refreshGrades} />
                            </section>

                            <section className="flex flex-col w-full gap-3">
                                <Paper sx={{ height: 400, width: '100%' }}>
                                    <DataGrid
                                        rows={selectedGrade.classRooms}
                                        columns={columns}
                                        getRowId={(row) => row.className}
                                        pagination
                                        pageSizeOptions={[5, 10]}
                                        sx={{
                                            border: 0,
                                            '& .MuiDataGrid-row:hover': {
                                                backgroundColor: 'inherit'
                                            },
                                            '& .MuiDataGrid-cell:focus-within': {
                                                outline: 'none',
                                            }
                                        }}
                                        disableRowSelectionOnClick
                                        disableColumnMenu
                                        loading={loading}
                                    />
                                </Paper>
                            </section>
                        </section>
                    )}
                </section>
            </section>
        </>
    );
};

