import {NottexApiApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {NottexApiApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new NottexApiApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);

  return app;
}
