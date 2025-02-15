import React from "react";
import { useEffect } from "react";
import { useState } from "react";

let DigitalWatch = () => {

    let [state, setState] = useState({
        currentTime: new Date().toLocaleTimeString()
    });

    useEffect(() => {
        let interval = setInterval(() => {      //ComponentDidMount
            setState(() => ({
                currentTime: new Date().toLocaleTimeString()
            }));
        }, 1000);

        return () => {
            clearInterval(interval);      //ComponentWillUnmount
        }
    }, []);

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow-lg text-center">
                            <div className="card-header bg-warning">
                                <p className="h4">Digital Watch</p>
                            </div>
                            <div className="card-body">
                                <h3 className="display-4">{state.currentTime}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DigitalWatch;