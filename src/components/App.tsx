import '../styles/App.css';
import React from "react";
import {AUTH_TOKEN} from "../constants";
import Login from "./Login/Login";
import {Route, Routes} from "react-router-dom";
import Register from "./Register/Register";
import Home from "./Home/Home";

/// https://stackoverflow.com/questions/66149145/how-to-render-different-components-using-react-router-dom-v6-0-0-with-react-redu

function App() {

    // Grab auth key from local storage:
    const authToken = localStorage.getItem(AUTH_TOKEN);

    // If the key does not exist, return authentication
    if (!authToken) {
        return <Login/>
    }

    return (
        <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<Home/>}/>
        </Routes>
    );
}

export default App;
