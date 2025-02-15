import React, { useState } from "react";

let AuthUser = () => {

    let [state, setState] = useState({
        isLoggedIn: false
    });

    let login = () => {
        setState((state) => ({
            isLoggedIn: true
        }));
    };

    let logOut = () => {
        setState((state) => ({
            isLoggedIn: false
        }));
    };

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card shadow-lg">
                            <div className="card-body">
                                {
                                    state.isLoggedIn ?          //Conditional (ternary) operator
                                        <p className="h3">Welcome Mr. PRASHANT</p> :
                                        <p className="h3">Welcome Guest!</p>
                                }
                                {
                                    state.isLoggedIn ?
                                        <button onClick={logOut} className="btn btn-warning btn-sm">LogOut</button> :
                                        <button onClick={login} className="btn btn-success btn-sm">Login</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AuthUser;