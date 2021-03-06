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

//Response Download

app.get('/live',(req,res)=>{
    res.download('./uploads/tt.png');
})

//Response Redirect


app.get('/bd',(req,res)=>{
  res.redirect('http://localhost:4000/in')
})

app.get('/in',(req,res)=>{
    res.end("This is India")
})


//Response Header

app.get('/six',(req,res)=>{

    res.append("name","Irfan")
    res.append("age","20")
    res.append("city","ctg")
    res.status(201).end("Created ...Hello world")
})
app.get('/seven',(req,res)=>{

    res.cookie("name","Irfan")
    res.cookie("age","20")
    res.cookie("city","ctg")
    res.end("Cookie Set Success !!")
})

app.get('/eight',(req,res)=>{

    res.clearCookie("name")
    res.clearCookie("age")

    res.end("Cookie Clear Success !!")
})


app.listen(4000,()=>{
    console.log(`Server Run Success ${4000}`)
})