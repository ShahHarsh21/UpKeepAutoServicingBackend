var db=require('../dbconnection');
var color={
    getAllColor:function(callback)
    {
        return db.query('select * from color_tbl',callback);
    },
    getColorById:function(color_id,callback)
    {
         return db.query('select * from color_tbl where color_id=?',[color_id],callback);
    },
    AddColor:function(item,callback)
    {
         return db.query('insert into color_tbl values(?,?)',[item.color_id,item.color_name],callback);
    },
    deleteColor:function(color_id,callback)
    {
        return db.query('delete from color_tbl where color_id=?',[color_id],callback);
    },
    // deleteAllColor:function(color_id,callback)
    // {
    //     return db.query('delete from color_tbl where color_id=?',[color_id],callback);
    // },
    updateColor:function(color_id,item,callback)
    {
        return db.query('update color_tbl set color_name=? where color_id=?',[item.color_name,color_id],callback);
    }
}
module.exports=color;