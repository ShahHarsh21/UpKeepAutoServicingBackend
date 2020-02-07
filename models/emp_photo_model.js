var db = require('../dbconnection'); //reference of dbconnection.js
var photo1 = {
    getAllPhoto: function (employee_id,callback) 
    {
        console.log('all data model');
        return db.query('select * from employee_tbl where employee_id=?',[employee_id], callback);            
    },
    getPhotoById: function (photo_id, callback) 
    {
        return db.query('select pro12.*,photo12.* from product_table pro12,product_photo_table photo12 where pro12.pro_id=photo12.fk_pro_id and photo12.photo_id=?',[photo_id], callback);            
    },
    deletePhoto: function (pro_id, callback) 
    {
        console.log('delete data model');
        return db.query('delete from product_photo_table where fk_pro_id=?', [pro_id], callback);
    },
    Photodelete: function (photo_id, callback) 
    {
        console.log('delete data model');
        return db.query('delete from product_photo_table where photo_id=?', [photo_id], callback);
    },
    updatePhoto: function (employee_id,filename, callback) 
    {
        console.log(filename);
        return db.query('update employee_tbl set employee_img=? where employee_id=?', [filename,employee_id], callback);
    },
    addPhoto: function (item,filename, callback) {
        return db.query('INSERT INTO product_photo_table (photo,fk_pro_id) VALUES (?,?)', [filename,item.fk_pro_id], callback);
    }
};
module.exports = photo1;