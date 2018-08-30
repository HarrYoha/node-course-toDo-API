const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/Todo');
const { User } = require('./../server/models/User');
var id = '5b55a7455b236419b01cf193';


//remove all todos from the db
/* Todo.remove({}).then((results) => {
    console.log(results);
}); */

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findByIdAndRemove("5b88252dfb6fc0238bb60318").then((res) =>{
    console.log(res);
});