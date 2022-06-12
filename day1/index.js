var express=require('express')

app=express()

app.get("/",(req,res)=>{
    res.send("Hello Express Js");
})

app.post("/home",(req,res)=>{
    res.send('Home Page')
})

app.put("/about",(req,res)=>{
    res.send('About Page')
})

app.delete("/contact",(req,res)=>{
    res.send('Contact Page')
})

//simple string  response

//res.send() ->denoted to body
//res.end()  ->response ending point
app.get("/one",(req,res)=>{
    res.send("This is simple string response!");
})

app.post("/two",(req,res)=>{
    res.end("This is simple string response")
})

//Response Status code
app.post("/three",(req,res)=>{
    res.status('401').end('unauthorized...');

})
app.post('/four',(req,res)=>{
    res.status("201").end('Created...');
})

//Response Json


var objArray=[
    {name:"Irfan", age:21},
    {name:"Atif Aslam", age:40},
    {name:"Sazia", age:30},
]
app.get('/five',(req,res)=>{
    res.json(objArray);
})

app.listen(4000,()=>{
    console.log(`Server Run Success ${4000}`)
})