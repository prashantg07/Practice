import React, { useState } from "react";

let LoginForm = () => {

    let [state, setState] = useState({
        user: {
            username : '',
            password : ''
        }
    });

    let { user } = state;   // Destructuring

    let changeUsername = (event) => {
        setState((prevState) => ({
            ...prevState,
            user: {
                ...prevState.user,
                username: event.target.value
            }
        }));
    };

    let changePassword = (event) => {
        setState((prevState) => ({
            ...prevState,
            user: {
                ...prevState.user,
                password: event.target.value
            }
        }));
    };
    
    let submitLogin = (event) => {
        event.preventDefault();
        console.log(user);
    };

    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(state)}</pre> */}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header bg-success text-white">
                                <p className="h4">Login Here</p>
                            </div>
                            <div className="card-body bg-light">
                            <form onSubmit={submitLogin}>
                                    <div className="mb-3">
                                        <input
                                            value={user.username}
                                            onChange={changeUsername}
                                            type="text"
                                            className="form-control"
                                            placeholder="Username"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            value={user.password}
                                            onChange={changePassword}
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="submit"
                                            className="btn btn-success btn-sm"
                                            value="Login"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </React.Fragment>
    )
}

export default LoginForm;