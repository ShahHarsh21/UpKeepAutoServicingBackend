var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var workerDetailsRouter=require('./routes/worker_details_routs');
var loginRouter=require('./routes/login_routes');
var WorkerLoginRouter = require('./routes/worker_login_routs');
var signupRouter=require('./routes/signup_routes');
var productRouter = require('./routes/product_routes');
var categoryRouter = require('./routes/category_routes');
var stockRouter = require('./routes/stock_routes');
var cartRouter = require('./routes/cart_routes');
var supplierRouter =  require('./routes/supplier_routes');
var userRouter=require('./routes/user_routes');
var order_detailsRouter= require('./routes/order_details_routes');
var emailRouter = require('./routes/email_routes');
var product_imagRouter=require('./routes/product_img_routs');
var vehicle_assignedRouter=require('./routes/vehicle_assigned_routes');
var vehicle_not_assignedRouter=require('./routes/vehicle_not_assigned_routes');

var serviceRouter=require('./routes/service_routs');
var assignedWorker = require('./routes/woker_asssigned_routs');
var deleteallProRouter = require('./routes/deleteAllPro_routes');
var deleteallCatRouter =require('./routes/deleteAllCat_routes');
var deleteallUserRouter = require('./routes/deleteAllUser_routes');
var deleteallCartRouter = require('./routes/deleteAllCart_routes');
var deleteAllStockRouter = require('./routes/deleteAllStock_routes');
var deleteAllOrderDetailsRouter = require('./routes/deleteAllOrderDetails_routes');
var product_imagRouter=require('./routes/product_img_routs');
var workerRouter = require('./routes/worker_routes');
var workerAllRouter=require('./routes/workerRouts');
var worker_imgRouter = require('./routes/worker_image_routes');
var worker_updateRouter = require('./routes/worker_update_routs');
var deleteWorkerRoutes = require('./routes/deleteAllworker_routes');
var deleteAllServiceRouter=require('./routes/deleteAllService_routs');
var passwordChangeRouter = require('./routes/passwordChange_Routs');
var statusRemarkUpdateRouter = require('./routes/service_update_routs');
var app = express();

// npview engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login',loginRouter);
app.use('/workerLogin',WorkerLoginRouter);
app.use('/signup',signupRouter);
app.use('/cart',cartRouter);
app.use('/user',userRouter);
app.use('/product',productRouter);
app.use('/worker_All',workerAllRouter);
app.use('/workerDetails',workerDetailsRouter);
app.use('/order_details',order_detailsRouter);
app.use('/category',categoryRouter);
app.use('/email',emailRouter);
app.use('/stock',stockRouter);
app.use('/supplier',supplierRouter);
app.use('/deleteAllPro',deleteallProRouter);
app.use('/deleteAllCat',deleteallCatRouter);
app.use('/deleteAllUser',deleteallUserRouter);
app.use('/deleteAllCart',deleteallCartRouter);
app.use('/deleteAllStock',deleteAllStockRouter);
app.use('/deleteAllOrderDetails',deleteAllOrderDetailsRouter);
app.use('/Product_image',product_imagRouter);
app.use('/worker',workerRouter);
app.use('/worker_image',worker_imgRouter);
app.use('/AssignedWorker',assignedWorker);
app.use('/Vehicle_assigned',vehicle_assignedRouter);
app.use('/Vehicle_not_assigned',vehicle_not_assignedRouter);
app.use('/deleteWorker',deleteWorkerRoutes);
app.use('/service',serviceRouter);
app.use('/deleteService',deleteAllServiceRouter);
app.use('/worker_update',worker_updateRouter);
app.use('/passwordChange',passwordChangeRouter);
app.use('/statusRemark',statusRemarkUpdateRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;