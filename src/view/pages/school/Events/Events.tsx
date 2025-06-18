import React from "react";
import {TextField} from "../../../component/TextField/TextField";
import {TextArea} from "../../../component/TextArea/TextArea";
import {Button} from "../../../component/Button/Button";
import {FooterSpace} from "../../../component/FooterSpace/FooterSpace";
import {Paper, Tooltip} from "@mui/material";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {DropdownField} from "../../../component/DropdownField/DropdownField";
import {eventGradeOptions} from "../../../context/Arrays";
import EditEventModal from "../../../models/School/EditEventModal/EditEventModal";

export const Events = () => {
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
            field: 'grade', headerName: 'Grade', width: 200, renderCell: (params) => (
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
            field: 'startDate', headerName: 'Start date', width: 200, renderCell: (params) => (
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
            field: 'endDate', headerName: 'End date', width: 200, renderCell: (params) => (
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
            field: 'description', headerName: 'Description', width: 200, renderCell: (params) => (
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
                    <EditEventModal/>
                    <button
                        className="rounded-xl w-[40px] h-[40px] text-red-600 hover:bg-red-100">
                        <FontAwesomeIcon icon={faTrash}/>
                    </button>
                </>
            ),
        },
    ];

    return (
        <section className='h-max flex w-[95%] flex-col justify-center'>
            <section className='text-[#005285] flex flex-row justify-start mt-5'>
                <h3>Manage Events</h3><EditEventModal/>
                <button
                    className="rounded-xl w-[40px] h-[40px] text-red-600 hover:bg-red-100">
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
            </section>
            {/*url display section*/}
            <section
                className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                    <TextField
                        name="eventName"
                        placeholder={'ex- Sportmeet'}
                        label={'Event name'}
                        important={"*"}
                    />
                    <DropdownField
                        label="Select Grade"
                        important="*"
                        mt={"12px"}
                        mb={"12px"}
                        ml={"12px"}
                        mr={"12px"}
                        options={eventGradeOptions}

                    />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                    <TextField
                        name="startDate"
                        label={'Start date'}
                        important={"*"}
                        type={"date"}
                    />
                    <TextField
                        name="endDate"
                        label={'End date'}
                        important={"*"}
                        type={"date"}
                    />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                    <TextArea
                        name="description"
                        placeholder={'ex- Event details'}
                        label={'Description'}
                    />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-end w-full'>
                    <Button
                        name={'Create'}
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
