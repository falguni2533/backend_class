const express = require ("express");
console. log(express);

const app = express();

app.get("/",()=>{

})
app.post("/users",(req,res)=>{
    res.send("hello");
})
app.listen(3000,() =>{
    console.log("server running")
})

console.log(app);
