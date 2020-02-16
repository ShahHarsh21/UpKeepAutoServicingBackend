var db=require('../dbconnection');
var worker={
    /*login:function (item,callback)
    {
        return db.query("select * from user_tbl where email_id=? and password=?",[item.email_id,item.password],callback);
    },*/
    getAllWorker:function(callback)
    {
        return db.query('select * from worker_tbl',callback);
    },
    getWorkerById:function(worker_id,callback)
    {
        return db.query('select * from worker_tbl where worker_id=?',[worker_id],callback);
    },
    AddWorker:function(item,callback)
    {
        return db.query('insert into worker_tbl (worker_name,email_id, password,mobile_no,joining_date,worker_image) values(?,?,?,?,?,?)',[item.worker_name,item.email_id,item.password,item.mobile_no,item.joining_date,item.worker_image],callback);
    },
    deleteWorker:function(worker_id,callback)
    {
        return db.query('delete from worker_tbl where worker_id=?',[worker_id],callback);
    },
    updateWorker:function(worker_id,item,callback)
    {
        return db.query('update worker_tbl set worker_name=?, email_id=?, password=?, mobile_no=?, joining_date=?, worker_image=? where worker_id=?',[item.worker_name,item.email_id,item.password,item.mobile_no,item.joining_date,item.worker_image,worker_id],callback);
    },
    deleteAllWorker:function(item,callback)
    {
        return db.query("delete from worker_tbl where worker_id in (?)",[item],callback);
    },
    getWorkerPhotoByid:function(worker_id,callback)
    {
        return db.query('select worker_image from worker_tbl where worker_id=?',[worker_id],callback);
    },

    addWorkerPhoto: function (item,filename, callback) 
    {
        return db.query('insert into worker_tbl (worker_image) VALUES (?)', [filename,item.worker_image], callback);
    },
    updateWorkerPhoto: function (worker_id,filename, callback) 
    {
        return db.query('update worker_tbl set worker_image=? where worker_id=?', [filename,worker_id], callback);
    }
}
module.exports=worker;