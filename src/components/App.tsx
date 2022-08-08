import '../styles/App.css';
import React from "react";
import {AUTH_TOKEN} from "../constants";
import Login from "./Login/Login";
import Home from "./Home/Home";

function App() {

    // Grab auth key from local storage:
    const authToken = localStorage.getItem(AUTH_TOKEN);

    // If the key does not exist, return authentication
    if (!authToken) {
        return <Login/>
    }

    return (
        <Home/>
    );
}

export default App;
