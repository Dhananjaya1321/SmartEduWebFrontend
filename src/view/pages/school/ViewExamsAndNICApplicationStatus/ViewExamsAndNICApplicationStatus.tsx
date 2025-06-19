import React, {useState, useEffect} from "react";
import {Button} from "../../../component/Button/Button";
import {FooterSpace} from "../../../component/FooterSpace/FooterSpace";
import {DropdownField} from "../../../component/DropdownField/DropdownField";
import {examsAndNICApplicationOptions} from "../../../context/Arrays";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {Paper} from "@mui/material";
import EditEventModal from "../../../models/School/EditEventModal/EditEventModal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faTrash} from "@fortawesome/free-solid-svg-icons";

interface StudentApplication {
    id: number;
    name: string;
    index: string;
    applicationType: string;
    birthCertificate: boolean;
    nicFront: boolean;
    nicBack: boolean;
    status: string;
}

export const ViewExamsAndNICApplicationStatus = () => {
    const [selectedApplication, setSelectedApplication] = useState('');
    const [applicationData, setApplicationData] = useState<StudentApplication[]>([]);

    // Dummy data – replace this with API data fetching
    useEffect(() => {
        const dummyData: StudentApplication[] = [
            {
                id: 1,
                name: "Kamal Perera",
                index: "123456",
                applicationType: "ol",
                birthCertificate: true,
                nicFront: false,
                nicBack: false,
                status: "Pending"
            },
            {
                id: 2,
                name: "Nadeesha Silva",
                index: "789012",
                applicationType: "al",
                birthCertificate: true,
                nicFront: true,
                nicBack: true,
                status: "Approved"
            },
            {
                id: 3,
                name: "Sajith Kumar",
                index: "345678",
                applicationType: "g5",
                birthCertificate: true,
                nicFront: false,
                nicBack: false,
                status: "Submitted"
            },
            {
                id: 4,
                name: "Dilani Fernando",
                index: "654321",
                applicationType: "nic",
                birthCertificate: true,
                nicFront: true,
                nicBack: true,
                status: "Rejected"
            }
        ];
        setApplicationData(dummyData);
    }, []);

    const columns_ol: GridColDef[] = [
            {field: "name", headerName: "Student Name", width: 200},
            {field: "index", headerName: "Index Number", width: 150},
            {
                field: "applicationType",
                headerName: "G.C.E. (O/L) Examination",
                width: 250,
                valueFormatter: (params) => params.value.toUpperCase()
            },
            {
                field: "birthCertificate",
                headerName: "Birth Cert",
                width: 120,
                renderCell: (params) => (params.value ? "✅" : "❌")
            },
            {
                field: "nicFront",
                headerName: "NIC Front",
                width: 120,
                renderCell: (params) => (params.value ? "✅" : "❌")
            },
            {
                field: "nicBack",
                headerName: "NIC Back",
                width: 120,
                renderCell: (params) => (params.value ? "✅" : "❌")
            },
            {field: "status", headerName: "Status", width: 130},
            {
                field: "actions",
                headerName: "Actions",
                width: 150,
                renderCell: () => (
                    <>
                        <button
                            className="rounded-xl w-[40px] h-[40px] text-blue-600 hover:bg-blue-100">
                            <FontAwesomeIcon icon={faEye}/>
                        </button>
                    </>
                )
            }
        ]
    ;
    const columns_al: GridColDef[] = [
        {field: "name", headerName: "Student Name", width: 200},
        {field: "index", headerName: "Index Number", width: 150},
        {
            field: "applicationType",
            headerName: "G.C.E. (A/L) Examination",
            width: 250,
            valueFormatter: (params) => params.value.toUpperCase()
        },
        {
            field: "birthCertificate",
            headerName: "Birth Cert",
            width: 120,
            renderCell: (params) => (params.value ? "✅" : "❌")
        },
        {
            field: "nicFront",
            headerName: "NIC Front",
            width: 120,
            renderCell: (params) => (params.value ? "✅" : "❌")
        },
        {
            field: "nicBack",
            headerName: "NIC Back",
            width: 120,
            renderCell: (params) => (params.value ? "✅" : "❌")
        },
        {field: "status", headerName: "Status", width: 130},
        {
            field: "actions",
            headerName: "Actions",
            width: 150,
            renderCell: () => (
                <Button name="View" color="bg-blue-500"/>
            )
        }
    ];
    const columns_g5: GridColDef[] = [
        {field: "name", headerName: "Student Name", width: 200},
        {field: "index", headerName: "Index Number", width: 150},
        {
            field: "applicationType",
            headerName: "Grade 5 Scholarship Examination",
            width: 250,
            valueFormatter: (params) => params.value.toUpperCase()
        },
        {
            field: "birthCertificate",
            headerName: "Birth Cert",
            width: 120,
            renderCell: (params) => (params.value ? "✅" : "❌")
        },
        {field: "status", headerName: "Status", width: 130},
        {
            field: "actions",
            headerName: "Actions",
            width: 150,
            renderCell: () => (
                <Button name="View" color="bg-blue-500"/>
            )
        }
    ];
    const columns_nic: GridColDef[] = [
        {field: "name", headerName: "Student Name", width: 200},
        {field: "index", headerName: "Index Number", width: 150},
        {
            field: "applicationType",
            headerName: "National Identity Card (NIC)",
            width: 250,
            valueFormatter: (params) => params.value.toUpperCase()
        },
        {
            field: "birthCertificate",
            headerName: "Birth Cert",
            width: 120,
            renderCell: (params) => (params.value ? "✅" : "❌")
        },
        {field: "status", headerName: "Status", width: 130},
        {
            field: "actions",
            headerName: "Actions",
            width: 150,
            renderCell: () => (
                <Button name="View" color="bg-blue-500"/>
            )
        }
    ];

    return (
        <section className="h-max flex w-[95%] flex-col justify-center">
            <section className="text-[#005285] flex flex-row justify-start mt-5">
                <h3>Manage Exam and NIC Application &gt; View</h3>
            </section>

            {/* Dropdown Section */}
            <section
                className="bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md">
                <div className="flex flex-row flex-wrap items-center justify-center w-full">
                    <DropdownField
                        label="Select Application Type"
                        important="*"
                        mt={"12px"}
                        mb={"12px"}
                        ml={"12px"}
                        mr={"12px"}
                        options={examsAndNICApplicationOptions}
                        value={selectedApplication}
                        onChange={(e) => setSelectedApplication(e.target.value)}
                    />
                </div>
            </section>
            {selectedApplication === 'ol' && (
                <div className='flex flex-col items-start w-full'>
                    <h4 className="text-lg font-semibold text-[#005285] mb-4 mt-6">Application Status</h4>
                    <div style={{height: 400, width: '100%'}}>
                        <Paper sx={{height: 400, width: '100%'}}>
                            <DataGrid
                                rows={applicationData.filter(app => app.applicationType === selectedApplication)}
                                columns={columns_ol}
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
                                getRowId={(row) => row.id}
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
                    </div>
                </div>
            )}

            {selectedApplication === 'al' && (
                <div className='flex flex-col items-start w-full'>
                    <h4 className="text-lg font-semibold text-[#005285] mb-4 mt-6">Application Status</h4>
                    <div style={{height: 400, width: '100%'}}>
                        <Paper sx={{height: 400, width: '100%'}}>
                            <DataGrid
                                rows={applicationData.filter(app => app.applicationType === selectedApplication)}
                                columns={columns_al}
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
                                getRowId={(row) => row.id}
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
                    </div>
                </div>
            )}

            {selectedApplication === 'g5' && (
                <div className='flex flex-col items-start w-full'>
                    <h4 className="text-lg font-semibold text-[#005285] mb-4 mt-6">Application Status</h4>
                    <div style={{height: 400, width: '100%'}}>
                        <Paper sx={{height: 400, width: '100%'}}>
                            <DataGrid
                                rows={applicationData.filter(app => app.applicationType === selectedApplication)}
                                columns={columns_g5}
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
                                getRowId={(row) => row.id}
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
                    </div>
                </div>
            )}

            {selectedApplication === 'nic' && (
                <div className='flex flex-col items-start w-full'>
                    <h4 className="text-lg font-semibold text-[#005285] mb-4 mt-6">Application Status</h4>
                    <div style={{height: 400, width: '100%'}}>
                        <Paper sx={{height: 400, width: '100%'}}>
                            <DataGrid
                                rows={applicationData.filter(app => app.applicationType === selectedApplication)}
                                columns={columns_nic}
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
                                getRowId={(row) => row.id}
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
                    </div>
                </div>
            )}
            <FooterSpace/>
        </section>
    );
};
