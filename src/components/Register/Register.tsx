import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {gql, useMutation} from "@apollo/client";
import {AUTH_TOKEN} from "../../constants";
import {SubmitHandler, useForm} from "react-hook-form";
import {ErrorMessage} from "../../interfaces/errorMessage";
import {REGISTER_MUTATION} from "../../apollo/mutations/registerMutation";
import {RegisterDetails} from "../../interfaces/registerDetails";


export default function Register() {

    //Constants:
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm<RegisterDetails>();
    const [error, setError] = useState<ErrorMessage>()

    // Register Mutation hook with AUTH_TOKEN and routing set
    const [signup] = useMutation(REGISTER_MUTATION, {
        onCompleted: ({signup}) => {
            localStorage.setItem(AUTH_TOKEN, signup.token);
            navigate('/');
        }
    });

    // OnSubmit handler, passes email and password from form to login function to run mutation:
    const onSubmit: SubmitHandler<RegisterDetails> = data => signup(
        {
            variables: {name: data.name, email: data.email, password: data.password}
        },
    ).then(({data}) => {
        console.log(data)
    }).catch(error => {
        // Display a UI error if the password is invalided:
        if (error.message === "Failed to fetch") {
            const err: ErrorMessage = {
                error: true,
                errMessage: "Internal Server Error"
            }
            setError(err)
        } else {
            // Log the error
            console.log(error.message);
            const err: ErrorMessage = {
                error: true,
                errMessage: "Internal Server Error"
            }
            setError(err)
        }
    })

    return (
        <div className={"auth-body"}>
            <div className={"auth-a-side"}/>
            <form className="authForm" onSubmit={handleSubmit(onSubmit)}>
                <div className={"padding-vertical padding-small"}>
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
                <div className={"padding-vertical padding-small"}>
                    <label className="formFieldLabel" htmlFor="name">
                        Full Name
                    </label>
                    <input
                        {...register("name", {
                            required: true,
                            min: 3
                        })}
                        type="text"
                        id="name"
                        className="formFieldInput"
                        placeholder="Enter your full name"
                        name="name"
                    />
                    {errors.name && <p className={"error-message-text"}>Please check the name entered</p>}
                </div>

                <div className="padding-vertical padding-small">
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
                    {errors.email && <p className={"error-message-text"}>Please check email address</p>}
                </div>

                <div className="padding-vertical padding-small">
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
                    {errors.password && <p className={"error-message-text"} >Please check the Password</p>}
                </div>

                {error?.errMessage && <div className={"error-message error-message-text"}>{error.errMessage}</div>}


                <div className="formButtons">
                    <button className="formFieldButton" type={"submit"}>Register</button>
                </div>
            </form>
        </div>
    );
}
