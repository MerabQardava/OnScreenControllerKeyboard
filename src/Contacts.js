import React, {useEffect, useRef, useState} from 'react';
import "./Contacts.css"

function Contacts(props) {


    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    function nameInputHandler(e) {
        setName(e.target.value)
    }

    function surnameInputHandler(e) {
        setSurname(e.target.value)
    }

    function emailInputHandler(e) {
        setEmail(e.target.value)
    }

    function messageInputHandler(e) {
        setMessage(e.target.value)
    }



    let active=name&&surname&&email&&message

    return (<div id="body">
        <div id="formsContainer">
            <h2>Contact Us</h2>
            <div id="fullNameDiv">
                <div>
                    <label className="formsLabel" style={{display: "block"}} htmlFor="name">Name</label>
                    <input onChange={nameInputHandler} name="name" className="name" placeholder="Name" type="text"/>
                </div>
                <div>
                    <label className="formsLabel" style={{display: "block"}} htmlFor="surname">Surname</label>
                    <input onChange={surnameInputHandler} name="surname" className="name" placeholder="Surname" type="text"/>
                </div>

            </div>

            <div style={{width: "100%"}}>
                <label className="formsLabel" style={{alignSelf: "flex-start"}} htmlFor="email">Email</label>
                <input onChange={emailInputHandler} name="email" id="email" placeholder="Email" type="text"/>
            </div>

            <div style={{width: "100%"}}>
                <label className="formsLabel" style={{alignSelf: "flex-start"}} htmlFor="email">Message</label>
                <textarea onChange={messageInputHandler} name="email" id="message" placeholder="Message"/>
            </div>

            <button disabled={!active} id="messageButton">Send Message</button>


        </div>
    </div>);
}

export default Contacts;