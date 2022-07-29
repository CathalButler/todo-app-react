import React, {useState} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {gql, useMutation} from "@apollo/client";
import {AUTH_TOKEN} from "../../constants";

const REGISTER_MUTATION = gql`
    mutation Signup(
        $email: String!
        $password: String!
        $name: String!
    ) {
        signup(
            email: $email
            password: $password
            name: $name
        ) {
            token
        }
    }
`;

const Register = () => {

    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
    });

    // Register Mutation hook with AUTH_TOKEN and routing set
    const [register] = useMutation(REGISTER_MUTATION, {
        variables: {
            name: formState.name,
            email: formState.email,
            password: formState.password
        },
        onCompleted: ({signup: register}) => {
            localStorage.setItem(AUTH_TOKEN, register.token);
            navigate('/');
        }
    });

    return (
        <div>
            <div className={"auth-body"}>
                <div className={"authAside"}/>
                <div className="authForm">
                    <div className="formTitle">
                        <NavLink
                            to="/login"
                            className={nav => (nav.isActive ? "formTitleLink-active" : "formTitleLink")}
                        >
                            Sign In
                        </NavLink>
                        <NavLink
                            className={nav => (nav.isActive ? "formTitleLink-active" : "formTitleLink")}
                            to="/register"
                        >
                            Register
                        </NavLink>
                    </div>
                    <div className={"formCenter"}>
                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="name">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="formFieldInput"
                                placeholder="Enter your full name"
                                name="name"
                                value={formState.name}
                                onChange={(e) =>
                                    setFormState({
                                        ...formState,
                                        name: e.target.value
                                    })
                                }
                            />
                        </div>
                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="email">
                                E-Mail Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="formFieldInput"
                                placeholder="Enter your email"
                                name="email"
                                value={formState.email}
                                onChange={(e) =>
                                    setFormState({
                                        ...formState,
                                        email: e.target.value
                                    })
                                }
                            />
                        </div>
                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="formFieldInput"
                                placeholder="Enter your password"
                                name="password"
                                value={formState.password}
                                onChange={(e) =>
                                    setFormState({
                                        ...formState,
                                        password: e.target.value
                                    })
                                }
                            />
                        </div>
                        <div className="formField">
                            <button className="formFieldButton" onClick={() => register()}>Register</button>
                            <Link to="/login" className="formFieldLink">
                                I'm already member
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;
