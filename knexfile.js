// Update with your config settings.
const DATABASE_URL = process.env.DATABASE_URL
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/stretch-tech-db',
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    },
    useNullAsDefault: true
  },

  production: {
    client: "postgresql",
    connection: {
      connectionString: DATABASE_URL, 
      ssl: {
        rejectUnauthorized: false,
      },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};


//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }

// };
