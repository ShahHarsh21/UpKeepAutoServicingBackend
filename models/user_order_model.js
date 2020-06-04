var db = require('../dbconnection');
var orders = {
    getAllOrder: function (callback) 
    {
        return db.query('select u.*,p.*,o1.*,od1.* from user_tbl u,product_tbl p,order_tbl o1,order_detalis_tbl od where u.email_id=o1.fk_user_email_id and p1.pro_id=od1.fk_pro_id and o1.order_id=od1.fk_order_id and o1.order_id=d1.fk_order_id', callback);
    },
    // getAllOrder:function(callback){
    //     return db.query('select a1.*,o1.*,od1.*,d1.* from admin a1,order_bill_table o1,order_detalis_table od1,deliver_detalis_table d1 where a1.u_EmailId=o1.fk_u_EmailId and o1.order_id=od1.fk_order_id and o1.order_id=d1.fk_order_id' ,callback);
    //     //return db.query('select * from order_bill_table',callback);
    // },
    deleteOrder: function (order_id, callback) 
    {
        return db.query('delete from order_bill_table where order_id=?', [order_id], callback);
    },
    getAllOrder: function (callback) 
    {
        return db.query('select * from order_bill_table', callback);
    },
    // getMultiplebyOrderId: function (order_id, callback) {
    //     return db.query('select d.*,t.*,p.pro_name,p.pro_img,o.*,od.*,d.fk_u_EmailId as DelID from tracking_table t,product_table p,deliver_detalis_table d,order_bill_table o,order_detalis_table od where o.order_id=od.fk_order_id and o.order_id=d.fk_order_id and p.pro_id=od.fk_pro_id and d.detail_id=t.fk_detail_id and o.order_id=?', [order_id], callback);
    // },
    getMultiplebyOrderId: function (order_id, callback) 
    {
        return db.query('select p.pro_name,p.pro_img,o.*,od.* from product_table p,order_bill_table o,order_detalis_table od where o.order_id=od.fk_order_id  and p.pro_id=od.fk_pro_id and o.order_id=?', [order_id], callback);
    },
    insertOrder: function (item, callback) 
    {
        console.log("inside model");
        console.log(item);
        return db.query('insert into `order_bill_table`  values (?,?,?,?,?,?)', [null, item.fk_u_EmailId, item.bill_date, item.order_amt, item.order_payment, item.order_spc_instruction], callback);
    },
    getMultiplebyOrderId: function (order_id, callback) 
    {
        return db.query('select d.*,t .*,p.pro_name,p.pro_img,o.*,od.*,d.fk_u_EmailId as DelID from tracking_table t,product_table p,deliver_detalis_table d,order_bill_table o,order_detalis_table od where o.order_id=od.fk_order_id and o.order_id=d.fk_order_id and p.pro_id=od.fk_pro_id and d.detail_id=t.fk_detail_id and o.order_id=?', [order_id], callback);
    },
    deleteAll: function (item, callback) 
    {
        return db.query("delete from category_table where cat_id in (?)", [item], callback);
    },
    getOrdernotAssigned: function (callback) 
    {
        // return db.query('SELECT o.* FROM order_bill_table o WHERE o.order_id NOT IN ( SELECT d.fk_order_id FROM deliver_detalis_table d )', callback);
        return db.query('SELECT a.u_Type,o.* FROM order_bill_table o ,admin a WHERE o.order_id NOT IN ( SELECT d.fk_order_id FROM deliver_detalis_table d ) and a.u_Type="customer" and a.u_EmailId=o.fk_u_EmailId', callback);
    },
    getMemberOrdernotAssigned: function (callback) 
    {
        return db.query('SELECT a.u_Type,o.* FROM order_tbl o ,admin a WHERE o.order_id NOT IN ( SELECT d.fk_order_id FROM deliver_detalis_table d ) and a.u_Type="member" and a.u_EmailId=o.fk_u_EmailId', callback);
    },
    getOrderAssigned: function (callback) 
    {
        return db.query('SELECT a.u_Name as DeliveryBoy_Name,o.*,d.detail_id,d.fk_u_EmailId as DeliveryBoyId,d.fk_order_id,d.date from admin a,deliver_detalis_table d,order_bill_table o where a.u_type="delivery_boy" and o.order_id=d.fk_order_id and a.u_EmailId=d.fk_u_EmailId', callback)
    },
    getPastOrder: function (fk_u_EmailId, callback) 
    {
        return db.query("select a.u_EmailId,p.pro_id,p.pro_name,p.pro_price,p.pro_img,o.*,od.* from admin a,product_table p,order_bill_table o,order_detalis_table od where a.u_EmailId=o.fk_u_EmailId and p.pro_id=od.fk_pro_id and o.order_id=od.fk_order_id and o.fk_u_EmailId=?", [fk_u_EmailId], callback);
    },
    getAddtoWish: function (fk_u_EmailId, callback) 
    {
        return db.query('select w*,p.* from wishlist_table w,product_table p where p.pro_id=w.fk_pro_id and fk_u_EmailId=?', [fk_u_EmailId], callback);
    }
};
module.exports = orders;