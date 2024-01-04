const MongoClient = require('mongodb').MongoClient;
let mongoDB;

const setupDB = async() => {
  mongoDB = await MongoClient.connect(
    process.env.MOGNGO_CONNECTION_STRING,
    { useNewUrlParser: true, useUnifiedTopology: true },
  )

};

const getDB = () => {
  return mongoDB.db("GraphQL_DB_TEST")
};

module.exports = { setupDB, getDB };