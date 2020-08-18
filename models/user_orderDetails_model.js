var db = require('../dbconnection');
var order_details = {
    getAllOrderDetails: function (callback) 
    {
        return db.query('select o2.*,p2.*,od2.* from order_bill_table o2,product_table p2,order_detalis_table od2 where o2.order_id=od2.fk_order_id  and  p2.pro_id=od2.fk_pro_id ', callback);
    },
    getOrderDetailsById(order_id,callback)
    {
        return db.query('select u.*,p.*,o.*,od.*,s.* from user_tbl u,service_tbl s,product_tbl p,order_tbl o,order_details_tbl od where u.email_id = o.fk_user_email_id and p.product_id = o.fk_product_id and s.fk_user_id = o.fk_user_email_id and o.order_id = od.fk_order_id and o.order_id = ?',[order_id],callback)
    },
    deleteOrderDetails: function (od_id, callback) 
    {
        return db.query('delete from order_detalis_table where od_id=?', [od_id], callback);
    },
    insertOrderDetail: function (item, callback) 
    {
        const arr1 = [];
        for (let j = 0; j < item.cartItems.length; j++) {
            //var od = null;
            var fk_order_id = item.fk_order_id;
            var fk_pro_id = item.cartItems[j].Product.pro_id;
            var price = item.cartItems[j].Product.pro_price;
            var qty = item.cartItems[j].Quantuty;
            arr1.push([fk_order_id, fk_pro_id, price, qty]);
        }

        return db.query("insert into `order_detalis_table` (`fk_order_id`,`fk_pro_id`,`price`,`qty`) values ?",[arr1], callback);
    },
    
};
module.exports = order_details;