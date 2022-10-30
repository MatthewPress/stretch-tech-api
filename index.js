const express = require('express')
const app = express()
const port = process.env.PORT || 9000
const queries = require('./queries')
const cors = require('cors');

app.use(cors());

app.get('/', (request, response) => {
  queries.getAll().then(results => response.send(results))
});

app.listen(port, () => console.log(`listening on port: ${port}`))