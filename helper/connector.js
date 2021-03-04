const { Client } = require("pg");

const db = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "Dendyanugerah88",
  database: "users_db",
});

db
  .connect()
  .then(() => {
    console.log("database is running");
  })
  .catch((err) => {
    console.log("database error", err);
  });

module.exports = db;
