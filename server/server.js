var express = require('express');
var bodyParser = require('body-parser');
var { mongoose } = require('./db/mongoose.js');
var { Todo } = require('./models/Todo');
var { User } = require('./models/User');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {

    //create the data with the request
    var todo = new Todo({
        text: req.body.text,
        completed: req.body.completed
    });

    //execute to the database
    todo.save().then((doc) => {
        res.send(doc);
    },
        (e) => {
            res.status(400).send(e);
        });
});
/* 
GET /todos */

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = { app };