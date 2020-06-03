var db=require('../dbconnection');
var stock={
    getAllStock:function(callback)
    {
        return db.query('select * from stock_tbl',callback);
    },
    getAllQuantity(callback)
    {
        return db.query('select s.*,p.* from stock_tbl s,product_tbl p where s.fk_product_id = p.product_id',callback);
    },
    getStockById:function(stock_id,callback)
    {
         return db.query('select s.*,p.product_id,p.product_name,p.product_price,c.category_name,sp.supplier_name from stock_tbl s,product_tbl p,category_tbl c,supplier_tbl sp where c.category_id = p.fk_cat_id and s.fk_product_id = p.product_id and sp.fk_stock_id = s.stock_id and  s.stock_id=?',[stock_id],callback);
    },
    getSupplier(stock_id,callback)
    {
        return db.query('select sp.supplier_id from stock_tbl s,supplier_tbl sp where s.fk_supplier_id = sp.supplier_id and s.stock_id = 1',[stock_id],callback);
    },
    AddStock:function(item,callback)
    {
         return db.query('insert into stock_tbl (quantity) values(?)',[item.quantity],callback);
    },
    deleteStock:function(stock_id,callback)
    {
        return db.query('delete from stock_tbl where stock_id=?',[stock_id],callback);
    },
    updateStock:function(stock_id,item,callback)
    {
        return db.query('update stock_tbl set quantity=? where stock_id=?',[item.quantity,stock_id],callback);
    },
    deleteAllStock:function(item,callback)
    {
            console.log(item);
            return db.query("delete from stock_tbl where stock_id in (?)",[item],callback);
    }
}
module.exports=stock;
