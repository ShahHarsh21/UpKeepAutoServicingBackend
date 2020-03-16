var db=require('../dbconnection');
var service={
    getAllService:function(callback)
    {
        return db.query('select * from service_tbl',callback);
    },
    getAllServiceWithAll(callback)
    {
        return db.query('select s.*,u.user_name,w.worker_name,v.* from service_tbl s,worker_tbl w,user_tbl u,vehicle_assigned_tbl v where s.service_id = v.fk_service_id and s.fk_user_id = u.user_id and w.worker_id = v.fk_worker_id',callback);
    },
    getServiceById:function(service_id,callback)
    {
        return db.query('select * from service_tbl where service_id=?',[service_id],callback);
    },
    getUserServiceByUserId(service_id,callback)
    {
        return db.query('select u.*,s.*,v.*,w.worker_name from user_tbl u,service_tbl s,vehicle_assigned_tbl v,worker_tbl w where s.fk_user_id=u.user_id and v.fk_worker_id=w.worker_id and s.service_id=v.fk_service_id and service_id=?',[service_id],callback);
    },
    AddService:function(item,callback)
    {
        return db.query('insert into service_tbl (vehicle_no,meter_reading,fuel_tank,remark,complaints) values(?,?,?,?,?)',[item.vehicle_no,item.meter_reading,item.fuel_tank,item.remark,item.complaints],callback);
    },
    updateService:function(service_id,item,callback)
    {
        console.log(service_id);   
        return db.query('update service_tbl set fk_user_id=?,vehicle_no=?,meter_reading=?,fuel_tank=?,remark=?,complaints=? where service_id=?',[item.fk_user_id,item.vehicle_no,item.meter_reading,item.fuel_tank,item.remark,item.complaints,service_id],callback);
    },
    updateStatusRemark(item,callback)
    {
        console.log(item);
        return db.query('UPDATE vehicle_assigned_tbl v,service_tbl s set v.status=?,v.remark=?,s.remark=? where v.fk_service_id=s.service_id and s.service_id=? and v.vehicle_assigned_id=?',[item.status,item.remark,item.remark,item.service_id,item.vehicle_assigned_id],callback);
    },
    deleteService:function(service_id,callback)
    {
        return db.query('delete from service_tbl where service_id=?',[service_id],callback);
    },
    deleteAllService:function(item,callback)
    {
        return db.query("delete from service_tbl where service_id in (?)",[item],callback);
    }
}
module.exports=service;