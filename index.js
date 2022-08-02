require('dotenv').config();
const PORT = process.env.PORT || 8080;
const express = require('express');
const cors = require('cors');

//routes 
const userRoutes = require('./routes/users.js');

//app and middleware
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log("listening on port 8080");
})


app.get('/user/:email', () => {
    //query db for user send back user obj || false;
});

app.post('/user/:email', () => {
    //register user in DB
});


console.log(process.env.CLIENT_ID)

//code for finding email before at to convert to username 
// let indexOfAt = email.indexOf('@')
// let username = email.split(indexOfAt);
//email.slice(0,indexOfAt);


