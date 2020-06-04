var db=require('../../dbconnection');
var user={
    login:function (item,callback)
    {
        return db.query("select * from user_tbl where email_id=? and password=?",[item.email_id,item.password],callback);
    },
    getUserByEmailId:function(email_id,callback)
    {
        return db.query('select * from user_tbl where email_id=?',[email_id],callback);
    },
    
}

module.exports=user;