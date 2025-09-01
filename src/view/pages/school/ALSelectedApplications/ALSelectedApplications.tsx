import React, {useEffect, useState} from "react";
import {FooterSpace} from "../../../component/FooterSpace/FooterSpace";
import {Paper, Tooltip} from "@mui/material";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import schoolAPIController from "../../../../controller/SchoolAPIController";

export const ALSelectedApplications = () => {
    const [groupedApplications, setGroupedApplications] = useState<{ [key: string]: any[] }>({});

    const columns: GridColDef[] = [
        {field: 'studentName', headerName: 'Student Name', width: 180},
        {field: 'status', headerName: 'Status', width: 120},

        {field: 'olResultsScore', headerName: 'O/L Results Score', width: 160},
        {field: 'residenceScore', headerName: 'Residence Score', width: 140},
        {field: 'nationalLevelAchievementsScore', headerName: 'National Level Score', width: 170},
        {field: 'provincialLevelAchievementsScore', headerName: 'Provincial Level Score', width: 180},
        {field: 'zonalLevelAchievementsScore', headerName: 'Zonal Level Score', width: 160},

        {field: 'totalScore', headerName: 'Total Score', width: 140},

        {
            field: 'olResults',
            headerName: 'O/L Results',
            width: 250,
            renderCell: (params) => (
                <Tooltip title={params.value?.join(", ")}>
                    <div style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        textAlign: 'start'
                    }}>
                        {params.value?.join(", ")}
                    </div>
                </Tooltip>
            )
        },
    ];


    const fetchApplications = async () => {
        try {
            const response = await schoolAPIController.getAllALAdmissionsAcceptedByStudentToSchools();
            if (response) {
                // group by subjectStream
                const grouped: { [key: string]: any[] } = {};

                response.forEach((app: any) => {
                    if (!grouped[app.subjectStream]) {
                        grouped[app.subjectStream] = [];
                    }
                    grouped[app.subjectStream].push(app);
                });

                // sort each stream's applicants by totalScore (descending)
                Object.keys(grouped).forEach((stream) => {
                    grouped[stream].sort((a, b) => b.totalScore - a.totalScore);
                });

                setGroupedApplications(grouped);
            }
        } catch (error) {
            console.error("Error fetching applications", error);
        }
    };


    useEffect(() => {
        fetchApplications();
    }, []);

    return (
        <section className='h-max flex w-[95%] flex-col justify-center'>
            <section className='text-[#005285] flex flex-row justify-start mt-5'>
                <h3>A/L Admission &gt; Manage Applications</h3>
            </section>

            <section className="flex flex-col justify-between items-start mt-5 w-full mb-5">
                {Object.entries(groupedApplications).map(([streamName, applicants]) => (
                    <div key={streamName} className="w-full mb-6">
                        <div className='flex flex-row'>
                            <label className='text-black flex justify-start mb-2'>{streamName} Stream</label>
                        </div>
                        <Paper sx={{height: 500, width: '100%'}}>
                            <DataGrid
                                rows={applicants}
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
