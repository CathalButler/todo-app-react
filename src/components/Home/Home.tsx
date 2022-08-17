import MainNavbar from "./MainNavbar";
import TaskMenu from "./TaskMenu";
import {Navigate, Route, Routes} from "react-router-dom";
import {TaskDetails} from "./TaskDetails";
import React from "react";
import {AUTH_TOKEN} from "../../constants";

const Home = () => {

    // Grab auth key from local storage:
    const authToken = localStorage.getItem(AUTH_TOKEN);

    // If the key does not exist, return authentication
    if (!authToken) {
        return <Navigate to={"/login"}/>
    }

    return (
        <div className={"page-wrapper"}>
            <div className={"main-wrapper"}>
                <MainNavbar/>
                <TaskMenu/>
                <Routes>
                    <Route path={"/task"} element={<TaskDetails/>}></Route>
                </Routes>
            </div>
        </div>
    )


}

export default Home;