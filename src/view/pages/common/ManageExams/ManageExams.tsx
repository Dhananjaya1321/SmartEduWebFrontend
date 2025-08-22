import { Paper, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FooterSpace } from "../../../component/FooterSpace/FooterSpace";
import { Footer } from "../../../component/Footer/Footer";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { CreateExamModal } from "../../../models/Common/CreateExamModal/CreateExamModal";
import { EditExamModal } from "../../../models/Common/EditExamModal/EditExamModal";
import { ViewExamModal } from "../../../models/Common/ViewExamModal/ViewExamModal";
import examsAPIController from "../../../../controller/ExamsAPIController";

export const ManageExams = () => {
    const [rows, setRows] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const columns: GridColDef[] = [
        {
            field: 'examName', headerName: 'Exam name', width: 200, renderCell: (params) => (
                <Tooltip title={params.value}>
                    <div className="truncate">{params.value}</div>
                </Tooltip>
            ),
        },
        {
            field: 'grade', headerName: 'Grade', width: 200, renderCell: (params) => (
                <Tooltip title={params.value}>
                    <div className="truncate">{params.value}</div>
                </Tooltip>
            ),
        },
        {
            field: 'year', headerName: 'Year', width: 200, renderCell: (params) => (
                <Tooltip title={params.value}>
                    <div className="truncate">{params.value}</div>
                </Tooltip>
            ),
        },
        {
            field: 'level', headerName: 'Level', width: 150, renderCell: (params) => (
                <Tooltip title={params.value}>
                    <div className="truncate">{params.value}</div>
                </Tooltip>
            ),
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 160,
            renderCell: (params) => (
                <div className="flex flex-row gap-2">
                    <ViewExamModal />
                    <EditExamModal />
                    <button
                        onClick={() => handleDelete(params.row.id)}
                        className="rounded-xl w-[40px] h-[40px] text-red-600 hover:bg-red-100">
                        <FontAwesomeIcon icon={faTrash}/>
                    </button>
                </div>
            ),
        },
    ];

    useEffect(() => {
        fetchAll();
    }, []);

    const fetchAll = async () => {
        try {
            setLoading(true);
            const response = await examsAPIController.getAll();
            if (response) {
                setRows(response || []);
            }
        } catch (error) {
            console.error("Error fetching exams:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this exam?")) {
            try {
                // await examsAPIController.deleteExam(id);
                setRows((prev) => prev.filter((exam) => exam.id !== id));
            } catch (error) {
                console.error("Delete failed:", error);
            }
        }
    };

    return (
        <section className='h-max flex w-[95%] flex-col justify-center'>
            <section className='text-[#005285] flex flex-row justify-start mt-5'>
                <h3>Manage Exams</h3>
            </section>

            {/* search + create exam */}
            <section className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                <section className="flex flex-row justify-between items-center w-full mb-5">
                    <div className="flex flex-col">
                        <label className='text-black flex justify-start'>Search</label>
                        <input
                            className="text-input p-[7px]"
                            type="text"
                            placeholder="Search"
                            onChange={(e) => {
                                const query = e.target.value.toLowerCase();
                                fetchAll().then(() => {
                                    if (query) {
                                        setRows((prev) =>
                                            prev.filter((exam) =>
                                                exam.examName.toLowerCase().includes(query) ||
                                                exam.grade.toLowerCase().includes(query) ||
                                                exam.year.includes(query) ||
                                                exam.level.toLowerCase().includes(query)
                                            )
                                        );
                                    }
                                });
                            }}
                        />
                    </div>
                    <CreateExamModal />
                </section>

                {/* Data grid */}
                <Paper sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pagination
                        pageSizeOptions={[5, 10]}
                        loading={loading}
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
                        getRowId={(row) => row.id}
                    />
                </Paper>
            </section>

            <FooterSpace />
            <Footer />
        </section>
    );
};
