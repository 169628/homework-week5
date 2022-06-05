var express = require('express');
var router = express.Router();

const usercontroller = require('../controllers/userController');
const err = require('../service/errorHandle/errorHanle');
const isAuth = require('../middleware/isMember');

//註冊
router.post('/sign_up',err.handleErrorAsync(usercontroller.signUp));


module.exports = router;
