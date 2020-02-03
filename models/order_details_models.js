var db=require('../dbconnection');
var order_details={
    getAllOrder_Details:function(callback)
    {
        return db.query('select * from order_details',callback);
    },
    getOrder_DetailsById:function(order_details_id,callback)
    {
        return db.query('select * from order_details where order_details_id=?',[order_details_id],callback);
    },
     AddOrder_Details:function(item,callback)
     {
         return db.query('insert into order_details (order_details_id,fk_order_id,fk_product_id,quantity) values (?,?,?,?)',[item.order_details_id,item.fk_order_id,item.fk_product_id,item.quantity],callback);
    },
    deleteOrder_Details:function(order_details_id,callback)
    {
        return db.query('delete from order_details where order_details_id=?',[order_details_id],callback);
    },
    updateOrder_Deatils:function(order_details_id,item,callback)
    {
        return db.query('update order_details set fk_order_id=?,fk_product_id=?,quantity=? where order_details_id=?',[item.fk_order_id,item.fk_product_id,item.quantity,order_details_id],callback);
    }
}
module.exports=order_details;