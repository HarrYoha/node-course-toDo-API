var express = require('express');
var bodyParser = require('body-parser');
var { mongoose } = require('./db/mongoose.js');
var { Todo } = require('./models/Todo');
var { User } = require('./models/User');
var { ObjectID } = require('mongodb');

const port = process.env.PORT || 3000;

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
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (e) => {
        res.status(400).send(e);
    });
});

//GET /todos/12345
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        if (!todo)
            return res.status(404).send();
        else {
            res.status(200).send(todo);
        }
    }).catch((e) => res.status(400).send());
});


app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = { app };