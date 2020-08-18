var db = require('../dbconnection');
var dash = {
    getRatioByWorkerId: function (fk_worker_id,callback) 
    {

        return db.query('SELECT  COUNT(IF(status="Assigned",1,null)) as Assigned ,COUNT(IF(status = "Done", 1, null)) as Done FROM vehicle_assigned_tbl where fk_worker_id=?' ,[fk_worker_id], callback);
    },
    ordersCust: function (order_date, callback)
    {    console.log(order_date)
        return db.query('SELECT MONTH(order_date),YEAR(order_date),count(*) from order_tbl where YEAR(order_date) =? group by MONTH(order_date)', [order_date], callback);    
    },
    trackStatus: function (callback) 
    {
        return db.query('SELECT COUNT(IF(status="Done",1,null)) as Done ,COUNT(IF(status="Assigned",1,null)) as Assigned, COUNT(IF(status="In_process",1,null))as In_process from vehicle_assigned_tbl',callback);
    },
}

module.exports = dash;