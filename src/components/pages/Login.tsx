import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {

    const [formState, setFormState] = useState({
        login: true,
        email: '',
        password: '',
    });

    return (
        <div className={"appForm"}>
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
                <button className="formFieldButton">Sign In</button>
                {" "}
                <Link to="/login" className="formFieldLink">
                    Create an account
                </Link>
            </div>
        </div>

    );
}


export default Login;