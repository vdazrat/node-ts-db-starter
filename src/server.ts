// lib/app.ts
import express = require('express')
require('../configs/knex')
import { insertUser, fetchAll } from './services/user-service'

// Create a new express application instance
const app: express.Application = express()

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.get('/insert', async function(req, res) {
  await insertUser({
    name: 'test user',
    email: 'test-user@gmail.com',
    username: 'test-user',
  })
  res.send('Inserted User!')
})

app.get('/users', async function(req, res) {
  const users = await fetchAll()
  res.send(`Users - ${JSON.stringify(users)}`)
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
