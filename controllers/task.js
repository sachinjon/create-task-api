
const createTask=async(req,res)=>{
    const db=require('../utils/database');
    const connection = await db.connection();
    const {name,priority,complete,expiry}=req.body;
    try {
        var sqlInsertQuery = `insert into task (name,priority,complete,expiry) values (?,?,?,?)`;
        var details = await connection.query(sqlInsertQuery, [name,priority,complete,expiry]);
        res.json([{success:true,message:"Task created successfully"}]);
    } catch (error) {
        res.json([{success:false,message:error}]);
    }finally{
        await connection.release();
    }   
}
const deleteTask=async(req,res)=>{
    const db=require('../utils/database');
    const connection = await db.connection();
    const {id}=req.body;
    try {
        var sqlInsertQuery = `delete from task where id = ?`;
        var details = await connection.query(sqlInsertQuery, [id]);
        res.json([{success:true,message:"Task deleted successfully"}]);
    } catch (error) {
        res.json([{success:false,message:error}]);
    }finally{
        await connection.release();
    }   
}

const updateTask=async(req,res)=>{
    const db=require('../utils/database');
    const connection = await db.connection();
    const {name,priority,complete,expiry,id}=req.body;
    try {
        var sqlInsertQuery = `update task set name = ?, priority = ?, complete = ? where id = ?`;
        var details = await connection.query(sqlInsertQuery, [name,priority,complete,id]);
        res.json([{success:true,message:"Task updated successfully"}]);
    } catch (error) {
        res.json([{success:false,message:error}]);
    }finally{
        await connection.release();
    }   
}

module.exports={
    createTask,
    deleteTask,
    updateTask
}
