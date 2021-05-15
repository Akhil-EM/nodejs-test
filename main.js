const express=require('express');

const port=process.env.PORT || 3030;
const app=express();

app.get("/",(req,res)=>{
    res.json({status:"success"});
});

app.listen((port),()=>{
    console.log("app is now active");
})