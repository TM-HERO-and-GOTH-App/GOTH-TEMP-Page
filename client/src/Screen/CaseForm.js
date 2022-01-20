import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from 'axios';


function CaseForm() {
    const [validated, setValidated] = useState(false);
    const [loggerPhone, setLoggerPhone] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [customerUsername, setCustomerUsername] = useState('');
    const [customerAccountNumber, setCustomerAccountNumber] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [issue, setIssue] = useState('');
    const [loggerName, setLoggerName] = useState('');


    const handleSubmit = () => {
        Axios.post("http://localhost:3002/api/insert",{
            loggerName: loggerName,
            loggerPhone: loggerPhone,
            customerName: customerName,
            customerUsername: customerUsername,
            customerAccountNumber: customerAccountNumber,
            customerPhone: customerPhone,
            issue: issue,
        }).then(() => {
            alert("success insert");
        });
    };

    return (
        <div className="App">
            <h1> Case Submit </h1>

            <div className="form">
                <label>loggerName</label>
                <input
                    type="text"
                    name="loggerName"
                    onChange={(e) => {
                        setLoggerName(e.target.value);
                    }}
                />
                <label>Customer Acc. Number</label>
                <input
                    type="text"
                    name="customerAccountNumber"
                    onChange={(e) => {
                        setCustomerAccountNumber(e.target.value);
                    }}
                />
                <label>Logger Phone Number</label>
                <input
                    type="text"
                    name="loggerPhone"
                    onChange={(e) => {
                        setLoggerPhone(e.target.value);
                    }}
                />
                <label>Customer Name</label>
                <input
                    type="text"
                    name="customerName"
                    onChange={(e) => {
                        setCustomerName(e.target.value);
                    }}
                />
                <label>Customer Phone Number</label>
                <input
                    type="text"
                    name="customerPhone"
                    onChange={(e) => {
                        setCustomerPhone(e.target.value);
                    }}
                />
                <label>Issue</label>
                <input
                    type="text"
                    name="issue"
                    onChange={(e) => {
                        setIssue(e.target.value);
                    }}
                />
                <label>Customer Username</label>
                <input
                    type="text"
                    name="customerUsername"
                    onChange={(e) => {
                        setCustomerUsername(e.target.value);
                    }}
                />

                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>

    )
}

export default CaseForm;