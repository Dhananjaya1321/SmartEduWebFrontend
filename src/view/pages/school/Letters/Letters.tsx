import React, {useEffect, useState} from "react";
import {FooterSpace} from "../../../component/FooterSpace/FooterSpace";
import {Paper} from "@mui/material";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import ViewLetterModal from "../../../models/School/ViewLetterModal/ViewLetterModal";
import letterAPIController from "../../../../controller/LetterAPIController";

export const Letters = () => {
    const [letters, setLetters] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [selectedLetter, setSelectedLetter] = useState<any>(null);
    const [modalOpen, setModalOpen] = useState(false);

    // Fetch letters from backend
    const fetchLetters = async () => {
        setLoading(true);
        try {
            const response = await letterAPIController.getAllLetters();
            setLetters(response || []);
        } catch (err) {
            console.error("Failed to fetch letters:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLetters();
    }, []);

    const handleView = (row: any) => {
        setSelectedLetter(row);
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
        setSelectedLetter(null);
    };

    const handleApprove = async (letter: any) => {
        try {
            // await letterAPIController.updateStatus(letter.id, "APPROVED");
            fetchLetters();
        } catch (err) {
            console.error("Failed to approve letter:", err);
        }
    };

    const handleReject = async (data: any) => {
        try {
            const response = await letterAPIController.update(
                data.id,
            );
            if(response){
                console.log("dsds")
            }
            fetchLetters();
        } catch (err) {
            console.error("Failed to reject letter:", err);
        }
    };


    const columns: GridColDef[] = [
        {field: "studentName", headerName: "Student name", width: 200},
        {field: "letterType", headerName: "Letter type", width: 200},
        {field: "lastGrade", headerName: "Last grade", width: 200},
        {field: "requestedDate", headerName: "Requested date", width: 200},
        {field: "description", headerName: "Description", width: 250},
        {field: "status", headerName: "Status", width: 150},
        {
            field: "actions",
            headerName: "Actions",
            width: 250,
            renderCell: (params) => (
                <div className="flex gap-2">
                    <button
                        className="rounded-xl w-max h-max p-2 bg-orange-600 text-white hover:bg-orange-700"
                        onClick={() => handleView(params.row)}
                    >
                        View
                    </button>
                    <button
                        className="rounded-xl w-max h-max p-2 bg-red-600 text-white hover:bg-red-700"
                        onClick={() => handleReject(params.row)}
                        disabled={params.row.status !== "PENDING"}
                    >
                        Reject
                    </button>
                </div>
            ),
        },
    ];

    return (
        <section className="h-max flex w-[95%] flex-col justify-center">
            <section className="text-[#005285] flex flex-row justify-start mt-5">
                <h3>Manage Letters</h3>
            </section>

            <section
                className="bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md">
                <Paper sx={{height: 500, width: "100%"}}>
                    <DataGrid
                        rows={letters}
                        columns={columns}
                        loading={loading}
                        pagination
                        pageSizeOptions={[5, 10]}
                        sx={{
                            border: 0,
                            "& .MuiDataGrid-row:hover": {
                                backgroundColor: "inherit",
                            },
                            "& .MuiDataGrid-cell:focus-within": {
                                outline: "none",
                            },
                        }}
                        disableRowSelectionOnClick
                        disableColumnMenu
                        getRowId={(row) => row.id}
                    />
                </Paper>
            </section>

            <FooterSpace/>

            {selectedLetter && (
                <ViewLetterModal
                    open={modalOpen}
                    onClose={handleClose}
                    onAccept={() => handleApprove(selectedLetter)}
                    letterType={selectedLetter.letterType}
                    data={selectedLetter}
                />
            )}
        </section>
    );
};
