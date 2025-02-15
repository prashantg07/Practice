import React, { useState } from "react";

//Function Components
let Student = () => {
    let [state, setState] = useState({
        students :  [
            {
                name : 'Prashant',
                course : 'BTech'
            },
            {
                name : 'Sandeep',
                course : 'MTech'
            },
        ]
    })

    let {students} = state; // Destructuring in ES6 / ES2017
    return(
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    {/* <pre>{JSON.stringify(state)}</pre> */}
                    <span>Name : {students[0].name}</span> <br />
                    <span>Course : {students[0].course}</span>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <span>Name : {students[1].name}</span> <br />
                    <span>Course : {students[1].course}</span>
                </div>
            </div>
        
        </React.Fragment>
    )
}

export default Student;

