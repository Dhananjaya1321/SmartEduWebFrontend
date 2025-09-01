import React, {useEffect, useState} from "react";
import {FooterSpace} from "../../../component/FooterSpace/FooterSpace";
import {Paper, Tooltip} from "@mui/material";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import EditPrinciplesModal from "../../../models/ZMoE/EditPrinciplesModal/EditPrinciplesModal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {TransferModal} from "../../../models/Common/TransferModal/TransferModal";
import principalAPIController from "../../../../controller/PrincipalAPIController";

export const ZMoEManagePrinciples = () => {
    const columns: GridColDef[] = [
        {
            field: 'principleName', headerName: 'Principle Name', width: 200, renderCell: (params) => (
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
            field: 'email', headerName: 'Email', width: 200, renderCell: (params) => (
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
            field: 'school', headerName: 'School', width: 200, renderCell: (params) => (
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
            field: 'address', headerName: 'Address', width: 200, renderCell: (params) => (
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
       /* {
            field: 'transfer',
            headerName: 'Transfer',
            width: 100,
            renderCell: (params) => (
                <>
                    <TransferModal/>
                </>
            ),
        },*/
        {
            field: 'actions',
            headerName: 'Actions',
            width: 100,
            renderCell: (params) => (
                <>
                    <EditPrinciplesModal principal={params.row.originalPrincipal}/>
                    <button
                        className="rounded-xl w-[40px] h-[40px] text-red-600 hover:bg-red-100">
                        <FontAwesomeIcon icon={faTrash}/>
                    </button>
                </>
            ),
        },
    ];
    const [principals, setPrincipals] = useState([]);

    useEffect(() => {
        const fetchPrincipals = async () => {
            const data = await principalAPIController.getAll();
            if (data) {
                const formattedData = data.map((item: any, index: number) => ({
                    id: item.id,
                    principleName: item.fullName || 'N/A',
                    email: item.email || 'N/A',
                    contact: item.contact || 'N/A',
                    school: item.schoolName || 'N/A', // adjust this if not included in response
                    address: item.address || 'N/A',
                    originalPrincipal: item
                }));
                setPrincipals(formattedData);
            }
        };

        fetchPrincipals();
    }, []);

    return (
        <section className='h-max flex w-[95%] flex-col justify-center'>
            <section className='text-[#005285] flex flex-row justify-start mt-5'>
                <h3>Teachers and Principles &gt; Manage Principles</h3>
            </section>
            {/*url display section*/}
            <section
                className='flex flex-row flex-wrap items-center justify-center mt-5'>
                {/*searching and add new button*/}
                <Paper sx={{height: 400, width: '100%'}}>
                    <DataGrid
                        rows={principals}
                        columns={columns}
                        pagination
                        pageSizeOptions={[5, 10]}
                        disableRowSelectionOnClick
                        disableColumnMenu
                        getRowId={(row) => row.id}
                        sx={{
                            border: 0,
                            '& .MuiDataGrid-row:hover': {
                                backgroundColor: 'inherit' // Removes hover effect
                            },
                            '& .MuiDataGrid-cell:focus-within': {
                                outline: 'none', // Removes focus outline on edit mode
                            }
                        }}
                    />
                </Paper>
            </section>
            <FooterSpace/>
        </section>
    );
};
