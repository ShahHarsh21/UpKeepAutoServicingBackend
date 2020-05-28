var db = require('../dbconnection');
var dash = {
    // getAllCustomer: function (callback) {

    //     return db.query('SELECT  COUNT(IF(u_Type="customer",1,null)) as simpleCustomer,COUNT(IF(u_Type = "member", 1, null)) as memberCount FROM admin', callback);
    // },
    // // MemeberCustomer: function (callback) {
    //     return db.query('SELECT count(*) from admin where u_type="member"', callback);
    // },

    // ordersCust: function (item, callback) {
    //     console.log('update data model');
    //     return db.query('SELECT MONTH(bill_date) MONTH, COUNT(*) COUNT FROM order_bill_table WHERE YEAR(bill_date)=? GROUP BY MONTH(bill_date)', [item], callback);
    // },
    trackStatus: function (callback) {
        console.log('update data model');
        return db.query('SELECT COUNT(IF(status="Done",1,null)) as Done ,COUNT(IF(status="Assigned",1,null)) as Assigned, COUNT(IF(status="In_process",1,null))as In_process from vehicle_assigned_tbl',callback);

    },
}

module.exports = dash;