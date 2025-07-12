import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Paper, Tooltip } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FooterSpace } from "../../../component/FooterSpace/FooterSpace";
import { Footer } from "../../../component/Footer/Footer";
import EditSchoolModal from "../../../models/ZMoE/EditSchoolModal/EditSchoolModal";
import ViewSchoolModal from "../../../models/ZMoE/ViewSchoolModal/ViewSchoolModal";
import AcceptSchoolModal from "../../../models/ZMoE/AcceptSchoolModal/AcceptSchoolModal";
import schoolAPIController from "../../../../controller/SchoolAPIController";

export const ZMoESchools = () => {
    const [pendingSchools, setPendingSchools] = useState([]);
    const [approvedSchools, setApprovedSchools] = useState([]);

    useEffect(() => {
        const fetchSchools = async () => {
            const pending = await schoolAPIController.findAllPendingSchools();
            const approved = await schoolAPIController.findAllApprovedSchools();
            setPendingSchools(pending);
            setApprovedSchools(approved);
        };
        fetchSchools();
    }, []);

    const mapSchoolsToRows = (schools: any[]) => {
        return schools.map((school: any) => ({
            id: school.id,
            logoUrl: school.logoUrl,
            school: school.schoolName,
            address: `${school.district}, ${school.zonal}`,
            principle: school.principal.fullName || "N/A",
            originalSchool: school
        }));
    };


    const columns: GridColDef[] = [
        {
            field: 'logo',
            headerName: 'Logo',
            width: 100,
            renderCell: (params) => (
                <img
                    src={params.row.logoUrl}
                    alt="logo"
                    style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '6px' }}
                />
            ),
        },
        {
            field: 'school', headerName: 'School', width: 200, renderCell: (params) => (
                <Tooltip title={params.value}><div className="truncate">{params.value}</div></Tooltip>
            ),
        },
        {
            field: 'address', headerName: 'Address', width: 200, renderCell: (params) => (
                <Tooltip title={params.value}><div className="truncate">{params.value}</div></Tooltip>
            ),
        },
        {
            field: 'principle', headerName: 'Principal', width: 200, renderCell: (params) => (
                <Tooltip title={params.value}><div className="truncate">{params.value}</div></Tooltip>
            ),
        },
        {
            field: 'actions', headerName: 'Actions', width: 400, renderCell: (params) => (
                <>
                    <EditSchoolModal school={params.row.originalSchool}/>
                    <ViewSchoolModal school={params.row.originalSchool}/>
                    <button className="rounded-xl w-[40px] h-[40px] text-red-600 hover:bg-red-100">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </>
            ),
        },
    ];

    const pr_columns: GridColDef[] = [
        ...columns.slice(0, -1),
        {
            field: 'actions',
            headerName: 'Actions',
            width: 400,
            renderCell: (params) => (
                <>
                    <AcceptSchoolModal school={params.row.originalSchool} />
                </>
            )
        }
    ];

    return (
        <section className='h-max flex w-[95%] flex-col justify-center'>
            <section className='text-[#005285] flex flex-row justify-start mt-5'>
                <h3>Manage Schools</h3>
            </section>

            <section className='bg-white flex flex-col items-center mt-5 p-5 rounded-xl shadow-md'>
                <section className="flex flex-row justify-between items-center w-full mb-5">
                    <div className="flex flex-col">
                        <label className='text-black'>Search</label>
                        <input className="text-input p-[7px]" type="text" placeholder="Search" />
                    </div>
                </section>

                <Paper sx={{ height: 400, width: '100%', mb: 3 }}>
                    <h4 className="text-[#005285] mb-2">Pending Registrations</h4>
                    <DataGrid
                        rows={mapSchoolsToRows(pendingSchools)}
                        columns={pr_columns}
                        pagination
                        pageSizeOptions={[5, 10]}
                        disableRowSelectionOnClick
                        disableColumnMenu
                        getRowId={(row) => row.id}
                        sx={{
                            border: 0,
                            '& .MuiDataGrid-row:hover': { backgroundColor: 'inherit' },
                            '& .MuiDataGrid-cell:focus-within': { outline: 'none' },
                        }}
                    />
                </Paper>

                <Paper sx={{ height: 400, width: '100%' }}>
                    <h4 className="text-[#005285] mb-2">Approved Schools</h4>
                    <DataGrid
                        rows={mapSchoolsToRows(approvedSchools)}
                        columns={columns}
                        pagination
                        pageSizeOptions={[5, 10]}
                        disableRowSelectionOnClick
                        disableColumnMenu
                        getRowId={(row) => row.id}
                        sx={{
                            border: 0,
                            '& .MuiDataGrid-row:hover': { backgroundColor: 'inherit' },
                            '& .MuiDataGrid-cell:focus-within': { outline: 'none' },
                        }}
                    />
                </Paper>
            </section>

            <FooterSpace />
            <Footer />
        </section>
    );
};
