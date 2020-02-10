var db=require('../dbconnection');
var cart={
    getAllCart:function(callback)
    {
        return db.query('select * from cart_tbl',callback);
    },
    getCartById:function(cart_id,callback)
    {
        return db.query('select * from cart_tbl where cart_id=?',[cart_id],callback);
    },
    AddCart:function(item,callback)
    {
         return db.query('insert into cart_tbl  (cart_id,fk_user_id,fk_product_id,quantity) values (?,?,?,?)',[item.cart_id,item.fk_user_id,item.fk_product_id,item.quantity],callback);
    },
    deleteCart:function(cart_id,callback)
    {
        return db.query('delete from cart_tbl where cart_id=?',[cart_id],callback);
    },
    updateCart:function(cart_id,item,callback)
    {
        return db.query('update cart_tbl set fk_user_id=?,fk_product_id=?,quantity=? where cart_id=?',[item.fk_user_id,item.fk_product_id,item.quantity,cart_id],callback);
    }
}
module.exports=cart;