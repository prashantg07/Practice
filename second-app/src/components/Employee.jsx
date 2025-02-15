import React, { Component } from "react";

// Class Components 
class Employee extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props);
        
        return(
            <React.Fragment>
                <div className="card">
                    <div className="card-body">
                        <h2>Name: {this.props.name}</h2>
                        <h3>Age: {this.props.age} years</h3>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Employee;