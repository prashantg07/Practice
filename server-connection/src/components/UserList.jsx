import React, { useEffect, useState } from "react";
import UserService from "../services/UserService";

let UserList = () => {

    let [state, setState] = useState({
        users: []
    });

    // Promises with .then().catch() :-

    // useEffect(() => {
    //     UserService.getAllUsers().then((response) => {
    //         setState(() => ({
    //             users : response.data
    //         }));
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // }, []);


    // Async-Await with try-catch : -
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await UserService.getAllUsers();
                // console.log(response); // Debugging
                setState({ users: response.data });
            } catch (error) {
                console.error(error);
            }
        };
        fetchUsers();

        // Cleanup function (if needed)
        return () => {
            console.log("Component Unmounted");
        };
        
    }, []);


    let { users } = state;   //Destructuring

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">User List</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rerum enim perferendis nemo possimus. Natus reiciendis aspernatur illo nam commodi minus, ad reprehenderit perspiciatis rerum distinctio possimus, fuga sint iste?</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table table-hover text-center table-striped">
                            <thead className="table-dark text-white">
                                <tr>
                                    <th>SNO</th>
                                    <th>NAME</th>
                                    <th>Email</th>
                                    <th>Street</th>
                                    <th>City</th>
                                    <th>Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.length > 0 &&
                                    users.map(user => {
                                        return (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.address.street}</td>
                                                <td>{user.address.city}</td>
                                                <td>{user.website}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default UserList;