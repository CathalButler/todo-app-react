import '../styles/App.css';
import React from "react";
import {AUTH_TOKEN} from "../constants";
import Login from "./Login/Login";
import Home from "./Home/Home";
import {Route, Routes} from "react-router-dom";
import Register from "./Register/Register";
import {TaskDetails} from "./Home/TaskDetails";
import TaskMenu from "./Home/TaskMenu";

/// https://stackoverflow.com/questions/66149145/how-to-render-different-components-using-react-router-dom-v6-0-0-with-react-redu

function App() {

    // Grab auth key from local storage:
    const authToken = localStorage.getItem(AUTH_TOKEN);

    // If the key does not exist, return authentication
    if (!authToken) {
        return <Login/>
    }

    return (

        <div>
            <Routes>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>

            <div className={"page-wrapper"}>
                <div className={"main-wrapper"}>
                    <Home/>
                    <TaskMenu/>
                    <Routes>
                        <Route path={"/task"} element={<TaskDetails/>}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
