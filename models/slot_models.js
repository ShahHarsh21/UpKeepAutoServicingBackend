var db=require('../dbconnection');
var slot={
    getAllSlot:function(callback)
    {
        return db.query('select * from slot_tbl',callback);
    },
    getSlotById:function(slot_registered_id,callback)
    {
         return db.query('select * from slot_tbl where slot_registered_id=?',[slot_registered_id],callback);
    },
    AddSlot:function(item,callback)
    {
         return db.query('insert into slot_tbl values(?,?,?,?,?,?,?,?,?,?)',[item.slot_registered_id,item.vehicle_type,item.vehicle_model,item.service_type,item.time_period,item.pickup_time,item.pickup_address,item.requirment,item.drop_address,item.alloted_employee_id],callback);
    },
    deleteSlot:function(slot_registered_id,callback)
    {
        return db.query('delete from slot_tbl where slot_registered_id=?',[slot_registered_id],callback);
    },
    updateSlot:function(slot_registered_id,item,callback)
    {
        return db.query('update slot_tbl set vehicle_type=?,vehicle_model,service_type=?,time_period=?,pickup_time=?,pickup_address=?,requirment=?,drop_address=?,alloted_emp_id=? where slot_registered_id=?',[item.vehicle_type,item.vehicle_model,item.service_type,item.time_period,item.pickup_time,item.pickup_address,item.requirment,item.drop_address,item.alloted_employee_id,slot_registered_id],callback);
    }
}
module.exports=slot;