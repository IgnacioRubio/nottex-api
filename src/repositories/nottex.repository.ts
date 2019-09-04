import {DefaultCrudRepository} from '@loopback/repository';
import {Nottex, NottexRelations} from '../models';
import {NottexDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class NottexRepository extends DefaultCrudRepository<
  Nottex,
  typeof Nottex.prototype.id,
  NottexRelations
> {
  constructor(
    @inject('datasources.nottex') dataSource: NottexDataSource,
  ) {
    super(Nottex, dataSource);
  }
}
