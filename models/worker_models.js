var db=require('../dbconnection');
var worker={
    login:function (item,callback)
    {
        return db.query("select * from worker_tbl where email_id=? and password=?",[item.email_id,item.password],callback);
    },
    getAllWorker:function(callback)
    {
        return db.query('select * from worker_tbl',callback);
    },
    getPasswordById(worker_id,callback)
    {
        return db.query('select password from worker_tbl where worker_id=?',[worker_id],callback);
    },
    getWorkerWithAssignedCount(callback)
    {
        return db.query('select w.worker_id, w.worker_name,count(v.vehicle_assigned_id) as vehiclecount from worker_tbl as w left join vehicle_assigned_tbl as v on v.fk_worker_id = w.worker_id group by w.worker_id, w.worker_name',callback);
    },
    getWorkerById:function(worker_id,callback)
    {
        return db.query('select * from worker_tbl where worker_id=?',[worker_id],callback);      
    },
    getAssignedWorker(fk_worker_id,callback)
    {
        return db.query('select s.*,w.worker_id,v.status,v.remark,u.user_name,v.vehicle_assigned_id from vehicle_assigned_tbl v join worker_tbl w on v.fk_worker_id = w.worker_id join service_tbl s on s.service_id = v.fk_service_id join user_tbl u on u.user_id = s.fk_user_id where  v.fk_worker_id=1',[fk_worker_id],callback);
    },  
    AddWorker:function(item,callback)
    {
        return db.query('insert into worker_tbl (worker_name,email_id, password,mobile_no,address,joining_date) values(?,?,?,?,?,?)',[item.worker_name,item.email_id,item.password,item.mobile_no,item.address,item.joining_date],callback);
    },
    updateWorker:function(worker_id,item,callback)
    {
        
        return db.query('update worker_tbl set worker_name=?, email_id=?, password=?, mobile_no=?,address=?, joining_date=?, worker_image=? where worker_id=?',[item.worker_name,item.email_id,item.password,item.mobile_no,item.address,item.joining_date,item.worker_image,worker_id],callback);
    },
    deleteWorker:function(worker_id,callback)
    {
        return db.query('delete from worker_tbl where worker_id=?',[worker_id],callback);
    },
    deleteAllWorkerByid:function(workerIdArr,callback)
    {
        return db.query("delete from worker_tbl where worker_id in (?)",[item],callback);
    },
    getWorkerPhotoByid:function(worker_id,callback)
    {
        return db.query('select worker_image from worker_tbl where worker_id=?',[worker_id],callback);
    },
    updateWorkerPhoto: function (worker_id,filename, callback)
    {
        return db.query('update worker_tbl set worker_image=? where worker_id=?', [filename,worker_id], callback);
    },
    getWorkerImage(worker_id,callback)
    {
        return db.query('select worker_image from worker_tbl where worker_id=?',[worker_id],callback);
    },
    deleteWorker:function(worker_id,callback)
    {
        return db.query('delete from worker_tbl where worker_id=?',[worker_id],callback);
    }
}
module.exports=worker;