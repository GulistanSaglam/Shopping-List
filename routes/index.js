const express = require('express');
const router = express.Router();

const List = require('../model/List');


router.get('/', async (req,res)=>{
    // res.send('Welcome to Shopping List App!');  // In order to test the route
   
    const allList = await List.find();
    res.render('index', {list: allList});

});




module.exports = router;

