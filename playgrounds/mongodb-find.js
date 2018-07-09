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

    /*  db.collection('todo').find({
         "_id": new ObjectID("5b4228ec72ef1757cb209ca6")
     }).toArray().then((docs) => {
         console.log('Todos');
         console.log(JSON.stringify(docs,undefined,3));
     }, (err) => {
         console.log('Unable to fetch todos', err);
     });
 */
   /*  db.collection('todo').find().count().then((count) => {
        console.log('Todos');
        console.log(`todo count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    }); */


    db.collection('Users').find({"name": "Yoyo"}).toArray().then((count) => {
        console.log('Todos');
        console.log(JSON.stringify(count,undefined, 3));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // client.close();
});