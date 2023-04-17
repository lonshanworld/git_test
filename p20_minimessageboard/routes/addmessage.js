const express = require('express');
const router = express.Router();
const {assignData} = require("../server/mongodatabase");

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/', function(req, res, next) {
  res.render("addmessage");
});

router.post("/",function(req,res,next){
  assignData(req.body.title, req.body.text).then(()=>{
    console.log("Done");
    res.redirect("/");
  });
});
module.exports = router;