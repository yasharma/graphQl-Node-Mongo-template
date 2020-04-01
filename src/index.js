const express = require('express');
const cors = require('cors');
const app = express();
const graphqlHTTP = require('express-graphql');
const { config } = require('./config')
const { setupDB } = require('./config/databaseConnection');

setupDB(v => console.log(v));
const schema = {
  // we will add this later
};

app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true
  })
);

app.listen(config.port);
console.log('SERVER listening on port', config.port);