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

// socket server
const { Server } = require("socket.io");
const http = require('http');
const httpServer = http.createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: ["http://localhost:3000", "http://127.0.0.1:3000", "http://10.0.0.216:3000", "http://192.168.1.127:3000"],
        methods: ["GET", "POST", "DELETE", "PUT"],
    }
})

io.on("connection", (socket) => {
    console.log(`connected with id: ${socket.id}`);

    socket.on('join_room', (data) => {
        socket.join(data)
    })

    socket.on("send-message", (data) => {
        console.log("data from send message listener", data);
        socket.to(data.connectionID).emit("recieved-message", data.msg);
    })
});


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
            console.log(data);
            res.status(204).send({sucess: false})
        }else{
            console.log(data)
            res.status(200).send({sucess: true, email: email});
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
    .where({email: email})
    .then(data => {
        console.log("search before insert", data)
        if(data[0] === undefined){
            knex('users')
            .insert(newUser).then((data) => {res.status(201).send(data)})
        }else{
            res.status(200).send({sucess: false, message:'user already exist'});
        }
    })
});

// connections routes 
app.get('/connections/:email', (req, res) => {
    let email = req.params.email;
    knex('connections')
    .where({email_1: `${email}`}).orWhere({email_2: `${email}`})
    .then(data => {
        res.status(200).send(data);
    })
})


app.get('/connection/:id', (req, res) => {
    let id = req.params.id;
    knex('connections')
    .where({connection_id: id})
    .then(data => {
        console.log(data);
        res.status(200).send(data);
    })
})

app.post('/connections', (req, res) => {
    let {email_1, email_2, connection_id} = req.body;
    let newConnection = req.body;
        knex('users')
        .where({email: email_2}).then(data => {
            console.log("email is not found",data);
            if(data[0] === undefined){
                res.status(200).send({sucess: false, message:"User not found :("})
            }else{
                knex('connections')
                .insert(req.body)
                .then(data => {
                    res.status(201).send(req.body)
                })
            }
        })
})


//messages routes 
app.get('/messages/:id', (req, res) => {
    let id = req.params.id;
    knex('messages')
    .where({connection_id: id})
    .then(data => {
        console.log('msg data',data)
        res.status(200).send(data)
    })
})

app.get('/messages/:id/last', (req, res) => {
    let id = req.params.id;
    knex('messages')
    .where({connection_id: id})
    .orderBy('sent_at', 'desc')
    .then(data => {
        console.log('last msg data',data[0])
        res.status(200).send([data[0]])
    })
})

app.post('/messages', (req, res) => {
    knex('messages')
    .insert(req.body)
    .then((data) => {
        res.status(201).send(data)
    })
})

// app.listen(PORT, () => {
//     console.log("listening on port 8080");
// })

httpServer.listen(PORT, () => {
    console.log("server running on port 8080");
})




