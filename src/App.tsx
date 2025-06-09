import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LandingPage} from "./view/pages/LandingPage/LandingPage";


function AppContent() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
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
