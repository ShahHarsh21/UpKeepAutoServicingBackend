var db=require('../dbconnection');
var allotment={
    getAllAllotment:function(callback)
    {
        return db.query('select * from Employee_allotment_tbl',callback);
    },
    AddEmpAllot:function(item,callback)
    {
        return db.query('insert into Employee_allotment_tbl (fk_slot_id,fk_employee_id) values (?,?)',[item.fk_slot_id,item.fk_employee_id],callback);
    }
    
}
module.exports=allotment;