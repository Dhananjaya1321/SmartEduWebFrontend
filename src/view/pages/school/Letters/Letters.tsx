import React, { useState } from "react";
import { FooterSpace } from "../../../component/FooterSpace/FooterSpace";
import { Paper, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import ViewLetterModal from "../../../models/School/ViewLetterModal/ViewLetterModal";

// Sample data (replace with real data)
const mockRows = [
    {
        id: 1,
        studentName: "Kamal Perera",
        letterType: "leaving",
        grade: "Grade 13",
        requestedDate: "2025-04-01",
        IssuedDate: "Pending",
        description: "Requesting leaving certificate",
    },
    {
        id: 2,
        studentName: "Nimal Fernando",
        letterType: "character",
        grade: "Grade 11",
        requestedDate: "2025-03-15",
        IssuedDate: "2025-03-20",
        description: "Character certificate for scholarship",
    },
    {
        id: 3,
        studentName: "Nimal Fernando",
        letterType: "recommendation",
        grade: "Grade 11",
        requestedDate: "2025-03-15",
        IssuedDate: "2025-03-20",
        description: "recommendation for scholarship",
    },
];

export const Letters = () => {
    const [selectedLetter, setSelectedLetter] = useState<any>(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleView = (row: any) => {
        setSelectedLetter(row);
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
        setSelectedLetter(null);
    };

    const columns: GridColDef[] = [
        { field: 'studentName', headerName: 'Student name', width: 200 },
        { field: 'letterType', headerName: 'Letter type', width: 200 },
        { field: 'grade', headerName: 'Last grade of education', width: 200 },
        { field: 'requestedDate', headerName: 'Requested date', width: 200 },
        { field: 'IssuedDate', headerName: 'Issued date', width: 200 },
        { field: 'description', headerName: 'Description', width: 250 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 250,
            renderCell: (params) => (
                <div className="flex gap-2">
                    <button
                        className="rounded-xl w-max h-max p-2 bg-orange-600 text-white hover:bg-orange-700"
                        onClick={() => handleView(params.row)}
                    >
                        View & Accept
                    </button>
                    <button className="rounded-xl w-max h-max p-2 bg-red-600 text-white hover:bg-red-700">
                        Reject
                    </button>
                </div>
            ),
        },
    ];

    // Sample letter data formatter (map based on type)
    const getLetterData = () => {
        if (!selectedLetter) return {};

        switch (selectedLetter.letterType) {
            case "leaving":
                return {
                    schoolName: "Ananda College Colombo",
                    schoolLogoUrl: "/images/ananda-logo.png",
                    studentName: selectedLetter.studentName,
                    admissionNo: "AC123456",
                    dateOfAdmission: "2015-01-15",
                    dateOfLeaving: "2025-03-31",
                    gradeCompleted: selectedLetter.grade,
                    reasonForLeaving: selectedLetter.description,
                    conduct: "Excellent",
                    issueDate: selectedLetter.IssuedDate,
                    principalName: "Mr. S. Jayasinghe",
                    principalSignatureUrl: "/images/principal-signature.png",
                };

            case "character":
                return {
                    schoolName: "Royal College Colombo",
                    schoolLogoUrl: "/images/royal-logo.png",
                    studentName: selectedLetter.studentName,
                    admissionNo: "RC987654",
                    gradeOrClass: selectedLetter.grade,
                    duration: "2015 - 2025",
                    characterDescription: "Well-behaved and disciplined",
                    issueDate: selectedLetter.IssuedDate,
                    principalName: "Dr. R. Perera",
                    principalSignatureUrl: "/images/principal-signature.png",
                };

            case "recommendation":
                return {
                    schoolName: "Dharmapala Vidyalaya",
                    schoolLogoUrl: "/images/dharmapala-logo.png",
                    studentName: selectedLetter.studentName,
                    admissionNo: "DP33221",
                    academicPerformance: "Outstanding",
                    achievements: "Won national science Olympiad",
                    personalTraits: "Diligent, creative, and cooperative",
                    recommendationPurpose: selectedLetter.description,
                    issueDate: selectedLetter.IssuedDate,
                    principalName: "Mrs. N. Weerasinghe",
                    principalSignatureUrl: "/images/principal-signature.png",
                };

            default:
                return {};
        }
    };

    return (
        <section className="h-max flex w-[95%] flex-col justify-center">
            <section className="text-[#005285] flex flex-row justify-start mt-5">
                <h3>Manage Letters</h3>
            </section>

            <section className="bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md">
                <Paper sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={mockRows}
                        columns={columns}
                        pagination
                        pageSizeOptions={[5, 10]}
                        sx={{
                            border: 0,
                            '& .MuiDataGrid-row:hover': {
                                backgroundColor: 'inherit'
                            },
                            '& .MuiDataGrid-cell:focus-within': {
                                outline: 'none'
                            }
                        }}
                        disableRowSelectionOnClick
                        disableColumnMenu
                        getRowId={(row) => row.id}
                    />
                </Paper>
            </section>

            <FooterSpace />

            {selectedLetter && (
                <ViewLetterModal
                    open={modalOpen}
                    onClose={handleClose}
                    onAccept={() => {
                        console.log("Accepted:", selectedLetter);
                        handleClose();
                    }}
                    letterType={selectedLetter.letterType}
                    data={getLetterData()}
                />
            )}
        </section>
    );
};
