import MainNavbar from "./MainNavbar";
import TaskMenu from "./TaskMenu";
import {Route, Routes} from "react-router-dom";
import {TaskDetails} from "./TaskDetails";
import React from "react";

const Home = () => {

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