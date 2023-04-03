import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./App";
import AssignPlayer from "./components/assignplayer";

function RouteSwitch(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/assign/:type" element={<AssignPlayer/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;