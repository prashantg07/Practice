import React from "react";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
import { useState } from "react";

let ContactApp = () => {
    
    let [state, setState] = useState({
        selectedContact : {}
    });

    let { selectedContact } = state;  //Destructuring

    let receiveContact = (contact) => {
        setState((state) => ({
            selectedContact : contact
        }));
    };

    return(
        <React.Fragment>
            {/* <pre>{JSON.stringify(selectedContact)}</pre> */}
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success">Contact App</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque voluptas, facilis quos ipsa laborum consequatur quas facere quidem ullam doloremque ad minima iure impedit eum cumque blanditiis numquam hic!</p>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-9">
                        <ContactList sendContact={receiveContact}/>
                    </div>
                    <div className="col-md-3">
                        <ContactCard selectedContact={selectedContact}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ContactApp;