// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {

  development: {
    client: "pg",
    connection: {
      port: 8718,
      user: "postgres",
      password: "null",
      database: "paw_paths_api1",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }, 

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './migrations'
    }, 
    seeds: {
      directory: './seeds'
    }
  }
}




