import logo from './logo.svg';
import './App.css';
import React from 'react';
import CaseForm from './Screen/CaseForm';
import CasePage from './Screen/CasePage';
import UpdateStatusRemark from "./component/UpdateStatusRemark";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ReactDOM from "react-dom";

function App() {
  return (
      // <CaseForm />
      <CasePage />
      // <UpdateStatusRemark />
    );
}

export default App;
