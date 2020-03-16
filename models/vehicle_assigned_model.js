var db=require('../dbconnection');
var vehicle={
    getAllVehicles:function(callback)
    {
        return db.query('SELECT v.vehicle_assigned_id,v.status,v.remark,s.service_id,s.vehicle_no,w.worker_id,w.worker_name,w.worker_image FROM vehicle_assigned_tbl v join service_tbl s on s.service_id = v.fk_service_id join worker_tbl w on w.worker_id = v.fk_worker_id',callback);
    },
    getAllVehicleAssigned(callback)
    {
        return db.query('SELECT v.vehicle_assigned_id,v.status,v.remark,s.service_id,s.vehicle_no,w.worker_id,w.worker_name,w.worker_image FROM vehicle_assigned_tbl v join service_tbl s on s.service_id = v.fk_service_id join worker_tbl w on w.worker_id = v.fk_worker_id',callback);
    },
    getNotAssignedVehicles(callback) {
        return db.query('SELECT s.* FROM service_tbl s WHERE s.service_id NOT IN ( SELECT v.fk_service_id FROM vehicle_assigned_tbl v )',callback);
    },
    // getAllVehicleNames:function(callback)
    // {
    //     return db.query('SELECT * from vehicle_assigned_tbl',callback);
    // },
    getVehicleById:function(vehicle_assigned_id,callback)
    {
        return db.query('select * from vehicle_assigned_tbl where vehicle_assigned_id=?',[vehicle_assigned_id],callback);
    },
    getAssignedWorkerByVehicleId:function(vehicle_id,callback)
    {
        return db.query('select * from vehicle_assigned_tbl where fk_service_id=?',[vehicle_id],callback);
    },
    // getVehiclesByWorkerId(worker_id,callback) {
    //     return db.query('select * from vehicle_assigned_tbl where fk_worker_id=?',[worker_id],callback);
    // },
    AddVehicleAssigned:function(item,callback)
    {
        var arr1=[];
        if(item != null) {
            for (let i = 0; i < item.selectedVehicleArr.length; i++) {
                const Service_Id = item.selectedVehicleArr[i];
                const Worker_Id = item.selectedWorkerID;
                const Status = 'Assigned';
                const Remark = '';
                arr1.push([Service_Id,Worker_Id,Status,Remark]);
            }
           return db.query("insert into vehicle_assigned_tbl (fk_service_id,fk_worker_id,status,remark) values ?",[arr1],callback); 
        }
    },
    updateWorkerPhoto: function (worker_id,filename, callback) 
    {
        return db.query('update worker_tbl set worker_image=? where worker_id=?', [filename,worker_id], callback);
    },
    deleteVehicle_assigned:function(vehicle_assigned_id,callback)
    {
        console.log(vehicle_assigned_id);
        return db.query('delete from vehicle_assigned_tbl where vehicle_assigned_id=?',[vehicle_assigned_id],callback);
    },
    deleteAllVehicle_assigned:function(item,callback)
    {
        console.log(vehicle_assigned_id);
        return db.query("delete from vehicle_assigned_tbl where vehicle_assigned_id in (?)",[item],callback);
    }
}
module.exports=vehicle;