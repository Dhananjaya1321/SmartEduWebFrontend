import React from "react";
import {FooterSpace} from "../../../component/FooterSpace/FooterSpace";
import {Paper, Tooltip} from "@mui/material";
import {DataGrid, GridColDef} from "@mui/x-data-grid";

const admissionApplications = [
    {
        streamName: "Maths",
        applicants: [
            {
                id: 1,
                name: "Nimal",
                previousSchool: "Royal College",
                stream: "Maths",
                score: 240,
                contact: "075113254",
                stats: "Available"
            },
            {
                id: 2,
                name: "Kamal",
                previousSchool: "Ananda",
                stream: "Maths",
                score: 230,
                contact: "075113254",
                stats: "Available"
            }
        ]
    },
    {
        streamName: "Bio",
        applicants: [
            {
                id: 3,
                name: "Sunil",
                previousSchool: "Dharmapala",
                stream: "Bio",
                score: 250,
                contact: "075113254",
                stats: "Selected"
            }
        ]
    }
];

export const ALAdmissionApplications = () => {
    const columns: GridColDef[] = [
        {
            field: 'name', headerName: 'Name', width: 200, renderCell: (params) => (
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
            field: 'previousSchool', headerName: 'Previous School', width: 200, renderCell: (params) => (
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
            field: 'stream', headerName: 'Stream', width: 200, renderCell: (params) => (
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
            field: 'score', headerName: 'Score', width: 200, renderCell: (params) => (
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
            field: 'contact', headerName: 'Contact', width: 200, renderCell: (params) => (
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
            field: 'stats', headerName: 'Stats', width: 200, renderCell: (params) => (
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
            field: 'actions',
            headerName: 'Actions',
            width: 100,
            renderCell: (params) => (
                <>
                    <button
                        className="bg-yellow-600 w-full px-2 py-3 rounded-md text-white hover:bg-yellow-950 hover:text-white font-medium">
                        Accept
                    </button>
                </>
            ),
        },
    ];

    return (
        <section className='h-max flex w-[95%] flex-col justify-center'>
            <section className='text-[#005285] flex flex-row justify-start mt-5'>
                <h3>A/L Admission &gt; Manage Applications</h3>
            </section>
            {/*url display section*/}
            <section className="flex flex-col justify-between items-start mt-5 w-full mb-5">
                {admissionApplications.map((streamData, streamIdx) => (
                    <div key={streamIdx} className="w-full mb-6">
                        <div className='flex flex-row'>
                            <label className='text-black flex justify-start mb-2'>{streamData.streamName} Stream</label>
                        </div>
                        <Paper sx={{height: 400, width: '100%'}}>
                            <DataGrid
                                rows={streamData.applicants}
                                columns={columns}
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
                                getRowId={(row) => row.id}
                            />
                        </Paper>
                    </div>
                ))}
            </section>
            <FooterSpace/>
        </section>
    );
};
