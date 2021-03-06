const MongoClient = require('mongodb').MongoClient;
const { config } = require('./index');
let mongoDB;

const setupDB = callback => {
  MongoClient.connect(
    config.mongoUrl,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      mongoDB = client.db('full-stack-server');

      if (err) {
        return callback(err);
      } else {
        return callback('DB OK');
      }
    }
  );
};

const getDB = () => {
  return mongoDB;
};

module.exports = { setupDB, getDB };