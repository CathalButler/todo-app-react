import React, {useState} from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {gql, useMutation} from "@apollo/client";
import {AUTH_TOKEN} from '../../constants';
import {SubmitHandler, useForm} from "react-hook-form";

interface LoginDetails {
    email: string,
    password: string
}

interface ErrorMessage {
    errMessage: string
}

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

export default function Login() {

    //Constants:
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm<LoginDetails>();
    const [error, setError] = useState<ErrorMessage>()

    // Login Mutation hook with AUTH_TOKEN and routing set
    const [login] = useMutation(LOGIN_MUTATION,
        {
            onCompleted: ({login}) => {
                localStorage.setItem(AUTH_TOKEN, login.token);
                navigate('/home');
            },
        }
    );

    // OnSubmit handler, passes email and password from form to login function to run mutation:
    const onSubmit: SubmitHandler<LoginDetails> = data => login(
        {
            variables: {email: data.email, password: data.password}
        },
    ).then(({data}) => {
        console.log(data)
    }).catch(error => {
        // Display a UI error if the password is invalided:
        if (error.message === "Invalid password") {
            setError(error.message)
        } else {
            // Log the error
            console.log(error.message);
        }
    })


    return (
        <div>
            <div className={"auth-body"}>
                <div className={"authAside"}/>
                <form className="authForm" onSubmit={handleSubmit(onSubmit)

                }>
                    <div>
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
                                    {...register("email", {
                                        required: true,
                                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                    })}
                                    type="email"
                                    id="email"
                                    className="formFieldInput"
                                    placeholder="Enter your email"
                                    name="email"
                                />
                                {/*If there is an error in the email field, the email error message will appear*/}
                                {errors.email && <p>Please check email address</p>}
                            </div>
                        </div>


                        <div className="formField">
                            <label className="formFieldLabel" htmlFor="password">
                                Password
                            </label>
                            <input
                                {...register("password", {
                                    required: true,
                                    // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                                })}
                                type="password"
                                id="password"
                                className="formFieldInput"
                                placeholder="Enter your password"
                                name="password"
                            />
                            {errors.password && <p>Please check the Password</p>}
                        </div>

                        {error && <div className={"error-message"}>Please check your password</div>}

                        <div className="formField">
                            <button className={"formFieldButton"} type={"submit"}>Sign In</button>
                            <Link to="/register" className="formFieldLink">
                                Register
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}