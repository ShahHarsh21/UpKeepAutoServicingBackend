var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var loginRouter=require('./routes/login_routes');
var signupRouter=require('./routes/signup_routes');
var emailRouter = require('./routes/email_routes');
var passwordChangeRouter = require('./routes/passwordChange_Routs');

var userRouter=require('./routes/user_routes');
var user_Service_Router = require('./routes/userServiceRouts');
var deleteallUserRouter = require('./routes/deleteAllUser_routes');

var WorkerLoginRouter = require('./routes/worker_login_routs');
var workerDetailsRouter=require('./routes/worker_details_routs');
var workerRouter = require('./routes/worker_routes');
var workerAllRouter=require('./routes/workerRouts');
var worker_imgRouter = require('./routes/worker_image_routes');
var worker_passwordRouter = require('./routes/worker_password_routs');
var worker_updateRouter = require('./routes/worker_update_routs');
var deleteWorkerRoutes = require('./routes/deleteAllworker_routes');

var productRouter = require('./routes/product_routes');
var product_imagRouter=require('./routes/product_img_routs');
var productOtherRouter = require('./routes/product_other_routs');
var deleteallProRouter = require('./routes/deleteAllPro_routes');

var categoryRouter = require('./routes/category_routes');
var deleteallCatRouter =require('./routes/deleteAllCat_routes');

var stockRouter = require('./routes/stock_routes');
var deleteAllStockRouter = require('./routes/deleteAllStock_routes');

var cartRouter = require('./routes/cart_routes');
var deleteallCartRouter = require('./routes/deleteAllCart_routes');

var supplierRouter =  require('./routes/supplier_routes');
var order_detailsRouter= require('./routes/order_details_routes');
var deleteAllOrderDetailsRouter = require('./routes/deleteAllOrderDetails_routes');

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
var deleteALlServiceRouter=require('./routes/deleteAllService_routes');
var passwordChangeRouter = require('./routes/passwordChange_Routs');
var ServiceuserRouter = require('./routes/userServiceRouts');
var AllServiceRouter = require('./routes/All_service_routs');
var statusRemarkUpdateRouter = require('./routes/service_update_routs');
var deleteAllvehicle_AssignedRouter = require('./routes/vehicle_assigned_routes');
var vehicle_Router = require('./routes/vehicle_routs');
var deleteAllvehicle_AssignedRouter = require('./routes/deleteAllvehicle_Assigned_routes');
var stock_quantity_router = require('./routes/stock_quantity_routs');
var supplier_user_Router = require('./routes/supplier_user_routs');
var stock_supplier_router = require('./routes/supplier_stock_routs');
var deleteAllSupplier_router = require('./routes/deleteAllSupplier_router');
var supplier_product_Router = require('./routes/supplier_product_routs');

var leaveRouter = require('./routes/leave_routs');
var pastLEaveRouter = require('./routes/past_leaves_routs');

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
app.use('/signup',signupRouter);
app.use('/email',emailRouter);
app.use('/passwordChange',passwordChangeRouter);

app.use('/user',userRouter);
app.use('/user_Service',user_Service_Router);
app.use('/deleteAllUser',deleteallUserRouter);

app.use('/workerLogin',WorkerLoginRouter);
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
app.use('/deleteAllvehicle_Assigned',deleteAllvehicle_AssignedRouter);
app.use('/Product_image',product_imagRouter);
app.use('/productServices',productOtherRouter );

app.use('/worker',workerRouter);
app.use('/worker_image',worker_imgRouter);
app.use('/worker_password',worker_passwordRouter);
app.use('/deleteWorker',deleteWorkerRoutes);
app.use('/worker_update',worker_updateRouter);

app.use('/service',serviceRouter);
app.use('/deleteAllService',deleteALlServiceRouter);
app.use('/user_Service',ServiceuserRouter);


app.use('/AssignedWorker',assignedWorker);
app.use('/Vehicle_assigned',vehicle_assignedRouter);
app.use('/Vehicle_not_assigned',vehicle_not_assignedRouter);
app.use('/vehicleAssigned',vehicle_Router);
app.use('/AllService',AllServiceRouter);

app.use('/cart',cartRouter);
app.use('/deleteAllCart',deleteallCartRouter);

app.use('/product',productRouter);
app.use('/deleteAllPro',deleteallProRouter);
app.use('/Product_image',product_imagRouter);

app.use('/category',categoryRouter);
app.use('/deleteAllCat',deleteallCatRouter);

app.use('/stock',stockRouter);
app.use('/stockQuantity',stock_quantity_router);
app.use('/stock_supplier',stock_supplier_router);

app.use('/deleteAllStock',deleteAllStockRouter);
app.use('/statusRemark',statusRemarkUpdateRouter);
app.use('/order_details',order_detailsRouter);
app.use('/deleteAllOrderDetails',deleteAllOrderDetailsRouter);

app.use('/supplier',supplierRouter);
app.use('/supplier_user',supplier_user_Router);
app.use('/supplier_product',supplier_product_Router);
app.use('/deleteSupplier',deleteAllSupplier_router);

app.use('/leave',leaveRouter);
app.use('/pastLeave',pastLEaveRouter);


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