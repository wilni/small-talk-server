const knex = require('knex')(require('../knexfile').development);

exports.getUser = (req, res) => {
        //query db for user send back user obj || false;
        let email = req.params.email;
        knex('users')
        .where({email: email})
        .then((data) => {
            if(data[0] === undefined){
                res.status(204).send({sucess: false})
            }else{
                res.status(200).send({sucess: true, email: email});
            }
        })
}

exports.createUser = (req, res) => {
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
            if(data[0] === undefined){
                knex('users')
                .insert(newUser).then((data) => {res.status(201).send(data)})
            }else{
                res.status(200).send({sucess: false, message:'user already exist'});
            }
        })
}