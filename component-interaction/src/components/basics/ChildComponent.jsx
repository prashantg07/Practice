import React, { useState } from "react";

let ChildComponent = (props) => {

    let [state, setState] = useState({
        author : 'PRASHANT GUPTA'
    });

    let clickbtn = () => {
        // send data to parent
        props.sendData(state.author);
    };

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card shadow-lg">
                            <div className="card-body bg-warning text-dark">
                                <p className="h4">Child Component</p>
                                <p>{props.channel}</p>
                                <button onClick={clickbtn} className="btn btn-dark btn-sm">send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ChildComponent;