import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {FooterSpace} from "../../../component/FooterSpace/FooterSpace";
import {Footer} from "../../../component/Footer/Footer";
import {Paper, Tooltip} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faPen, faTrash} from "@fortawesome/free-solid-svg-icons";
import ZonalEducationOfficeModal from "../../../models/PMoE/ZonalEducationOfficeModal/ZonalEducationOfficeModal";
import ChangeAdminZonalEducationOfficeModal
    from "../../../models/PMoE/ChangeAdminZonalEducationOfficeModal/ChangeAdminZonalEducationOfficeModal";
import ViewZonalEducationOfficeModal
    from "../../../models/PMoE/ViewZonalEducationOfficeModal/ViewZonalEducationOfficeModal";
import EditZonalEducationOfficeModal
    from "../../../models/PMoE/EditZonalEducationOfficeModal/EditZonalEducationOfficeModal";
import {useEffect, useState} from "react";
import zMOEAPIController from "../../../../controller/ZMOEAPIController";

export const PMoEZonalEducationOffice = () => {
    const columns: GridColDef[] = [
        {
            field: 'province',
            headerName: 'Province',
            width: 200,
            renderCell: (params) => (
                <Tooltip title={params.value}>
                    <div style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        textAlign: 'start',
                    }}>
                        {params.value}
                    </div>
                </Tooltip>
            ),
        },
        {
            field: 'district',
            headerName: 'District',
            width: 200,
            renderCell: (params) => (
                <Tooltip title={params.value}>
                    <div style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        textAlign: 'start',
                    }}>
                        {params.value}
                    </div>
                </Tooltip>
            ),
        },
        {
            field: 'zonal',
            headerName: 'Zonal',
            width: 200,
            renderCell: (params) => (
                <Tooltip title={params.value}>
                    <div style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        textAlign: 'start',
                    }}>
                        {params.value}
                    </div>
                </Tooltip>
            ),
        },
        {
            field: 'name',
            headerName: 'Admin',
            width: 200,
            renderCell: (params) => (
                <Tooltip title={params.value}>
                    <div style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        textAlign: 'start',
                    }}>
                        {params.value}
                    </div>
                </Tooltip>
            ),
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
            renderCell: (params) => (
                <Tooltip title={params.value}>
                    <div style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        textAlign: 'start',
                    }}>
                        {params.value}
                    </div>
                </Tooltip>
            ),
        },
        {
            field: 'changeAdmin',
            headerName: 'Change admin',
            width: 400,
            renderCell: () => <ChangeAdminZonalEducationOfficeModal />
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 400,
            renderCell: (params) => (
                <>
                    <EditZonalEducationOfficeModal office={params.row}/>
                    <ViewZonalEducationOfficeModal office={params.row}/>
                </>
            ),
        }
    ];
    // Inside the component
    const [zmoeAdmins, setZmoeAdmins] = useState([]);

    useEffect(() => {
        const fetchPMOEs = async () => {
            const data = await zMOEAPIController.getAllZMOEAdmins();
            setZmoeAdmins(data.content);
        };
        fetchPMOEs();
    }, []);

    return (
        <section className='h-max flex w-[95%] flex-col justify-center'>
            <section className='text-[#005285] flex flex-row justify-start mt-5'>
                <h3>Manage Zonal Education Offices</h3>
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
                    <ZonalEducationOfficeModal/>

                </section>
                {/*searching and add new button*/}
                <Paper sx={{height: 400, width: '100%'}}>
                    <DataGrid
                        rows={zmoeAdmins}
                        columns={columns}
                        pagination
                        pageSizeOptions={[5, 10]}
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
            </section>
            <FooterSpace/>
            <Footer/>
        </section>
    );
};
