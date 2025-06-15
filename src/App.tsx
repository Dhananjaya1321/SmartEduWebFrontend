import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LandingPage} from "./view/pages/common/LandingPage/LandingPage";
import {LoginPage} from "./view/pages/common/LoginPage/LoginPage";
import {RegisterPage} from "./view/pages/school/RegisterPage/RegisterPage";
import {ForgotPassword} from "./view/pages/common/ForgotPassword/ForgotPassword";
import {VerifyCodePage} from "./view/pages/common/VerifyCodePage/VerifyCodePage";
import {ChangePasswordPage} from "./view/pages/common/ChangePasswordPage/ChangePasswordPage";
import {PrincipalVerifyPage} from "./view/pages/school/PrincipalVerifyPage/PrincipalVerifyPage";
import {SchoolVerifyPage} from "./view/pages/school/SchoolVerifyPage/SchoolVerifyPage";
import {AdminPage} from "./view/pages/school/AdminPage/AdminPage";
import {AdminDashboard} from "./view/pages/school/AdminDashboard/AdminDashboard";
import {ZMoEAdminDashboard} from "./view/pages/ZEoM/ZMoEAdminDashboard/ZMoEAdminDashboard";
import {ZMoEAdminPage} from "./view/pages/ZEoM/ZMoEAdminPage/ZMoEAdminPage";
import {PEoMAdminPage} from "./view/pages/PMoE/PEoMAdminPage/PEoMAdminPage";
import {PEoMAdminDashboard} from "./view/pages/PMoE/PEoMAdminDashboard/PEoMAdminDashboard";
import {MEoMAdminPage} from "./view/pages/MoE/MEoMAdminPage/MEoMAdminPage";
import {MEoMAdminDashboard} from "./view/pages/MoE/MEoMAdminDashboard/MEoMAdminDashboard";
import {MoEUser} from "./view/pages/MoE/MoEUser/MoEUser";
import {PMoEUser} from "./view/pages/PMoE/PMoEUser/PMoEUser";
import {ZMoEUser} from "./view/pages/ZEoM/ZMoEUser/ZMoEUser";
import {TeachersAndUsers} from "./view/pages/school/TeachersAndUsers/TeachersAndUsers";
import {SchoolUser} from "./view/pages/school/SchoolUser/SchoolUser";
import {SchoolTeacher} from "./view/pages/school/SchoolTeacher/SchoolTeacher";
import {MoEProvincialEducationOffice} from "./view/pages/MoE/MoEProvincialEducationOffice/MoEProvincialEducationOffice";
import {PMoEZonalEducationOffice} from "./view/pages/PMoE/PMoEZonalEducationOffice/PMoEZonalEducationOffice";
import {ZMoESchools} from "./view/pages/ZEoM/ZMoESchools/ZMoESchools";
import {ZMoETeachersAndPrinciples} from "./view/pages/ZEoM/ZMoETeachersAndPrinciples/ZMoETeachersAndPrinciples";
import {ZMoEManagePrinciples} from "./view/pages/ZEoM/ZMoEManagePrinciples/ZMoEManagePrinciples";
import {ZMoEManageTeachers} from "./view/pages/ZEoM/ZMoEManageTeachers/ZMoEManageTeachers";


function AppContent() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/forgot-password" element={<ForgotPassword/>}/>
            <Route path="/verify-code" element={<VerifyCodePage/>}/>
            <Route path="/change-password" element={<ChangePasswordPage/>}/>
            <Route path="/verify-principal" element={<PrincipalVerifyPage/>}/>
            <Route path="/verify-school" element={<SchoolVerifyPage/>}/>
            <Route path="/school-admin" element={<AdminPage/>}>
                <Route index element={<AdminDashboard/>}/>
                <Route path="manage-teachers-and-users" element={<TeachersAndUsers/>}>
                    <Route index path="manage-users" element={<SchoolUser/>}/>
                    <Route path="manage-teachers" element={<SchoolTeacher/>}/>
                </Route>
            </Route>
            <Route path="/zonal-education-offices-admin" element={<ZMoEAdminPage/>}>
                <Route index element={<ZMoEAdminDashboard/>}/>
                <Route path="manage-users" element={<ZMoEUser/>}/>
                <Route path="manage-schools" element={<ZMoESchools/>}/>
                <Route path="manage-teachers-and-principles" element={<ZMoETeachersAndPrinciples/>}>
                    <Route index path="manage-principles" element={<ZMoEManagePrinciples/>}/>
                    <Route index path="manage-teachers" element={<ZMoEManageTeachers/>}/>
                </Route>
            </Route>
            <Route path="/provincial-education-offices-admin" element={<PEoMAdminPage/>}>
                <Route index element={<PEoMAdminDashboard/>}/>
                <Route path="manage-users" element={<PMoEUser/>}/>
                <Route path="manage-zonal-education-offices" element={<PMoEZonalEducationOffice/>}/>
            </Route>
            <Route path="/ministry-education-offices-admin" element={<MEoMAdminPage/>}>
                <Route index element={<MEoMAdminDashboard/>}/>
                <Route path="manage-users" element={<MoEUser/>}/>
                <Route path="manage-provincial-education-offices" element={<MoEProvincialEducationOffice/>}/>
            </Route>
        </Routes>
    );
}

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AppContent/>
            </BrowserRouter>
        </div>
    );
}

export default App;
