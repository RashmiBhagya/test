const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config()

//create get request
app.get('/',(req,res)=>{
    res.send('API is running');
})


const PORT = process.env.PORT || 8081

app.listen(PORT,console.log(`server started on PORT ${PORT} `));

