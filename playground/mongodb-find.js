//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//We use this to select a particular value, in this case, ObjectedID, which is called later on.

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if (err) {
        return console.log('Unable to connect')
    } 
    console.log('Connected to server');
    const db = client.db('TodoApp');

    /* db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2))
    })
    .catch(err =>{

        console.log('error - content not updated', err);
    }); */

   /*  db.collection('Todos').find({
        _id: new ObjectID('5ae0aa6dc24ca756f8230689')
    }).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2))
    })
    .catch(err =>{

        console.log('error - content not updated', err);
    }); */

    db.collection('Users').find({name: 'Cosmo'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 2));
    });

   

    //client.close();
});
