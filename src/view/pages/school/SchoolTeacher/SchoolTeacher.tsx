import React, {useEffect, useState} from "react";
import {FooterSpace} from "../../../component/FooterSpace/FooterSpace";
import {Paper, Tooltip} from "@mui/material";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import EditTeachersModal from "../../../models/ZMoE/EditTeachersModal/EditTeachersModal";
import teacherAPIController from "../../../../controller/TeacherAPIController";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
interface TeacherRow {
    id: string;
    teacherName: string;
    email: string;
    contact: string;
    school: string;
    address: string;
    originalTeacher: any;
}
export const SchoolTeacher = () => {
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
        {
            field: 'actions',
            headerName: 'Actions',
            width: 100,
            renderCell: (params) => (
                <>
                    <EditTeachersModal teacher={params.row.originalTeacher}/>
                </>
            ),
        },
    ];
    const [teachers, setTeachers] = useState<TeacherRow[]>([]);

    useEffect(() => {
        const fetchTeachers = async () => {
            const data = await teacherAPIController.findAllForSchool();
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

    return (
        <section className='h-max flex w-[95%] flex-col justify-center'>
            <section className='text-[#005285] flex flex-row justify-start mt-5'>
                <h3>Teachers and Uses &gt; Manage Teachers</h3>
            </section>
            {/*url display section*/}
            <section
                className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                <section className="flex flex-row justify-between items-center w-full mb-5">
                    <div className="flex flex-col">
                        <div className='flex flex-row'>
                            <label className='text-black flex justify-start'>Search</label>
                        </div>
                        <input
                            className={`text-input p-[7px]`}
                            type={"text"}
                            placeholder={"Search"}
                            name={"Search"}
                        ></input>
                    </div>
                </section>
                {/*searching and add new button*/}
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
            <FooterSpace/>
        </section>
    );
};
