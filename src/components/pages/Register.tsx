import React, {useState} from "react";
import {Link} from "react-router-dom";

const Register = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
    });

    return (
        <div className="formCenter">
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
                <button className="formFieldButton">Register</button>
                {" "}
                <Link to="/login" className="formFieldLink">
                    I'm already member
                </Link>
            </div>
        </div>
    );
}
export default Register;
