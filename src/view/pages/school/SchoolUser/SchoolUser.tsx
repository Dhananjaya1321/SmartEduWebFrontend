import React from "react";
import {TextField} from "../../../component/TextField/TextField";
import {TextArea} from "../../../component/TextArea/TextArea";
import {Button} from "../../../component/Button/Button";
import {FooterSpace} from "../../../component/FooterSpace/FooterSpace";
import {Paper, Tooltip} from "@mui/material";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import EditTeachersModal from "../../../models/ZMoE/EditTeachersModal/EditTeachersModal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import EditUserModal from "../../../models/Common/EditUserModal/EditUserModal";

export const SchoolUser = () => {
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
            field: 'nic', headerName: 'NIC', width: 200, renderCell: (params) => (
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
            field: 'actions',
            headerName: 'Actions',
            width: 100,
            renderCell: (params) => (
                <>
                    <EditUserModal/>
                    <button
                        className="rounded-xl w-[40px] h-[40px] text-green-600 hover:bg-green-100">
                        <FontAwesomeIcon icon={faTrash}/>
                    </button>
                </>
            ),
        },
    ];

    return (
        <section className='h-max flex w-[95%] flex-col justify-center'>
            <section className='text-[#005285] flex flex-row justify-start mt-5'>
                <h3>Teachers and Uses &gt; Manage Users</h3>
            </section>
            {/*url display section*/}
            <section
                className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                    <TextField
                        name="name"
                        placeholder={'ex- Nimal'}
                        label={'Name'}
                        important={"*"}
                    />
                    <TextField
                        name="contact"
                        placeholder={'ex- 070 000 0000'}
                        label={'Contact'}
                        important={"*"}
                    />
                    <TextField
                        name="nic"
                        placeholder={'ex- 000000000000 or 000000000v'}
                        label={'NIC'}
                        important={"*"}
                    />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                    <TextField
                        name="username"
                        placeholder={'ex- Isuru123'}
                        label={'Username'}
                        important={"*"}

                    />
                    <TextField
                        name="email"
                        placeholder={'ex- example@gmail.com'}
                        label={'Email'}
                        important={"*"}

                    />
                    <div className='grow w-[220px] mx-3 my-3 gap-1 flex flex-col justify-start'>
                        <div className='flex flex-row'>
                            <label className='text-black flex justify-start'>Password</label>
                        </div>
                        <input
                            className={`text-input p-[7px]`}
                            type={"text"}
                            placeholder={"*******"}
                            disabled={true}
                            name={"Password"}
                        ></input>
                        <div className={`h-[5px]`}>
                            <small
                                className={`text-start text-red-600 block`}>
                                {"The password is automatically generated and sent to the user's provided email address."}
                            </small>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                    <TextArea
                        name="address"
                        placeholder={'ex- ABC Road, Galle'}
                        label={'Address'}

                    />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-end w-full'>
                    <Button
                        name={'Save'}
                        color={'bg-[#2FEB00]'}
                    />
                </div>
            </section>
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
        </section>
    );
};
