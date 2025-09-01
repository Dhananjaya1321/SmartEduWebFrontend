import React from "react";
import {FooterSpace} from "../../../component/FooterSpace/FooterSpace";
import {Paper, Tooltip} from "@mui/material";
import {DataGrid, GridColDef} from "@mui/x-data-grid";

// ✅ Sample backend-like structure
const selectedApplications = [
    {
        streamName: "Maths",
        streamTotal: 2,
        classes: [
            {
                className: "M1",
                assignLimit: 5,
                students: [
                    {
                        id: 1,
                        name: "Nimal",
                        previousSchool: "Royal College",
                        stream: "Maths",
                        score: 240,
                        contact: "075113254",
                        stats: "Selected"
                    },
                    {
                        id: 2,
                        name: "Kamal",
                        previousSchool: "Ananda",
                        stream: "Maths",
                        score: 230,
                        contact: "075113254",
                        stats: "Selected"
                    }
                ]
            },
            {
                className: "M2",
                assignLimit: 3,
                students: [
                    {
                        id: 3,
                        name: "Kasun",
                        previousSchool: "Nalanda",
                        stream: "Maths",
                        score: 225,
                        contact: "0771234567",
                        stats: "Selected"
                    }
                ]
            }
        ]
    },
    {
        streamName: "Bio",
        streamTotal: 1,
        classes: [
            {
                className: "B1",
                assignLimit: 4,
                students: [
                    {
                        id: 4,
                        name: "Sunil",
                        previousSchool: "Dharmapala",
                        stream: "Bio",
                        score: 250,
                        contact: "075113254",
                        stats: "Selected"
                    }
                ]
            }
        ]
    }
];

export const ALSelectedApplications = () => {
    const columns: GridColDef[] = [
        {
            field: 'name', headerName: 'Name', width: 180, renderCell: (params) => (
                <Tooltip title={params.value}>
                    <div className="truncate text-start w-full">{params.value}</div>
                </Tooltip>
            )
        },
        {
            field: 'previousSchool', headerName: 'Previous School', width: 200, renderCell: (params) =>
                <Tooltip title={params.value}>
                    <div className="truncate text-start w-full">{params.value}</div>
                </Tooltip>
        },
        {
            field: 'stream', headerName: 'Stream', width: 130, renderCell: (params) =>
                <Tooltip title={params.value}>
                    <div className="truncate text-start w-full">{params.value}</div>
                </Tooltip>
        },
        {
            field: 'score', headerName: 'Score', width: 100, renderCell: (params) =>
                <Tooltip title={params.value}>
                    <div className="truncate text-start w-full">{params.value}</div>
                </Tooltip>
        },
        {
            field: 'contact', headerName: 'Contact', width: 140, renderCell: (params) =>
                <Tooltip title={params.value}>
                    <div className="truncate text-start w-full">{params.value}</div>
                </Tooltip>
        },
        {
            field: 'stats', headerName: 'Status', width: 120, renderCell: (params) =>
                <Tooltip title={params.value}>
                    <div className="truncate text-start w-full">{params.value}</div>
                </Tooltip>
        }
    ];

    return (
        <section className='h-max flex w-[95%] flex-col justify-center'>
            <section className='text-[#005285] flex flex-row justify-start mt-5'>
                <h3>A/L Admission &gt; Manage Selected Applications</h3>
            </section>

            <section className="flex flex-col justify-between items-start mt-5 w-full mb-5">
                {selectedApplications.map((stream, sIdx) => (
                    <div key={sIdx} className="w-full mb-10">
                        <div className='text-xl font-semibold text-blue-700 mb-3'>
                            {stream.streamName} stream - Number of classes {stream.streamTotal}
                        </div>

                        {stream.classes.map((cls, cIdx) => {
                            const assigned = cls.students.length;
                            const limit = cls.assignLimit;
                            const empty = limit - assigned;

                            return (
                                <div key={cIdx} className="w-full mb-6 flex flex-col items-start">
                                    <div className='w-full flex flex-row text-md justify-between font-medium text-black mb-2'>
                                        <h3>Class: {cls.className}</h3>
                                        <h3>Number assigned: {assigned} </h3>
                                        <h3>Assignable totals: {limit}</h3>
                                        <h3>Remaining seat number: {empty}</h3>
                                    </div>

                                    <Paper sx={{height: 300, width: '100%'}}>
                                        <DataGrid
                                            rows={cls.students}
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
                            );
                        })}
                    </div>
                ))}
            </section>

            <FooterSpace/>
        </section>
    );
};
