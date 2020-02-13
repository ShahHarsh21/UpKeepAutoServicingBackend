var db=require('../dbconnection');
var allotment={
    getAllAllotment:function(callback)
    {
        return db.query('select * from Employee_allotment_tbl',callback);
    },
    AddEmpAllot:function(fk_slot_id,fk_employee_id,callback)
    {
        console.log("quaery");
        return db.query('insert into employee_allotment_tbl (fk_slot_id,fk_employee_id) values (?,?)',[fk_slot_id,fk_employee_id],callback);
    }
    
}
module.exports=allotment;