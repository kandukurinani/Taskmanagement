var express=require('express');
var bodyParser=require('body-parser')
var userRouter = require('./Taskmanagement/router');
var app=express();
app.use(bodyParser.json());
app.use('/Taskmanagement', userRouter);


app.listen(2222,()=>{
    console.log("server running");
})