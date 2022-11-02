// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {
  development: {
    client: "pg",
    connection: 'postgres://localhost/paw_paths_api1',
    migrations: {
      directory: './migrations'
    },
    seeds: {
          directory: './seeds/pathData'
        },
        useNullAsDefault: true
  }
};
