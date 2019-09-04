const application = require('./dist');
const varEnv = require('./env');

module.exports = application;

// check enviroment variables are not undefined
if (varEnv.envUndefined().length > 0) {
  varEnv.envUndefined().forEach(element => {
    throw new Error(element);
  });
}

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
