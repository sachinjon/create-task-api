
const signIn=async(req,res)=>{
    const db=require('../utils/database');
    const connection = await db.connection();
    const {username,password,confpassword}=req.body;
    try {
     var sqlQuery = `select username,password from user where username=? and password=?`;
        var details = await connection.query(sqlQuery, [username,password]);
        res.json([{success:true,isAuthenticated:true}]);
    } catch (error) {
        res.json([{success:false,message:error}]);
    }finally{
        await connection.release();
    }  
}

const signUp=async(req,res)=>{
     const db=require('../utils/database');
    const connection = await db.connection();
    const {username,password,confpassword}=req.body;
    try {
        var sqlInsertQuery = `insert into user (username,password,confpassword) values (?,?,?)`;
        var details = await connection.query(sqlInsertQuery, [username,password,confpassword]);
        res.json([{success:true,message:"Register successfully"}]);
    } catch (error) {
        res.json([{success:false,message:error}]);
    }finally{
        await connection.release();
    }  
}

module.exports={
    signIn,
    signUp
}