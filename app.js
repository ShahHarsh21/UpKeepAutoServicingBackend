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
var productRouter = require('./routes/product_routes');
var categoryRouter = require('./routes/category_routes');
var colorRouter =require('./routes/color_routes');
var employeeRouter = require('./routes/employee_routes');
var emp_With_UsernameRouter=require('./routes/emp_with_username');
var emp_designation_Router=require('./routes/employee_designation_routs');
var emp_type_Router=require('./routes/emp_type_routs');
var stockRouter = require('./routes/stock_routes');
var cartRouter = require('./routes/cart_routes');
var supplierRouter =  require('./routes/supplier_routes');
var slotRouter = require ('./routes/slot_routes');
var userRouter=require('./routes/user_routes');
var deliveryboyRouter = require('./routes/emp_delivery_boy_routs');
var order_detailsRouter= require('./routes/order_details_routes');
var machanicRouter=require('./routes/emp_with_machanic_routs');
var slotByDate=require('./routes/slotByDate_routes');
var emailRouter = require('./routes/email_routes');
var emp_photo=require('./routes/emp_photo_routs');
var emp_allotmentRouter=require('./routes/EMP_ALLOTMENT_ROUTS');
var product_imagRouter=require('./routes/product_img_routs');

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
app.use('/cart',cartRouter);
app.use('/user',userRouter);
app.use('/product',productRouter);
app.use('/order_details',order_detailsRouter);
app.use('/category',categoryRouter);
app.use('/color',colorRouter);
app.use('/email',emailRouter);
app.use('/employee', employeeRouter);
app.use('/emp_With_Username',emp_With_UsernameRouter);
app.use('/emp_designation',emp_designation_Router);
app.use('/emp_type',emp_type_Router)
app.use('/stock',stockRouter);
app.use('/supplier',supplierRouter);
app.use('/slot',slotRouter);
app.use('/deliveryBoy',deliveryboyRouter);
app.use('/machanic',machanicRouter);
app.use('/slotByDate',slotByDate);
app.use('/EmpImg',emp_photo);
app.use('/EmpAllotment',emp_allotmentRouter);
app.use('/Product_image',product_imagRouter);

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
