const express = require('express');
const dotenv = require('dotenv');
const { connect } = require('mongoose');
const connectDB = require('./dbfile/db');

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

//create get request
app.get('/',(req,res)=>{
    res.send('API is running');
})


const PORT = process.env.PORT || 8081

app.listen(PORT,console.log(`server started on PORT ${PORT} `));
