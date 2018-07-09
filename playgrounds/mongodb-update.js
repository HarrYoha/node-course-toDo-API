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

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID("5b42299c8a3ffe5867d2e970")
    }, {
            $set: {
                name: 'Yohanan'
            },
            $inc:{
                age: 2
            }
        }, {
            returnOriginal: false
        }).then((result)=>{
            console.log(result);
        });

    client.close();
});