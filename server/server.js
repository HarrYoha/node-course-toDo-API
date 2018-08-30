const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose.js');
const { Todo } = require('./models/Todo');
const { User } = require('./models/User');
const { ObjectID } = require('mongodb');

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
            res.status(200).send({ todo });
        }
    }).catch((e) => res.status(400).send());
});


app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((removed) => {
        if (!removed)
            return res.status(404).send();
        else
            res.send({ removed });
    }).catch((e) => res.status(400).send());
});


app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;

    
    //takes what the develloper wanted  the user to update
    var body = _.pick(req.body, ['text', 'completed']);
   
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, { $set: body }, { new: true }).then((todo) => {
        if(!todo){
            res.status(404).send();
        }
        else{
            res.send({todo});
        }
    }).catch((e) => res.send(400).send())

});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = { app };