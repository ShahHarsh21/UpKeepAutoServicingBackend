var db=require('../dbconnection');
var service={
    getAllService:function(callback)
    {
        return db.query('select * from service_tbl',callback);
    },
    getAllServiceWithAll(callback)
    {
        //change done by drashti
        return db.query('select s.*,u.user_name,w.worker_name,v.* from service_tbl s left join vehicle_assigned_tbl as v on v.fk_service_id = s.service_id left join worker_tbl as w on w.worker_id = v.fk_worker_id join user_tbl as u on  u.user_id = s.fk_user_id order by s.Arrival_date desc',callback);
    },
    getServiceById:function(service_id,callback)
    {
        return db.query('select * from service_tbl where service_id=?',[service_id],callback);
    },
    getUserServiceByUserId(service_id,callback)
    {
        //changes done by drashti for service view more page
        return db.query('select s.*,u.user_name,u.email_id,u.address,u.mobile_no,w.worker_name,v.* from service_tbl s left join vehicle_assigned_tbl as v on v.fk_service_id = s.service_id left join worker_tbl as w on w.worker_id = v.fk_worker_id join user_tbl as u on  u.user_id = s.fk_user_id where s.service_id=?',[service_id],callback);
    },
    AddService:function(item,callback)
    {
        var Arrival_date = new Date();
        var Estimated_date = new Date();
        Estimated_date.setDate(Arrival_date.getDate()+3);
        // var nowDate = new Date(); 
        // var date = nowDate.getFullYear()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getDate(); 
        // console.log(Estimated_date);
        return db.query('insert into service_tbl (fk_user_id,vehicle_no,meter_reading,fuel_tank,remark,complaints,Arrival_date,Estimated_date) values(?,?,?,?,?,?,?,?)',[item.fk_user_id,item.vehicle_no,item.meter_reading,item.fuel_tank,item.remark,item.complaints,Arrival_date,Estimated_date],callback);
    },
    updateService:function(service_id,item,callback)
    {
        console.log(service_id);   
        return db.query('update service_tbl set fk_user_id=?,vehicle_no=?,meter_reading=?,fuel_tank=?,remark=?,complaints=? where service_id=?',[item.fk_user_id,item.vehicle_no,item.meter_reading,item.fuel_tank,item.remark,item.complaints,service_id],callback);
    },
    updateStatusRemark(item,callback)
    {
        console.log(item);
        return db.query('update vehicle_assigned_tbl v,service_tbl s set v.status=?,v.remark=?,s.remark=? where v.fk_service_id=s.service_id and s.service_id=? and v.vehicle_assigned_id=?',[item.status,item.remark,item.remark,item.service_id,item.vehicle_assigned_id],callback);
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