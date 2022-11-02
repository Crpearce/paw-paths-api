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
    }
  }
}




