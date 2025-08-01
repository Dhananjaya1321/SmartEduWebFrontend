import React, {useEffect, useState} from "react";
import {FooterSpace} from "../../../component/FooterSpace/FooterSpace";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {Paper, Tooltip} from "@mui/material";
import EditTeachersModal from "../../../models/ZMoE/EditTeachersModal/EditTeachersModal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {TransferModal} from "../../../models/Common/TransferModal/TransferModal";
import teacherAPIController from "../../../../controller/TeacherAPIController";

interface TeacherRow {
    id: string;
    teacherName: string;
    email: string;
    contact: string;
    school: string;
    address: string;
    originalTeacher: any;
}

export const ZMoEManageTeachers = () => {
    const [teachers, setTeachers] = useState<TeacherRow[]>([]);

    const columns: GridColDef[] = [
        {
            field: 'teacherName', headerName: 'Teacher Name', width: 200, renderCell: (params) => (
                <Tooltip title={params.value}>
                    <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'start' }}>
                        {params.value}
                    </div>
                </Tooltip>
            ),
        },
        {
            field: 'email', headerName: 'Email', width: 200, renderCell: (params) => (
                <Tooltip title={params.value}>
                    <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'start' }}>
                        {params.value}
                    </div>
                </Tooltip>
            ),
        },
        {
            field: 'contact', headerName: 'Contact', width: 200, renderCell: (params) => (
                <Tooltip title={params.value}>
                    <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'start' }}>
                        {params.value}
                    </div>
                </Tooltip>
            ),
        },
        {
            field: 'school', headerName: 'School', width: 200, renderCell: (params) => (
                <Tooltip title={params.value}>
                    <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'start' }}>
                        {params.value}
                    </div>
                </Tooltip>
            ),
        },
        {
            field: 'address', headerName: 'Address', width: 200, renderCell: (params) => (
                <Tooltip title={params.value}>
                    <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'start' }}>
                        {params.value}
                    </div>
                </Tooltip>
            ),
        },
      /*  {
            field: 'transfer',
            headerName: 'Transfer',
            width: 100,
            renderCell: (params) => (
                <TransferModal />
            ),
        },*/
        {
            field: 'actions',
            headerName: 'Actions',
            width: 100,
            renderCell: (params) => (
                <>
                    <EditTeachersModal teacher={params.row.originalTeacher}/>
                    <button
                        className="rounded-xl w-[40px] h-[40px] text-red-600 hover:bg-red-100"
                        onClick={() => handleDelete(params.row.id)}
                    >
                        <FontAwesomeIcon icon={faTrash}/>
                    </button>
                </>
            ),
        },
    ];

    useEffect(() => {
        const fetchTeachers = async () => {
            const data = await teacherAPIController.findAllForZonalOffice();
            if (data) {
                const formatted = data.map((item: any) => ({
                    id: item.id,
                    teacherName: item.fullName || 'N/A',
                    email: item.email || 'N/A',
                    contact: item.contact || 'N/A',
                    school: item.schoolName || 'N/A',
                    address: item.address || 'N/A',
                    originalTeacher: item,
                }));
                setTeachers(formatted);
            }
        };
        fetchTeachers();
    }, []);

    const handleDelete = async (id: string) => {
        const confirm = window.confirm("Are you sure you want to delete this teacher?");
        if (!confirm) return;

        const success = await teacherAPIController.deleteTeacher(id);
        if (success) {
            setTeachers(prev => prev.filter(teacher => teacher.id !== id));
        } else {
            alert("Failed to delete the teacher. Please try again.");
        }
    };

    return (
        <section className='h-max flex w-[95%] flex-col justify-center'>
            <section className='text-[#005285] flex flex-row justify-start mt-5'>
                <h3>Teachers and Principles &gt; Manage Teachers</h3>
            </section>
            <section className='flex flex-row flex-wrap items-center justify-center mt-5'>
                <Paper sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={teachers}
                        columns={columns}
                        pagination
                        pageSizeOptions={[5, 10]}
                        disableRowSelectionOnClick
                        disableColumnMenu
                        getRowId={(row) => row.id}
                        sx={{
                            border: 0,
                            '& .MuiDataGrid-row:hover': {
                                backgroundColor: 'inherit',
                            },
                            '& .MuiDataGrid-cell:focus-within': {
                                outline: 'none',
                            }
                        }}
                    />
                </Paper>
            </section>
            <FooterSpace />
        </section>
    );
};
