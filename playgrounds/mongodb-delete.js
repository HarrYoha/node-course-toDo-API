//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://Aslatiel:REDreaper96@ds161710.mlab.com:61710/todo', (error, client) => {
    if (error) {
        return console.log('Unable to connect to mongodb server');
    }

    console.log('Connected to mongodb server');

    const db = client.db('todo');

    //deleteMany
    /* db.collection('todo').deleteMany({text:"Eat lunch"}).then((result)=>{
        console.log(result);
    }); */

    //deleteOne
   /*  db.collection('todo').deleteOne({text:"Eat lunch"}).then((result)=>{
        console.log(result);
    }); */


    //findOneandDelete

   /*  db.collection('todo').findOneAndDelete({completed:false}).then((result)=>{
        console.log(result);
    }); */
   /*  db.collection('Users').deleteMany({name:"Yoyo"}).then((result)=>{
        console.log(result);
    }); */


    db.collection('Users').findOneAndDelete({_id:new ObjectID("5b43765be7179a31f5316071")}).then((result)=>{
        console.log(result);
    });



     client.close();
});