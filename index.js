const application = require('./dist');
require('dotenv').config();

module.exports = application;

// const db_host = process.env.DB_HOST;
// console.log('Host database: ', db_host);


if (require.main === module) {
  // Run the application
  const config = {
    rest: {
      port: +(process.env.PORT || 3000),
      host: process.env.HOST,
      openApiSpec: {
        // useful when used with OpenAPI-to-GraphQL to locate your application
        setServersFromRequest: true,
      },
    },
  };
  application.main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
