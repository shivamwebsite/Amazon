require("dotenv").config();
const express = require("express");
const app=express();
const mongoose = require("mongoose");
require("./db/conn");
const cookieParser = require("cookie-parser");


const products = require("./models/productsSchema");
const DefaultData = require("./defaultdata");
const cors = require("cors");
const router = require("./routes/router");

app.use(express.json());
app.use(cookieParser(""));
app.use(cors());
app.use(router);

const path=require("path");

const port=process.env.PORT || 8005;


const _dirname=path.resolve();

// for deployment
// if(process.env.NODE_ENV === "production"){
//     app.use(express.static("client/build"))
// }

// app.use(express.static(path.join(_dirname,"/client/build")));
// app.get('*',(req,res)=>{
//     res.sendFile(path.resolve(_dirname,"client","build","index.html"));
// });

app.listen(port,()=>{
    console.log(`server is running on port number ${port}`);
});

DefaultData();
