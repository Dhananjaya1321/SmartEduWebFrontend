import React, { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { DropdownField } from "../../../component/DropdownField/DropdownField";
import { examsAndNICApplicationOptions } from "../../../context/Arrays";
import { FooterSpace } from "../../../component/FooterSpace/FooterSpace";

// Modals
import EditOLApplicationModal from "../../../models/School/EditOLApplicationModal/EditOLApplicationModal";
import EditALApplicationModal from "../../../models/School/EditALApplicationModal/EditALApplicationModal";
import EditGrade5ApplicationModal from "../../../models/School/EditGrade5ApplicationModal/EditGrade5ApplicationModal";
import EditNICApplicationModal from "../../../models/School/EditNICApplicationModal/EditNICApplicationModal";
import ViewALApplicationModal from "../../../models/School/ViewALApplicationModal/ViewALApplicationModal";
import ViewG5ApplicationModal from "../../../models/School/ViewG5ApplicationModal/ViewG5ApplicationModal";
import ViewNICApplicationModal from "../../../models/School/ViewNICApplicationModal/ViewNICApplicationModal";
import ViewOLApplicationModal from "../../../models/School/ViewOLApplicationModal/ViewOLApplicationModal";
import examsAndApplicationsAPIController from "../../../../controller/ExamsAndApplicationsAPIController";


interface StudentApplication {
    id: string;
    name: string;
    index: string;
    applicationType: string;
    birthCertificate: boolean;
    nicFront?: boolean;
    nicBack?: boolean;
    status: string;
}

export const ViewExamsAndNICApplicationStatus = () => {
    const [selectedApplication, setSelectedApplication] = useState("");
    const [applicationData, setApplicationData] = useState<StudentApplication[]>([]);
    const [loading, setLoading] = useState(false);

    // Fetch applications when selectedApplication changes
    useEffect(() => {
        if (!selectedApplication) return;

        const fetchData = async () => {
            setLoading(true);
            const result = await examsAndApplicationsAPIController.getAll(selectedApplication);
            if (result) {
                console.log(result)
                setApplicationData(result);
            } else {
                setApplicationData([]); // Clear if API fails
            }
            setLoading(false);
        };

        fetchData();
    }, [selectedApplication]);

    // ================== COLUMNS ==================
// ================== COLUMNS ==================
    const columns_ol: GridColDef[] = [
        { field: "studentName", headerName: "Student Name", width: 200 },
        { field: "registrationNumber", headerName: "registration Number", width: 250 },
        {
            field: "birthCertificateFrontImageUrl",
            headerName: "Birth Cert Front",
            width: 160,
            renderCell: (params) =>
                params.value ? "✅" : "❌",
        },
        {
            field: "birthCertificateBackImageUrl",
            headerName: "Birth Cert Back",
            width: 160,
            renderCell: (params) =>
                params.value ? "✅" : "❌",
        },
        {
            field: "nicFrontImageUrl",
            headerName: "NIC Front",
            width: 140,
            renderCell: (params) =>
                params.value ? "✅" : "❌",
        },
        {
            field: "nicBackImageUrl",
            headerName: "NIC Back",
            width: 140,
            renderCell: (params) =>
                params.value ? "✅" : "❌",
        },
        { field: "status", headerName: "Status", width: 130 },
        {
            field: "actions",
            headerName: "Actions",
            width: 150,
            renderCell: () => (
                <>
                    <EditOLApplicationModal />
                    <ViewOLApplicationModal />
                </>
            ),
        },
    ];

    const columns_al: GridColDef[] = [
        { field: "studentName", headerName: "Student Name", width: 200 },
        { field: "registrationNumber", headerName: "registration Number", width: 250 },
        {
            field: "birthCertificateFrontImageUrl",
            headerName: "Birth Cert Front",
            width: 160,
            renderCell: (params) =>
                params.value ? "✅" : "❌",
        },
        {
            field: "birthCertificateBackImageUrl",
            headerName: "Birth Cert Back",
            width: 160,
            renderCell: (params) =>
                params.value ? "✅" : "❌",
        },
        {
            field: "nicFrontImageUrl",
            headerName: "NIC Front",
            width: 140,
            renderCell: (params) =>
                params.value ? "✅" : "❌",
        },
        {
            field: "nicBackImageUrl",
            headerName: "NIC Back",
            width: 140,
            renderCell: (params) =>
                params.value ? "✅" : "❌",
        },
        { field: "status", headerName: "Status", width: 130 },
        {
            field: "actions",
            headerName: "Actions",
            width: 150,
            renderCell: () => (
                <>
                    <EditALApplicationModal />
                    <ViewALApplicationModal />
                </>
            ),
        },
    ];

    const columns_g5: GridColDef[] = [
        { field: "studentName", headerName: "Student Name", width: 200 },
        { field: "registrationNumber", headerName: "registration Number", width: 250 },
        {
            field: "birthCertificateFrontImageUrl",
            headerName: "Birth Cert Front",
            width: 160,
            renderCell: (params) =>
                params.value ? "✅" : "❌",
        },
        {
            field: "birthCertificateBackImageUrl",
            headerName: "Birth Cert Back",
            width: 160,
            renderCell: (params) =>
                params.value ? "✅" : "❌",
        },
        { field: "status", headerName: "Status", width: 130 },
        {
            field: "actions",
            headerName: "Actions",
            width: 150,
            renderCell: () => (
                <>
                    <EditGrade5ApplicationModal />
                    <ViewG5ApplicationModal />
                </>
            ),
        },
    ];

    const columns_nic: GridColDef[] = [
        { field: "studentName", headerName: "Student Name", width: 200 },
        { field: "registrationNumber", headerName: "registration Number", width: 250 },
        {
            field: "birthCertificateFrontImageUrl",
            headerName: "Birth Cert Front",
            width: 160,
            renderCell: (params) =>
                params.value ? "✅" : "❌",
        },
        {
            field: "birthCertificateBackImageUrl",
            headerName: "Birth Cert Back",
            width: 160,
            renderCell: (params) =>
                params.value ? "✅" : "❌",
        },
        {
            field: "nicFrontImageUrl",
            headerName: "NIC Front",
            width: 140,
            renderCell: (params) =>
                params.value ? "✅" : "❌",
        },
        {
            field: "nicBackImageUrl",
            headerName: "NIC Back",
            width: 140,
            renderCell: (params) =>
                params.value ? "✅" : "❌",
        },
        { field: "status", headerName: "Status", width: 130 },
        {
            field: "actions",
            headerName: "Actions",
            width: 150,
            renderCell: () => (
                <>
                    <EditNICApplicationModal />
                    <ViewNICApplicationModal />
                </>
            ),
        },
    ];


    // ================== UI ==================
    const getColumns = () => {
        switch (selectedApplication) {
            case "ol":
                return columns_ol;
            case "al":
                return columns_al;
            case "g5":
                return columns_g5;
            case "nic":
                return columns_nic;
            default:
                return [];
        }
    };

    return (
        <section className="h-max flex w-[95%] flex-col justify-center">
            <section className="text-[#005285] flex flex-row justify-start mt-5">
                <h3>Manage Exam and NIC Application &gt; View</h3>
            </section>

            {/* Dropdown Section */}
            <section className="bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md">
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

            {selectedApplication && (
                <div className="flex flex-col items-start w-full">
                    <h4 className="text-lg font-semibold text-[#005285] mb-4 mt-6">
                        Application Status
                    </h4>
                    <div style={{ height: 400, width: "100%" }}>
                        <Paper sx={{ height: 400, width: "100%" }}>
                            <DataGrid
                                rows={applicationData}
                                columns={getColumns()}
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
                    </div>
                </div>
            )}

            <FooterSpace />
        </section>
    );
};
