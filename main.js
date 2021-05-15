const express=require('express');

const port=3030;
const app=express();

app.get("/",(req,res)=>{
    res.json({status:"success"});
});

app.listen((port|| process.env.PORT),()=>{
    console.log("app is now active");
})