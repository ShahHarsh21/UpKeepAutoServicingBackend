var db=require('../dbconnection');
var vehicle={
    getAllVehicle:function(callback)
    {
        return db.query('select * from vehicle_assigned_tbl',callback);
    },
    getVehicleById:function(vehicle_assigned_id,callback)
    {
        return db.query('select * from vehicle_assigned_tbl where vehicle_assigned_id=?',[vehicle_assigned_id],callback);
    },
    AddVehicle:function(item,callback)
    {
        return db.query('insert into vehicle_assigned_tbl (vehicle_assigned_id,fk_service_id,fk_worker_id,status,remark) values(?,?,?,?,?)',[item.vehicle_assigned_id,item.fk_service_id,item.fk_worker_id,item.status,item.remark],callback);
    },
    updateWorkerPhoto: function (worker_id,filename, callback) 
    {
        return db.query('update worker_tbl set worker_image=? where worker_id=?', [filename,worker_id], callback);
    },
    deleteAllWorkerByid:function(workerIdArr,callback)
    {
        return db.query("delete from worker_tbl where worker_id in (?)",[workerIdArr],callback);
    }
}
module.exports=vehicle;