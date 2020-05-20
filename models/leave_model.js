var db=require('../dbconnection');
var leave={

    getAllLeave(callback)
    {
        return db.query('select * from leave_tbl',callback);
    },
    getAllLeaveByWorker(fk_worker_id,callback)
    {   
        return db.query('select w.worker_name,w.mobile_no,w.email_id,l.* from worker_tbl w,leave_tbl l WHERE w.worker_id = l.fk_worker_id and l.fk_worker_id = ?',[fk_worker_id],callback);
    },
    getLeaveById(leave_id,callback)
    {
        return db.query('select w.*,l.* from worker_tbl w,leave_tbl l WHERE l.leave_id = ? and w.worker_id = l.fk_worker_id',[leave_id],callback);
    },
    applyLeave(item,callback)
    {
        return db.query('insert into leave_tbl (worker_name,email_id,mobile_no,leaveStartDate,leaveEndDate,Leave_type,comment,fk_worker_id) values(?,?,?,?,?,?,?,?)',[item.worker_name,item.email_id,item.mobile_no,item.leaveStartDate,item.leaveEndDate,item.Leave_type,item.comment,item.fk_worker_id],callback);
    }
}
module.exports=leave;