const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../client/public', 'index.html')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "1234",
    database: "case",
});

app.get('/api/getLoggerPool', (req, res) => {
    db.query("SELECT * FROM save_case_test;", (err, results, fields) => {
        if(err) throw err;
        res.send(results);
    });
})

app.post("/api/insert", (req, res) => {
    const loggerName = req.body.loggerName
    const loggerPhone = req.body.loggerPhone
    const customerName = req.body.customerName
    const customerUsername = req.body.customerUsername
    const customerAccountNumber = req.body.customerAccountNumber
    const customerPhone = req.body.customerPhone
    const issue = req.body.issue
    const sqlInsert = "INSERT INTO save_case_test(loggerName, loggerPhone, customerName, customerUsername, customerAccountNumber, customerPhone, issue, status, remark) VALUES(?,?,?,?,?,?,?,'open', null)"
    db.query(sqlInsert, [loggerName, loggerPhone, customerName, customerUsername, customerAccountNumber, customerPhone, issue], (err, result) => {
        console.log(result);
    });
});

app.listen(3002, () => {
    console.log("Running on port 3002")
});
