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
