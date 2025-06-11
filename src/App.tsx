import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LandingPage} from "./view/pages/LandingPage/LandingPage";
import {LoginPage} from "./view/pages/LoginPage/LoginPage";
import {RegisterPage} from "./view/pages/RegisterPage/RegisterPage";
import {ForgotPassword} from "./view/pages/ForgotPassword/ForgotPassword";
import {VerifyCodePage} from "./view/pages/VerifyCodePage/VerifyCodePage";
import {ChangePasswordPage} from "./view/pages/ChangePasswordPage/ChangePasswordPage";
import {PrincipalVerifyPage} from "./view/pages/PrincipalVerifyPage/PrincipalVerifyPage";


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
