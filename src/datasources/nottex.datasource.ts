import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';

const env = process.env;

const config = {
  name: 'nottex',
  connector: 'mysql',
  url: '',
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_DATABASE,
};

export class NottexDataSource extends juggler.DataSource {
  static dataSourceName = 'nottex';

  constructor(
    @inject('datasources.config.nottex', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
