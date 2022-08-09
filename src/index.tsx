import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from '@apollo/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import {ThemeProvider} from "@mui/material";
import theme from "./theme";
import {setContext} from "@apollo/client/link/context";
import {AUTH_TOKEN} from "./constants";
import {TaskDetails} from "./components/Home/TaskDetails";
import Home from "./components/Home/Home";

const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
});

// Middleware will be invoked every time ApolloClient sends a request to the server\:
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(AUTH_TOKEN);
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <ApolloProvider client={client}>
                <App/>
            </ApolloProvider>
        </BrowserRouter>
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
