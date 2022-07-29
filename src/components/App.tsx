import '../styles/App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import Login from './pages/Login'
import Home from "./pages/Home";
import React from "react";

function App() {

    return (
        <div className={"App"}>
            <div className={"appAside"}/>
            <div className="appForm">
                <div className="pageSwitcher">
                    <NavLink
                        className={nav => (nav.isActive ? "pageSwitcherItem-active" : "pageSwitcherItem")}
                        to="/login"
                    >
                        Sign In
                    </NavLink>
                    <NavLink
                        to="/register"
                        className={nav => (nav.isActive ? "pageSwitcherItem-active" : "pageSwitcherItem")}
                    >
                        Sign Up
                    </NavLink>
                </div>


                <div className="formTitle">
                    <NavLink
                        to="/login"
                        className={nav => (nav.isActive ? "formTitleLink-active" : "formTitleLink")}
                    >
                        Sign In
                    </NavLink>{" "}
                    or{" "}
                    <NavLink
                        className={nav => (nav.isActive ? "formTitleLink-active" : "formTitleLink")}
                        to="/register"

                    >
                        Sign Up
                    </NavLink>
                </div>

                {/*<Header/>*/}
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    {/*<Route*/}
                    {/*    path="/Logout"*/}
                    {/*    element={<Login/>}*/}
                    {/*/>*/}
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
