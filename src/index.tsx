import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from '@apollo/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <Routes>
                <Route path={"/"} element={ <App/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>

        </ApolloProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
