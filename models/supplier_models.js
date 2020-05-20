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
    getSupplierByIdWithAllDetails(supplier_id,callback)
    {
        return db.query('select s.*,p.*,st.*,c.* from stock_tbl st,supplier_tbl s,product_tbl p,category_tbl c where s.fk_product_id = p.product_id and s.fk_stock_id = st.stock_id and c.category_id = p.fk_cat_id and s.supplier_id = ?',[supplier_id],callback);
    },
    AddSupplier:function(item,callback)
    {
        console.log(item);
        return db.query('insert into supplier_tbl (supplier_name,firm_name,firm_address,contact_no) values(?,?,?,?)',[item.supplier_name,item.firm_name,item.firm_address,item.contact_no],callback);
    },
    deleteSupplier:function(supplier_id,callback)
    {
        console.log(supplier_id);
        return db.query('delete from supplier_tbl where supplier_id=?',[supplier_id],callback);
    },
    deleteAllSupplier:function(item,callback)
    {
        return db.query("delete from supplier_tbl where supplier_id in (?)",[item],callback);
    },
    updateSupplier:function(supplier_id,item,callback)
    {
        console.log(supplier_id,item);
        return db.query('update supplier_tbl set supplier_name=?,firm_name=?,firm_address=?,contact_no=? where supplier_id = ?',[item.supplier_name,item.firm_name,item.firm_address,item.contact_no,supplier_id],callback);
    }
}
module.exports=supplier;