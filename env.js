require('dotenv').config();

module.exports = {
  dbUser: process.env.DB_USER,
  dbPass: process.env.DB_PASS,
  dbDatabase: process.env.DB_DATABASE,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  envUndefined: function () {
    let errMessage = [];

    if (this.dbUser === undefined) errMessage.push("Enviroment variable 'dbUser' undefined on '.env' file.");
    if (this.dbPass === undefined) errMessage.push("Enviroment variable 'dbPass' undefined on '.env' file.");
    if (this.dbDatabase === undefined) errMessage.push("Enviroment variable 'dbDatabase' undefined on '.env' file.");
    if (this.dbHost === undefined) errMessage.push("Enviroment variable 'dbHost' undefined on '.env' file.");
    if (this.dbPort === undefined) errMessage.push("Enviroment variable 'dbPort' undefined on '.env' file.");

    if (errMessage.length === 5) {
      errMessage = ["Must create '.env' on index's folder with the next variables: DB_USER, DB_PASS, DB_DATABASE, DB_HOST and DB_PORT"];
    }

    return errMessage;
  }
}
