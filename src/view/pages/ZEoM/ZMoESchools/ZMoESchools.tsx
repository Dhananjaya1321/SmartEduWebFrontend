import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {FooterSpace} from "../../../component/FooterSpace/FooterSpace";
import {Footer} from "../../../component/Footer/Footer";
import {Paper, Tooltip} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import ViewSchoolModal from "../../../models/ZMoE/ViewSchoolModal/ViewSchoolModal";
import EditSchoolModal from "../../../models/ZMoE/EditSchoolModal/EditSchoolModal";

export const ZMoESchools = () => {
    const columns: GridColDef[] = [
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
        {
            field: 'principle', headerName: 'Principle', width: 200, renderCell: (params) => (
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
            field: 'email',
            headerName: 'Email',
            width: 200,
            renderCell: (params) => {
                const email = params.row.user?.email || 'N/A'; // Use optional chaining to safely access email
                return (
                    <Tooltip title={email}>
                        <div
                            style={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                                textAlign: 'start',
                            }}
                        >
                            {email}
                        </div>
                    </Tooltip>
                );
            },
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 400,
            renderCell: (params) => (
                <>
                    <button
                        className="rounded-xl w-[40px] h-[40px] text-green-600 hover:bg-green-100">
                        <FontAwesomeIcon icon={faTrash}/>
                    </button>
                   <ViewSchoolModal/>
                </>
            ),
        },
    ];

    return (
        <section className='h-max flex w-[95%] flex-col justify-center'>
            <section className='text-[#005285] flex flex-row justify-start mt-5'>
                <h3>Manage Schools</h3>
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
                    <button
                        className={`h-[46px] bg-green-600 px-6 py-3 rounded-md text-white font-medium mx-3 mt-2`}
                    >
                        Add New
                    </button>
                    <EditSchoolModal/>
                </section>
                {/*searching and add new button*/}
                <Paper sx={{height: 400, width: '100%'}}>
                    <DataGrid
                        rows={[]}
                        columns={columns}
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
            </section>
            <FooterSpace/>
            <Footer/>
        </section>
    );
};
