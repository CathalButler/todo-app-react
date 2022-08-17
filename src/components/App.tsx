import '../styles/App.css';
import React from "react";
import Login from "./Login/Login";
import {Route, Routes} from "react-router-dom";
import Register from "./Register/Register";
import Home from "./Home/Home";

/// https://stackoverflow.com/questions/66149145/how-to-render-different-components-using-react-router-dom-v6-0-0-with-react-redu

function App() {

    return (
        <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/*" element={<Home/>}/>
        </Routes>
    );
}

export default App;
