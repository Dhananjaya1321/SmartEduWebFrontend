import React, { useEffect, useState } from "react";
import { TextField } from "../../../component/TextField/TextField";
import { TextArea } from "../../../component/TextArea/TextArea";
import { Button } from "../../../component/Button/Button";
import { FooterSpace } from "../../../component/FooterSpace/FooterSpace";
import { Paper, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { DropdownField } from "../../../component/DropdownField/DropdownField";
import { eventGradeOptions } from "../../../context/Arrays";
import EditEventModal from "../../../models/School/EditEventModal/EditEventModal";
import eventAPIController from "../../../../controller/EventAPIController";
import teacherAPIController from "../../../../controller/TeacherAPIController";

export const Events = () => {
    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'grades', headerName: 'Grade', width: 200 },
        { field: 'startDate', headerName: 'Start date', width: 200 },
        { field: 'endDate', headerName: 'End date', width: 200 },
        { field: 'description', headerName: 'Description', width: 200 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 100,
            renderCell: (params) => (
                <>
                    <EditEventModal event={params.row.originalEvent} />

                    <button
                        className="rounded-xl w-[40px] h-[40px] text-red-600 hover:bg-red-100"
                        onClick={() => handleDelete(params.row.id)}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </>
            ),
        },
    ];

    const [events, setEvents] = useState([]);
    const [form, setForm] = useState({
        name: "",
        grades: "",
        startDate: "",
        endDate: "",
        description: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, grades: e.target.value }));
    };

    const fetchEvents = async () => {
        const data = await eventAPIController.getAllEvents();
        if (data) {
            const formatted = data.map((event: any) => ({
                id: event.id,
                name: event.name,
                grades: event.grades,
                startDate: event.startDate,
                endDate: event.endDate,
                description: event.description,
                originalEvent: event
            }));
            setEvents(formatted);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleCreate = async () => {
        if (!form.name || !form.grades || !form.startDate || !form.endDate) {
            alert("Please fill all required fields.");
            return;
        }
        const saved = await eventAPIController.saveEvent(form);
        if (saved) {
            await fetchEvents();
            alert("Event saved successfully.");
            setForm({ name: "", grades: "", startDate: "", endDate: "", description: "" });
        } else {
            alert("Failed to save event.");
        }
    };

    const handleDelete = async (id: string) => {
        const confirmed = window.confirm("Are you sure you want to delete this event?");
        if (!confirmed) return;

        const success = await eventAPIController.deleteEvent(id);
        if (success) {
            await fetchEvents();
        } else {
            alert("Failed to delete event.");
        }
    };

    return (
        <section className='h-max flex w-[95%] flex-col justify-center'>
            <section className='text-[#005285] flex flex-row justify-start mt-5'>
                <h3>Manage Events</h3>
            </section>

            {/* Create Event Form */}
            <section className='bg-white flex flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                <div className='flex flex-wrap items-center justify-center w-full'>
                    <TextField
                        name="name"
                        placeholder="ex- Sportmeet"
                        label="Event name"
                        important="*"
                        value={form.name}
                        onChange={handleInputChange}
                    />
                    <DropdownField
                        label="Select Grade"
                        important="*"
                        mt="12px"
                        mb="12px"
                        ml="12px"
                        mr="12px"
                        options={eventGradeOptions}
                        value={form.grades}
                        onChange={handleDropdownChange}
                    />
                </div>
                <div className='flex flex-wrap items-center justify-center w-full'>
                    <TextField
                        name="startDate"
                        label="Start date"
                        important="*"
                        type="date"
                        value={form.startDate}
                        onChange={handleInputChange}
                    />
                    <TextField
                        name="endDate"
                        label="End date"
                        important="*"
                        type="date"
                        value={form.endDate}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='flex flex-wrap items-center justify-center w-full'>
                    <TextArea
                        name="description"
                        placeholder="ex- Event details"
                        label="Description"
                        value={form.description}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='flex flex-wrap items-center justify-end w-full'>
                    <Button name="Create" color="bg-[#2FEB00]" onClick={handleCreate} />
                </div>
            </section>

            {/* Events Table */}
            <section className='bg-white flex flex-col items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                <Paper sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={events}
                        columns={columns}
                        pagination
                        pageSizeOptions={[5, 10]}
                        sx={{
                            border: 0,
                            '& .MuiDataGrid-row:hover': { backgroundColor: 'inherit' },
                            '& .MuiDataGrid-cell:focus-within': { outline: 'none' }
                        }}
                        disableRowSelectionOnClick
                        disableColumnMenu
                        getRowId={(row) => row.id}
                    />
                </Paper>
            </section>
            <FooterSpace />
        </section>
    );
};
