var db = require('../dbconnection');
var order_details = {
    getAllOrderDetails: function (callback) 
    {
        return db.query('select o2.*,p2.*,od2.* from order_bill_table o2,product_table p2,order_detalis_table od2 where o2.order_id=od2.fk_order_id  and  p2.pro_id=od2.fk_pro_id ', callback);
    },
    deleteOrderDetails: function (od_id, callback) 
    {
        return db.query('delete from order_detalis_table where od_id=?', [od_id], callback);
    },
    insertOrderDetail: function (item, callback) 
    {
        const arr1 = [];
        console.log('inside model delivery detAILS');
        console.log(item);
        for (let j = 0; j < item.cartItems.length; j++) {
            //var od = null;
            var fk_order_id = item.fk_order_id;
            var fk_pro_id = item.cartItems[j].Product.pro_id;
            var price = item.cartItems[j].Product.pro_price;
            var qty = item.cartItems[j].Quantuty;
            arr1.push([fk_order_id, fk_pro_id, price, qty]);
        }
        console.log(arr1);

        return db.query("insert into `order_detalis_table` (`fk_order_id`,`fk_pro_id`,`price`,`qty`) values ?",[arr1], callback);
    },
    
};
module.exports = order_details;