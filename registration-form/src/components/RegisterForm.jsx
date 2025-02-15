import React, { useState } from "react";

let RegisterForm = () => {

    let [state, setState] = useState({
        user: {
            username: '',
            email: '',
            password: '',
            designation: '',
            bio: '',
            terms: false
        }
    });

    let { user } = state;

    let updateInput = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({
            ...prevState,
            user: {
                ...prevState.user,
                [name]: value
            }
        }));
    };

    // let updateInput = (event) => {
    //     setState((state) => ({
    //         user: {
    //             ...state.user,
    //             [event.target.name]: event.target.value
    //         }
    //     }));
    // };

    let updateCheck = (event) => {
        const { name, checked } = event.target;
        setState((prevState) => ({
            ...prevState,
            user: {
                ...prevState.user,
                [name]: checked
            }
        }));
    };

    // let updateCheck = (event) => {
    //     setState((state) => ({
    //         user: {
    //             ...state.user,
    //             [event.target.name]: event.target.checked
    //         }
    //     }));
    // };

    let submitRegister = (event) => {
        event.preventDefault();
        console.log(user);
    };

    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(state.user)}</pre> */}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-header bg-warning">
                                <p className="h4">Register Here</p>
                            </div>
                            <div className="card-body bg-light">
                                <form onSubmit={submitRegister}>
                                    <div className="mb-3">
                                        <input
                                            name="username"
                                            value={user.username}
                                            onChange={updateInput}
                                            type="text" className="form-control" placeholder="Username" />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            name="email"
                                            value={user.email}
                                            onChange={updateInput}
                                            type="email" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            name="password"
                                            value={user.password}
                                            onChange={updateInput}
                                            type="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="mb-3">
                                        <select
                                            name="designation"
                                            value={user.designation}
                                            onChange={updateInput}
                                            className="form-control">
                                            <option value="">Select Designation</option>
                                            <option value="Software Developer">Software Developer</option>
                                            <option value="Sr.Software Developer">Sr.Software Developer</option>
                                            <option value="Tech Lead">Tech Lead</option>
                                            <option value="Project Manager">Project Manager</option>
                                            <option value="Director">Director</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <textarea
                                            name="bio"
                                            value={user.bio}
                                            onChange={updateInput}
                                            rows={4} className="form-control" placeholder="Bio" />
                                    </div>
                                    <div className="mb-3">
                                        <input 
                                        name="terms"
                                        checked={user.terms} // Controlled checkbox
                                        onChange={updateCheck}
                                        type="checkbox" className="form-check-input" /> Accept Terms
                                    </div>
                                    <div className="mb-3">
                                        <input type="submit" className="btn btn-warning btn-sm" value="Register" />
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

export default RegisterForm;

