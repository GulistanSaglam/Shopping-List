const express = require('express');
const router = express.Router();

const List = require('../model/List');

router.post('/add/list', (req, res)=>{

    const {list} = req.body;
    const newList = new List ({list});

    newList.save()
    .then(() => {
        console.log('Successfully added list item!');
        res.redirect('/');
    })
    .catch((err) => console.log(err));
})
.get('/delete/list/:_id', (req,res) => {
    const {_id}= req.params;
    List.deleteOne({_id})
    .then(() => {
        console.log('Deleted list item successfully!')
        res.redirect('/');
    })
    .catch((err) => console.log(err));
});

module.exports = router;