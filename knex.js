//this file is your data base configuration file

const knex = require('knex')

const env = process.env.DB_ENV || 'development'
const config = require('./knexfile')

const knexConfig = config[env];

module.exports = knex(knexConfig);