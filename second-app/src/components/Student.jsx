import React from "react";

// Function Components
let Student = (props) => {
    // console.log(props);
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h2>Welcome {props.name}</h2>
                    <h3>Course: {props.course}</h3>
                    <pre>{JSON.stringify(props)}</pre>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Student;