const express=require("express");
const router=express.Router();
const {createTask,updateTask,deleteTask}=require("../controllers/task");

router.post("/create",createTask)
router.post("/delete",deleteTask)
router.post("/update",updateTask)

module.exports=router;