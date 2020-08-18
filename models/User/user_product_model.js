var db=require('../../dbconnection');
var product={
    getAllProduct:function(callback)
    {
        return db.query('select * from product_tbl',callback);
    },
    getProductById:function(product_id,callback)
    {
        return db.query('select * from product_tbl where product_id=?',[product_id],callback);
     },
     getAllProductByCategoryId:function(fk_cate_id,callback)
     {  
         (fk_cate_id);
        return db.query('select * from product_tbl where fk_cat_id = ?',[fk_cate_id],callback);
     },
}
module.exports=product;