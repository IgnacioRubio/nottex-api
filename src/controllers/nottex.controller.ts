import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Nottex} from '../models';
import {NottexRepository} from '../repositories';

export class NottexController {
  constructor(
    @repository(NottexRepository)
    public nottexRepository : NottexRepository,
  ) {}

  @post('/nottexes', {
    responses: {
      '200': {
        description: 'Nottex model instance',
        content: {'application/json': {schema: getModelSchemaRef(Nottex)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Nottex, {exclude: ['id']}),
        },
      },
    })
    nottex: Omit<Nottex, 'id'>,
  ): Promise<Nottex> {
    return this.nottexRepository.create(nottex);
  }

  @get('/nottexes/count', {
    responses: {
      '200': {
        description: 'Nottex model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Nottex)) where?: Where<Nottex>,
  ): Promise<Count> {
    return this.nottexRepository.count(where);
  }

  @get('/nottexes', {
    responses: {
      '200': {
        description: 'Array of Nottex model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Nottex)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Nottex)) filter?: Filter<Nottex>,
  ): Promise<Nottex[]> {
    return this.nottexRepository.find(filter);
  }

  @patch('/nottexes', {
    responses: {
      '200': {
        description: 'Nottex PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Nottex, {partial: true}),
        },
      },
    })
    nottex: Nottex,
    @param.query.object('where', getWhereSchemaFor(Nottex)) where?: Where<Nottex>,
  ): Promise<Count> {
    return this.nottexRepository.updateAll(nottex, where);
  }

  @get('/nottexes/{id}', {
    responses: {
      '200': {
        description: 'Nottex model instance',
        content: {'application/json': {schema: getModelSchemaRef(Nottex)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Nottex> {
    return this.nottexRepository.findById(id);
  }

  @patch('/nottexes/{id}', {
    responses: {
      '204': {
        description: 'Nottex PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Nottex, {partial: true}),
        },
      },
    })
    nottex: Nottex,
  ): Promise<void> {
    await this.nottexRepository.updateById(id, nottex);
  }

  @put('/nottexes/{id}', {
    responses: {
      '204': {
        description: 'Nottex PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() nottex: Nottex,
  ): Promise<void> {
    await this.nottexRepository.replaceById(id, nottex);
  }

  @del('/nottexes/{id}', {
    responses: {
      '204': {
        description: 'Nottex DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.nottexRepository.deleteById(id);
  }
}
