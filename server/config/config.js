module.exports = {
  development: {
    username: "postgres",
    password: null,
    database: "listitFullstack-dev",
    host: "127.0.0.1",
    dialect: "postgres",
    logging: false,
    operatorsAliases: false
  },
  test: {
    username: "postgres",
    password: null,
    database: "listitFullstack-test",
    host: "127.0.0.1",
    dialect: "postgres",
    logging: false,
    operatorsAliases: false
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres",
    logging: false,
    operatorsAliases: false
  }
};
