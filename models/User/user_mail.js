var db= require("../../dbconnection");
var email = require("emailjs/email");
var demo = {

   sendMail: function (demo, callback) 
   {
        var server = email.server.connect({
            user: 'upkeepautoservicing@gmail.com',
            password: 'Xyz@1234',
            host: "smtp.gmail.com",
            ssl: true,
            port: 465
        });
        server.send({
            text: demo.message,
            from: 'upkeepautoservicing@gmail.com',
            to: demo.To,
            subject: demo.subject
        }, callback);
    },
    getUserByEmailId:function(email_id,callback)
    {
        return db.query('select * from user_tbl where email_id=?',[email_id],callback);
    },

}
module.exports = demo;