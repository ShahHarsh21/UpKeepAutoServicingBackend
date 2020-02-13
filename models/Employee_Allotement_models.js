var db=require('../dbconnection');
var allotment={
    getAllAllotment:function(callback)
    {
        return db.query('select * from Employee_allotment_tbl',callback);
    },
    AddEmpAllot:function(item,callback)
    {
        console.log(item.fk_slot_id);
        console.log(item.fk_employee_id)
        return db.query('INSERT INTO `employee_allotment_tbl`(`fk_slot_id`, `fk_employee_id`) VALUES (?,?)',[item.fk_slot_id,item.fk_employee_id],callback);
    },
    addAllotedEmpId:function(item)
    {
        return db.query('update slot_tbl set fk_emp_allot_id=? where slot_register_id=?',[item.fk_emp_allot_id,item.slot_register_id]);
    }
}
module.exports=allotment;