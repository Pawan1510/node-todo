// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');
// var user = {name: 'Pawan', age:21};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').insertOne({
    name: 'Pawan',
    age: 21,
    locaton: 'Ambala'
  },(err,result)=>{
    if(err){
      return console.log('Unable to insert user',err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
