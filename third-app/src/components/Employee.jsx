import React from "react";

//Class Components
class Employee extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            employees : [
                {
                    name : 'John',
                    age : 25
                },
                {
                    name : 'Salt',
                    age : 30
                }
            ]
        }
    }

    render(){
        return(
            <React.Fragment>
                <div className="card">
                    <div className="card-body">
                        <span>NAME : {this.state.employees[0].name}</span> <br />
                        <span>Age : {this.state.employees[0].age} yrs</span> <br />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <span>NAME : {this.state.employees[1].name}</span> <br />
                        <span>Age : {this.state.employees[1].age} yrs</span> <br />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Employee;
