const express =require('express')
require('dotenv').config()
const port = process.env.PORT ||8000
const strat = require('./auth/passport-linkedin')
const session= require('express-session')
const passport = require('passport')
const app= express()



app.use(session({secret:"lksdmfsldkmfsl"}))

app.use(passport.initialize());
app.use(passport.session());
app.get("/",(req,res)=>{
    res.send(`<center style="font-size:160%"> <p>This is home page </p>
    <p> user is not logged</p>
    <button style="cursor:pointer;" onclick="window.location='/auth/linkedin'" >tıkla</button>
    </center>
    `);
})

app.use('/auth',require('./routes/linkedin'))

app.listen(port , ()=>{
    console.log("Listening at" + port)
})