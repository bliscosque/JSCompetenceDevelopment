const express=require('express');
const router=express.Router();

router.post('/signup', (req,res) => {
    res.send("You've made a post");
})

module.exports=router;