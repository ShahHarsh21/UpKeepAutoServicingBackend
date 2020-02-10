var db=require('../dbconnection');
var product={
    getAllProduct:function(callback)
    {
        return db.query('select * from product_tbl',callback);
    },
    getProductById:function(product_id,callback)
    {
        return db.query('select * from product_tbl where product_id=?',[product_id],callback);
     },
    AddProduct:function(item,callback)
    {
        return db.query('insert into product_tbl (product_name,product_description,fk_cat_id,product_price,product_image,fk_color_id) values(?,?,?,?,?,?)',[item.product_name,item.product_description,item.fk_cat_id,item.product_price,item.product_image,item.fk_color_id],callback);
    },
    deleteProduct:function(product_id,callback)
    {
        return db.query('delete from product_tbl where product_id=?',[product_id],callback);
    },
    updateProduct:function(product_id,item,callback)
    {
        console.log(product_id);   
        return db.query('update product_tbl set product_name=?,product_description=?,fk_cat_id=?,product_price=?,product_image=?,fk_color_id=? where product_id=?',[item.product_name,item.product_description,item.fk_cat_id,item.product_price,item.product_image,item.fk_color_id,product_id],callback);
    }
}
module.exports=product;