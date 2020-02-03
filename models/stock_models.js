var db=require('../dbconnection');
var stock={
    getAllStock:function(callback)
    {
        return db.query('select * from stock_tbl',callback);
    },
    getStockById:function(stock_id,callback)
    {
         return db.query('select * from stock_tbl where stock_id=?',[stock_id],callback);
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
    }
}
module.exports=stock;