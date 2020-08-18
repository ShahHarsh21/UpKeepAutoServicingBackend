var db=require('../../dbconnection');
var category={
    getAllCategory:function(callback)
    {
        return db.query('select * from category_tbl',callback);
    },
    getCategoryById:function(category_id,callback)
    {
        (category_id)
        return db.query('select * from category_tbl where category_id=?',[category_id],callback);
    },
}
module.exports=category;