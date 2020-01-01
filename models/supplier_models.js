var db=require('../dbconnection');
var supplier={
    getAllSupplier:function(callback)
    {
        return db.query('select * from supplier_tbl',callback);
    },
    getSupplierById:function(supplier_id,callback)
    {
         return db.query('select * from supplier_tbl where supplier_id=?',[supplier_id],callback);
    },
    AddSupplier:function(item,callback)
    {
         return db.query('insert into supplier_tbl values(?,?)',[item.supplier_id,item.fk_user_id],callback);
    },
    deleteSupplier:function(supplier_id,callback)
    {
        return db.query('delete from supplier_tbl where supplier_id=?',[supplier_id],callback);
    },
    updateSupplier:function(supplier_id,item,callback)
    {
        return db.query('update supplier_tbl set supplier_name=? where supplier_id=?',[item.supplier_name,supplier_id],callback);
    }
}
module.exports=supplier;