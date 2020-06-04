var db=require('../dbconnection');
var catdet={
    getallcatdetails:function(callback)
    {
        return db.query("Select c.*,p1.*,u.* from cart_details_table c,product_table p1,admin u where  c.fk_u_EmailId=u.u_EmailId  and c.fk_pro_id=p1.pro_id",callback);
    },

    deleteCartdetails:function(cart_detail_id,callback)
    {
        return db.query('delete from cart_details_table where cart_detail_id=?',[cart_detail_id],callback);
    },
    updatecartdetails:function(cart_detail_id,callback)
    {
        return db.query("update cart_details_table set qty=?,total=? where cart_detail_id=?",[item.qty,item.total,cart_detail_id],callback);
    }
}
module.exports=catdet;
