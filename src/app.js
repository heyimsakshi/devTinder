console.log("start ")

console.log("Hi");
const express=require('express');
const app=express();

//-----------------------------------------------------------------------------------------
//If you have both middleware, the / will be aplicablr for /test as well so it will print hiii only

// app.use("/",(req,res)=>{
//     res.send("hiiii ")
// })
// app.use("/test",(req,res)=>{
// res.send("heloo heelo");
// })

//-------------------------------------------------------------------------------------
//to fix the issues we can 
// app.use("/", (req, res, next) => {
//     if (req.path === "/test") {
//         next(); // If the path is /test, move to the next middleware
//     } else {
//         res.send("hiiii ");
//     }
// });
//---------------------------------------------------------------------------------------
//if we use app.use() either we use http method like get or post we gwt "hello hello" printed in both cases.
// app.use("/test", (req, res) => {
//     res.send("heloo heelo");
// });
//----------------------------------------------------------------------------------------

// if before get post and delete if we use app.use("/user") then all those get,post and delete will be handled by app.use("/user")

// app.use("/user",(req,res)=>{
// res.send("hahahah")
// })
// this will only handle get calls 
// app.get("/user",(req,res)=>{
//     res.send({firstName:"sakshi"})
// })
// app.post("/user",(req,res)=>{
//     res.send("data saved succesfully")
// })
// app.delete("/user",(req,res)=>{
//     res.send("data delete succesfully")
// })
//---------------------------------------------------------------------------------------------

// req like /user/1, /user/hello all will be handled
// app.get("/user",(req,res)=>{
//         res.send({firstName:"sakshi"})
//     })
//-------------------------------------------------------------------------------------------------
  //it is denoted that b is optional and if we do /abc or /ac it will work 
    // app.get("/ab?c",(req,res)=>{
    //     res.send({firstName:"sakshi"})
    //  })
//----------------------------------------------------------------------------------------
//if we do /abbbbbbbbbbc then also it we work
// app.get("/ab+c",(req,res)=>{
//     res.send({firstName:"sakshi"})
//  })

//---------------------------------------------------------------------------------------
// we can replace * with any string
// app.get("/ab*cd",(req,res)=>{
//     res.send({firstName:"sakshi"})
//  })

//---------------------------------------------------------------------------------------
//here bc is optional
// app.get("/a(bc)?c",(req,res)=>{
//     res.send({firstName:"sakshi"})
//  })

//------------------------------------------------------------------------------
//here abcbcbcbcc thta is bc can be repeated multiple times
// app.get("/a(bc)+c",(req,res)=>{
//     res.send({firstName:"sakshi"})
//  })
//--------------------------------------------------------------------------------------
//if in the path if a letter is there it will work like /cab
// app.get("/a/",(req,res)=>{
//     res.send({firstName:"sakshi"})
//  })
//---------------------------------------------------------------------------------------
// can start from anything but should end with fly
// app.get(/.*fly$/,(req,res)=>{
//     res.send({firstName:"sakshi"})
//  })
//------------------------------------------------------------------
//to get query params in route handler and we can add multiple query params using ampersand like userId="123" &password="3345"
// app.get("/user",(req,res)=>{ 
//     console.log(req.query);
//     res.send({firstName:"sakshi"})
//  })
//----------------------------------------------------------------------------------------

///user/u  serid how to get userid in router handler
// app.get("/user/:userId",(req,res)=>{
//   console.log(req.params) ; 
//   res.send({firstName:"sakshi"})
//  })


app.listen("3000",()=>{
    console.log("listening at port 3000")
})