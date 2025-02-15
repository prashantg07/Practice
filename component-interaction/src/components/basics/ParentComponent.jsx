import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

let ParentComponent = () => {

    let [state, setState] = useState({
        channel : 'Pacific Technologies',
        author : ''
    });

    let receiveData = (data) => {
        setState((state) => ({
            ...state,
            author : data
        }));
    };

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card shadow-lg">
                            <div className="card-body bg-success text-white">
                                <p className="h4">Parent Component</p>
                                <p>From Child : {state.author}</p>
                                <ChildComponent channel={state.channel} sendData={receiveData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ParentComponent;