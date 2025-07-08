import React, {useEffect, useState} from "react";
import {TextField} from "../../../component/TextField/TextField";
import {TextArea} from "../../../component/TextArea/TextArea";
import {Button} from "../../../component/Button/Button";
import {FooterSpace} from "../../../component/FooterSpace/FooterSpace";
import {Footer} from "../../../component/Footer/Footer";
import {Paper, Tooltip} from "@mui/material";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import EditUserModal from "../../../models/Common/EditUserModal/EditUserModal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import userAPIController from "../../../../controller/UserAPIController";

export const PMoEUser = () => {
    const columns: GridColDef[] = [
        {
            field: 'name',
            headerName: 'Name',
            width: 200,
            renderCell: (params) => (
                <Tooltip title={params.row.name || params.row.username || 'N/A'}>
                    <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'start' }}>
                        {params.row.name || params.row.username || 'N/A'}
                    </div>
                </Tooltip>
            ),
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
            renderCell: (params) => {
                const email = params.row.email || 'N/A';
                return (
                    <Tooltip title={email}>
                        <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'start' }}>
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
                        className="rounded-xl w-[40px] h-[40px] text-red-600 hover:bg-red-100"
                        onClick={() => handleDelete(params.row.id)}
                    >
                        <FontAwesomeIcon icon={faTrash}/>
                    </button>
                </>
            ),
        },
    ];

    const [users, setUsers] = useState<any[]>([]);
    const [formData, setFormData] = useState({
        name: '', contact: '', nic: '', username: '', email: '', address: ''
    });

    const fetchUsers = async () => {
        const response = await userAPIController.getAllUsers();
        if (response && Array.isArray(response)) setUsers(response);
    };

    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSave = async () => {
        const payload = {
            name: formData.name,
            email: formData.email,
            username: formData.username,
            nic: formData.nic,
            contact: formData.contact,
            address: formData.address,
            role: "PMOE_EMPLOYEE"
        };
        const success = await userAPIController.saveUser(payload);
        if (success) {
            fetchUsers();
            setFormData({name: '', contact: '', nic: '', username: '', email: '', address: ''});
            alert("User saved successfully");
        } else {
            alert("Failed to save user");
        }
    };

    const handleDelete = async (id: string) => {
        const confirmed = window.confirm("Are you sure you want to delete this user?");
        if (!confirmed) return;

        try {
            const response = await userAPIController.deleteUser(id);
            if (response.state === "OK") {
                setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
                alert("User deleted successfully!");
            } else if (response && response.state === "BAD_REQUEST") {
                alert(response.message || "Failed to delete user.");
            } else {
                alert("Failed to delete user.");
            }
        } catch (e) {
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <section className='h-max flex w-[95%] flex-col justify-center'>
            <section className='text-[#005285] flex flex-row justify-start mt-5'>
                <h3>Manage Users</h3>
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
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        name="contact"
                        placeholder={'ex- 070 000 0000'}
                        label={'Contact'}
                        important={"*"}
                        value={formData.contact}
                        onChange={handleChange}
                    />
                    <TextField
                        name="nic"
                        placeholder={'ex- 000000000000 or 000000000v'}
                        label={'NIC'}
                        important={"*"}
                        value={formData.nic}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                    <TextField
                        name="username"
                        placeholder={'ex- Isuru123'}
                        label={'Username'}
                        important={"*"}
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <TextField
                        name="email"
                        placeholder={'ex- example@gmail.com'}
                        label={'Email'}
                        important={"*"}
                        value={formData.email}
                        onChange={handleChange}
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
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-end w-full'>
                    <Button
                        name={'Save'}
                        color={'bg-[#2FEB00]'}
                        onClick={handleSave}
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
                        rows={users}
                        columns={columns}
                        pageSizeOptions={[5, 10]}
                        // pagination
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
