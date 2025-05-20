var express = require('express');
var router = express.Router();
var pool = require('./pool.js');



/* GET user Login page. */
router.get('/user_reg', function(req, res, next) {
  res.render('user_register',{msg: ''});
}); 

// //insert reg data
router.post('/user_inserReg', function (req, res, next) {
  pool.query('insert into user_reg(name,lname,address,email,password)values(?,?,?,?,?)',
      [req.body.name, req.body.lname,req.body.address, req.body.email, req.body.password], function (error, result) {
          if (error) {
              res.render('user_register', { msg: 'Record fail...' });
          }
          else {
              res.render('userLogin',
                  { msg: 'Record Submit Successfully' });
          }
        })

});


/* GET user Landing page. */
router.get('/userInterface', function(req, res, next) {
  res.render('userLandingPage');
});



/* GET user Login page. */
router.get('/user_Login', function(req, res, next) {
    res.render('userLogin',{msg: ''});
  });




/* GET Client Login page. */
router.get('/client_Login', function(req, res, next) {
    res.render('clientLogin');
  });

/* GET registration page. */
router.get('/cli_registration', function(req, res, next) {
  res.render('register');
});



module.exports = router;
