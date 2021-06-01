import { Button } from 'react-bootstrap';
import React from 'react';
import { useHistory } from "react-router-dom";

export default function WelcomePage() {

    const history = useHistory();

    function moveToForm() {
        history.push("/phase1");
    }

    return (
        <div className="vh-100" style={{backgroundColor:"#D6CFCB"}}>
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
                <h1 className="mb-4">Welcome to Register Wizard</h1>
                <Button style={{backgroundColor:"#706677"}} onClick={moveToForm}>Click to Register</Button>
            </div>
        </div>
    )
}
