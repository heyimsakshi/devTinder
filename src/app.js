console.log("start ")

console.log("Hi");
const express=require('express');
const app=express();
//If you have both middleware, the / will be aplicablr for /test as well so it will print hiii only

// app.use("/",(req,res)=>{
//     res.send("hiiii ")
// })
// app.use("/test",(req,res)=>{
// res.send("heloo heelo");
// })


//to fix the issues we can 
app.use("/", (req, res, next) => {
    if (req.path === "/test") {
        next(); // If the path is /test, move to the next middleware
    } else {
        res.send("hiiii ");
    }
});

app.use("/test", (req, res) => {
    res.send("heloo heelo");
});

app.listen("3000",()=>{
    console.log("listening at port 3000")
})