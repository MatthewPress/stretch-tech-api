// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/cheersforfears',
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'postgres://cheersforfears_user:pr33sQyTLsMx3P7atU5p1izEShyktUEW@dpg-cdi4vd2en0hi0cvkrn10-a/cheersforfears',
      user:     'cheersforfears_user',
      password: 'pr33sQyTLsMx3P7atU5p1izEShyktUEW'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
