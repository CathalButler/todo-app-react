import '../styles/App.css';
import React from "react";
import {AUTH_TOKEN} from "../constants";
import Login from "./Login/Login";

function App() {

    // Grab auth key from local storage:
    const authToken = localStorage.getItem(AUTH_TOKEN);

    // If the key does not exist, return authentication
    if (!authToken) {
        return <Login/>
    }

    return (
        <div className={"wrapper"}>
            <h1>Welcome to a React To-do app! </h1>
            {/*<Header/>*/}
        </div>
    );
}

export default App;
