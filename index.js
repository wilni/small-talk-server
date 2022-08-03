require('dotenv').config();
const PORT = process.env.PORT || 8080;
const express = require('express');
const cors = require('cors');
const knex = require('knex')(require('./knexfile').development);



//app and middleware
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));


//routes 
// const userRoutes = require('./routes/users.js');
// app.use('/user', userRoutes);

//users route to move to routes and controllers 

app.get('/user/:email', (req, res) => {
    //query db for user send back user obj || false;
    let email = req.params.email;
    knex('users')
    .where({email: email})
    .then((data) => {
        if(data[0] === undefined){
            console.log(data)
            res.send({sucess: false})
        }else{
            console.log(data)
            res.send({sucess: true, email: email});
        }
    })
});

app.post('/user/:email', (req, res) => {
    //register user in DB
    let email = req.params.email;
    let username = email.slice(0,email.indexOf('@'));
    let newUser = {
        email: email,
        username: username
    }
    knex('users')
    .insert(newUser).then((data) => {res.send(data)})
});

// connections routes 
app.get('/connections/:email', (req, res) => {
    let email = req.params.email;
    knex('connections')
    .where({email_1: `${email}`}).orWhere({email_2: `${email}`})
    .then(data => {
        res.send(data);
    })
})

app.listen(PORT, () => {
    console.log("listening on port 8080");
})


//code for finding email before at to convert to username 
// let indexOfAt = email.indexOf('@')
// let username = email.split(indexOfAt);
//email.slice(0,indexOfAt);


