//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://Aslatiel:REDreaper96@ds161710.mlab.com:61710/todo',(error, client)=>{
    if(error){
       return  console.log('Unable to connect to mongodb server');
    }

    console.log('Connected to mongodb server');

    const db = client.db('todo');
    /* db.collection('todo').insertOne({
        text:'Something to do',
        completed: false
    },(err, result)=>{
        if(err)
            return console.log('Unable to insert todo',err);
        
        console.log(JSON.stringify(result.ops,undefined,2));
    }); */
    
   /*  db.collection('Users').insertOne({
        name:'Yoyo',
        age: 21,
        location:'Montmagny'
    },(err, result)=>{
        if(err)
            return console.log('Unable to insert user',err);
        
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    }); */

    client.close();
});