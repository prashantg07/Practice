import React, { useState } from "react";

let WishMessage = () => {

    let [state, setState] = useState({
        message: 'Hello'
    })


    let sayGoodMorning = () => {
        setState((state) => ({
            message: 'Good Morning'
        }));
    };

    let sayGoodAfternoon = (value) => {
        setState((state) => ({
            message: value
        }));
    };

    let sayGoodEvening = () => {
        setState((state) => ({
            message: 'Good Evening'
        }));
    };

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">WishMessage</p>
                            </div>
                            <div className="card-body">
                                <h5 className="display-3">{state.message}</h5>
                                <button onClick={sayGoodMorning} className="btn btn-success btn-sm">Good Morning</button>
                                <button onClick={() => sayGoodAfternoon('Good Afternoon')} className="btn btn-warning btn-sm">Good Afternoon</button>
                                <button onClick={sayGoodEvening} className="btn btn-danger btn-sm">Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WishMessage;