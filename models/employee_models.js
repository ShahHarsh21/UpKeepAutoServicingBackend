var db=require('../dbconnection');
var employee={
    getAllEmployee:function(callback)
    {
        return db.query('select * from employee_tbl',callback);
    },
    getEmployeeById:function(employee_id,callback)
    {
         return db.query('select * from employee_tbl where employee_id=?',[employee_id],callback);
    },
    AddEmployee:function(item,callback)
    {
         return db.query('insert into employee_tbl values(?,?,?,?,?,?)',[item.employee_id,item.employee_img,item.employee_designation,item.salary,item.employee_type,item.fk_user_id],callback);
    },
    deleteEmployee:function(employee_id,callback)
    {
        return db.query('delete from employee_tbl where employee_id=?',[employee_id],callback);
    },
    updateemployee:function(employee_id,item,callback)
    {
        return db.query('update employee_tbl set employee_img=?,employee_designation=?,salary=?,employee_type=?,fk_user_id=? where employee_id=?',[item.employee_img,item.employee_designation,item.salary,item.employee_type,item.fk_user_id,employee_id],callback);
    }
}
module.exports=employee;