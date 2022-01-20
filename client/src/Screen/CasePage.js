import React, {useState, useEffect} from 'react';
import CaseForm from "./CaseForm";
import {Table} from "react-bootstrap";
import Axios from "axios";
import PopupUpdate from "../component/PopupUpdate";
import UpdateStatusRemark from "../component/UpdateStatusRemark";


function CasePage() {
    const [casesData, setCasesData] = useState([]);
    const [showUpdateStatusRemark, setUpdateStatusRemark] = useState(false);
    const [openPopupUpdate, setOpenPopupUpdate] = useState(false);

    useEffect(() => {
        Axios.get("http://localhost:3002/api/getLoggerPool").then((response) => {
            setCasesData(response.data)
        })
    })

    return (
        <>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Case Number</th>
                    <th>Date Report</th>
                    <th>Logger Name</th>
                    <th>Logger Phone Number</th>
                    <th>Customer Name</th>
                    <th>Customer Username / Service Number</th>
                    <th>Customer Acc Number</th>
                    <th>Customer Phone Number</th>
                    <th>Issue</th>
                    <th>Status</th>
                    <th>Remark</th>
                </tr>
                </thead>
                <tbody>
                {casesData.map((data, index) => {
                    return <tr onClick={() => alert(UpdateStatusRemark)}>
                        <td>{data.id}</td>
                        <td>{data.date_created}</td>
                        <td>{data.loggerName}</td>
                        <td>{data.loggerPhone}</td>
                        <td>{data.customerName}</td>
                        <td>{data.customerUsername}</td>
                        <td>{data.customerAccountNumber}</td>
                        <td>{data.customerPhone}</td>
                        <td>{data.issue}</td>
                        <td>{data.status}</td>
                        <td>{data.remark === null ? '-' : data.remark}</td>
                    </tr>
                })}
                </tbody>
            </Table>
            {/*<PopupUpdate*/}
            {/*    title = "Case Form"*/}
            {/*    openPopupUpdate={openPopupUpdate}*/}
            {/*    setOpenPopupUpdate={setOpenPopupUpdate}*/}
            {/*>*/}
            {/*    <UpdateStatusRemark />*/}
            {/*</PopupUpdate>*/}
        </>
    )
}

export default CasePage;
