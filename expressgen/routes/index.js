

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let data = [{
    name: "manu",
    age: 22,
    salary: 40000
  },
  {
    name: "madhu",
    age: 25,
    salary: 50000
  },

  ]
  res.render('index', {
    title: 'Express',
    myName: "manorama", 
    users: data
  });
});

module.exports = router;
