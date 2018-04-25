const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if (err) {
        return console.log('Unable to connect')
    } 
    console.log('Connected to server');
    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) =>{
        if (err) {
            return console.log('Unable to insert', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Users').insertOne({
        name: 'Cosmo',
        age: '28',
        location: 'London',
        broke: true
    }, (err, result)=>{
        if(err){
            return console.log('Unable to insert', err);
        } 
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});