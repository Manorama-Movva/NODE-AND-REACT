var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 let data=[{
   name: "kiran",
   age:30,
   salary:3000
 },
 
 {
  name: "rrran",
  age:40,
  salary:300000
},
 
]
res.render('index',{title:'Express', myName: 'manu', users:data})
});

module.exports = router;
