var db=require('../dbconnection');
var user={
    login:function (item,callback)
    {
        return db.query("select * from user_tbl where email_id=? and password=?",[item.email_id,item.password],callback);
    },
    getAllUser:function(callback)
    {
        return db.query('select * from user_tbl',callback);
    },
    getUserWithService(user_id,callback)
    {
        return db.query('select s.vehicle_no,u.*,v.status from user_tbl u,service_tbl s,vehicle_assigned_tbl v where u.user_id=s.fk_user_id and s.service_id = v.fk_service_id and u.user_id = ?',[user_id],callback);
    },
    getUserById:function(user_id,callback)
    {
        return db.query('select * from user_tbl where user_id=?',[user_id],callback);
    },
    
    AddUser:function(item,callback)
    {
        return db.query('insert into user_tbl (email_id, password,user_name,mobile_no,address,date_of_birth) values(?,?,?,?,?,?)',[item.email_id,item.password,item.user_name,item.mobile_no,item.address,item.date_of_birth],callback);
    },
    deleteUser:function(user_id,callback)
    {
        return db.query('delete from user_tbl where user_id=?',[user_id],callback);
    },
    deleteAlluser:function(item,callback)
    {
        return db.query("delete from user_tbl where user_id in (?)",[item],callback);
    },
    updateUser:function(user_id,item,callback)
    {
        return db.query('update user_tbl set email_id=?, password=?, user_name=?, mobile_no=?, address=?, date_of_birth=? where user_id=?',[item.email_id,item.password,item.user_name,item.mobile_no,item.address,item.date_of_birth,user_id],callback);
    }

}

module.exports=user;