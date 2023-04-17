const express = require('express');
const router = express.Router();
const {getDataList} = require("../server/mongodatabase");


const dataList = [
  {
    name : "Mg Mg",
    age : 30,
  },
  {
    name : "Kyaw Kyaw",
    age : 23,
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  getDataList().then((value)=>{
    console.log(value);
    res.render('index', {dataList : value});
  });
  
});

module.exports = router;
