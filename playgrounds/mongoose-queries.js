const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/Todo');
const { User } = require('./../server/models/User');
var id = '5b55a7455b236419b01cf193';

/* if(ObjectID.isValid(id)){
    console.log('ID not valid');
}
 */
/* Todo.find({
    _id: id
}).then((todos)=>{
    console.log('Todos', todos);
});

Todo.findOne({
        _id: id
    }).then((todos)=>{
        console.log('Todos', todos);
    
});

Todo.findById(id).then((todo)=>{
    if(!todo)
        return console.log('id not found');
    console.log(todo);
}).catch((e) => console.log(e));
 */
User.findById(id).then((user) => {
    if (!user) {
        console.log('User not found');
    }
    else
        console.log(user);
}).catch((e) => console.log(e));