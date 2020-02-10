var db=require('../dbconnection');
var img={
    updatePhoto: function (product_id,filename, callback) 
    {
        return db.query('update product_tbl set product_image=? where product_id=?', [filename,product_id], callback);
    }
    
}
module.exports=img;