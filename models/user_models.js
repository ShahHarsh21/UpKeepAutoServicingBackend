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
    getUserById:function(user_id,callback)
    {
        console.log(user_id);
         return db.query('select * from user_tbl where user_id=?',[user_id],callback);
    },
    AddUser:function(item,callback)
    {
        console.log(item);
         return db.query('insert into user_tbl (email_id, password,user_name,mobile_no,address,date_of_birth,user_type) values(?,?,?,?,?,?,?)',[item.email_id,item.password,item.user_name,item.mobile_no,item.address,item.date_of_birth,item.user_type],callback);
    },
    deleteUser:function(user_id,callback)
    {
        return db.query('delete from user_tbl where user_id=?',[user_id],callback);
    },
    updateUser:function(user_id,item,callback)
    {
        return db.query('update user_tbl set email_id=?, password=?, user_name=?, mobile_no=?, address=?, date_of_birth=?, user_type=? where user_id=?',[item.email_id,item.password,item.user_name,item.mobile_no,item.address,item.date_of_birth,item.user_type,user_id],callback);
    }
}

module.exports=user;