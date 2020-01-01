var db=require('../dbconnection');
var category={
    getAllCategory:function(callback)
    {
        return db.query('select * from category_tbl',callback);
    },
    getCategoryById:function(category_id,callback)
    {
        return db.query('select * from category_tbl where category_id=?',[category_id],callback);
    },
    //  AddUser:function(item,callback){
    //      return db.query('insert into user_tbl values(?,?,?,?,?,?)',[item.Registration_id,item.Name,item.Mobile_no,item.Address,item.Email_id,item.Alternate_no],callback);
    // },
    // deleteUser:function(Registration_id,callback){
    //     return db.query('delete from user_tbl where Registration_id=?',[Registration_id],callback);
    // },
    updateCategory:function(category_id,item,callback)
    {
        return db.query('update category_tbl set category_name=?,category_type=? where category_id=?',[item.category_name,item.category_type,category_id],callback);
    }
}
module.exports=category;