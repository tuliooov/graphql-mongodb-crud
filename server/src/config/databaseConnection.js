const MongoClient = require('mongodb').MongoClient;

let mongoDB;

const setupDB = async() => {
  const uri = 'mongodb+srv://marcotuliovaleriano2014:tulio1207@cluster0.o0dhq6m.mongodb.net/?retryWrites=true&w=majority' 

  mongoDB = await MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
  )

};

const getDB = () => {
   return mongoDB.db("GraphQL_DB_TEST")
};

module.exports = { setupDB, getDB };