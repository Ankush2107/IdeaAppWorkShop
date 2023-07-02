const express = require('express');
const { listen } = require('express/lib/application');


const app = express();


app.listen(3333, ()=> {
    console.log("server started");
})