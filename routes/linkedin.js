const express = require('express')
const passport = require('passport')
const router = express.Router()

router.get('/linkedin',passport.authenticate('linkedin',{state:"LSKDFJ"})) //isteği başlatır

router.get('/linkedin/callback',passport.authenticate('linkedin',{successRedirect:'/auth/login/success',failureRedirect:'/faild'}))  // loginden sonra ne olacak

router.get('login/success',(req,res)=>{
    if(req.user){
        res.json(req.user)
        console.log("bu user:",req.user)
    }
})

router.get('/logout',(req,res)=>{
req.logout((error)=>{
    if(error){return;}
    res.redirect('/')
})
})
module.exports = router