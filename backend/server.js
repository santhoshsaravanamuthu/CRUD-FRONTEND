const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud"
})

app.get("/",(req,res)=>{
    const sql = "SELECT * FROM student";
    db.query(sql,(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.post("/create",(req,res)=>{
    const sql = "INSERT INTO student (`name`,`course`,`dept`,`email`,`phoneno`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.course,
        req.body.dept,
        req.body.email,
        req.body.phoneno
    ]
    db.query(sql,[values],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.put("/update/:id",(req,res)=>{
    const sql = "update student set `name`=?,`course`=? ,`dept`=?, `email`=? ,`phoneno`=? Where id=? ";
    const values = [
        req.body.name,
        req.body.course,
        req.body.dept,
        req.body.email,
        req.body.phoneno
    ]
    const id = req.params.id;
    db.query(sql,[...values,id],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})
app.delete("/student/:id",(req,res)=>{
    const sql = "DELETE FROM student Where id=? ";
    const id = req.params.id;
    db.query(sql,[id],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})
app.listen(8080, () => {
    console.log("Lisenting");
})