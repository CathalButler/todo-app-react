import React, {useState} from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {gql, useMutation} from "@apollo/client";
import {AUTH_TOKEN} from '../../constants';

const LOGIN_MUTATION = gql`
    mutation LoginMutation(
        $email: String!
        $password: String!
    ) {
        login(email: $email, password: $password) {
            token
        }
    }
`;

const Login = () => {
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        email: '',
        password: '',
    });

    // Login Mutation hook with AUTH_TOKEN and routing set
    const [login] = useMutation(LOGIN_MUTATION, {
        variables: {
            email: formState.email,
            password: formState.password
        },
        onCompleted: ({login}) => {
            localStorage.setItem(AUTH_TOKEN, login.token);
            navigate('/home');
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
                    <div className="formCenter">
                        <div className="formFields">
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
                        <button className="formFieldButton" onClick={() => login()}>Sign In</button>
                        <Link to="/register" className="formFieldLink">
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Login;