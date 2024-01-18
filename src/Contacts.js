import React from 'react';
import "./Contacts.css"
function Contacts(props) {
    return (
        <div id="body">
            <div id="formsContainer">
                <h2>Contact Us</h2>
                <div id="fullNameDiv">
                    <div>
                        <label className="formsLabel" style={{display:"block"}} htmlFor="name">Name</label>
                        <input name="name" className="name" placeholder="Name" type="text"/>
                    </div>
                    <div>
                        <label className="formsLabel" style={{display:"block"}} htmlFor="surname">Surname</label>
                        <input name="surname" className="name" placeholder="Surname" type="text"/>
                    </div>

                </div>

                <div style={{width:"100%"}}>
                    <label className="formsLabel" style={{alignSelf: "flex-start"}} htmlFor="email">Email</label>
                    <input name="email" id="email" placeholder="Email" type="text"/>
                </div>



            </div>
        </div>
    );
}

export default Contacts;