//require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('./knex')

app.set('port', 8080)

// const environment = process.env.NODE_ENV || 'development';
// const configuration = require('../knexfile')[environment];
// const database = require('knex')(configuration);

//middleware
// app.use(cors())
app.use(cors({
  allowedOrigins: ['localhost:8080']
}));

app.use(express.json());

app.get('/api/v1/pathData', async(request, response) => {
    const pathData = await knex.select().from('pathData')
    response.status(200).json(pathData)
})

//routes
app.listen(app.get('port'), () => {
  console.log(`server has started on http://localhost:${app.get('port')}.`)
})