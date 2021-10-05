require('dotenv').config()
const express=require("express");
const cors=require("cors");
const authRouter=require("./routes/auth.js");
const taskRouter=require("./routes/task.js");
const app=express();


app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use("/auth",authRouter);
app.use("/task",taskRouter);

app.listen(5000,()=>{
    console.log("listening on port 5000");
})