var db=require('../dbconnection');
var img={
    getAllImages(callback)
    {
        return db.query('select product_image from product_tbl',callback);
    },
    getImageById(product_id,callback)
    {
        return db.query('select product_image from product_tbl where product_id = ?',[product_id],callback);
    },
    updatePhoto: function (product_id,filename, callback) 
    {
        return db.query('update product_tbl set product_image=? where product_id=?', [filename,product_id], callback);
    } 
}
module.exports=img;