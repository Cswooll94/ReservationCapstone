require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL="postgres://siehgkav:Cwe-pdfh05ZEXCVvnumT6kaAcDNQN3pH@castor.db.elephantsql.com/siehgkav",
  DATABASE_URL_DEVELOPMENT="postgres://riuynkgx:VjousEDt-bSNDhzx962gQKT13v8n8tqL@castor.db.elephantsql.com/riuynkgx",
  DATABASE_URL_TEST="postgres://jjqfqbgm:ihK5xxQZgtCLjpo-VWNkRMA8ZKQ1_R7t@castor.db.elephantsql.com/jjqfqbgm",
  DATABASE_URL_PREVIEW="postgres://bgsxyaxl:mPY2jpwPxV_5ZL8N2cn6FY3bCofYX6NS@castor.db.elephantsql.com/bgsxyaxl",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
