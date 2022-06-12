var express=require('express')

app=express()

app.get("/",(req,res)=>{
    res.send("Hello Express Js");
})


app.listen(4000,()=>{
    console.log(`Server Run Success ${4000}`)
})