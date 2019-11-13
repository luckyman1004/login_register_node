const express = require ('express');
const router = express.Router();

//get index page  
router.get('/',(req, res, next )=>{
    res.render('index',{title:"MY Application"});
});


module.exports = router;