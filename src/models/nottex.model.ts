import { Entity, model, property } from '@loopback/repository';

@model({ settings: {} })
export class Nottex extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
    default: 'default',
  })
  color: string;

  @property({
    type: 'string',
    required: true,
  })
  text: string;

  @property({
    type: 'date',
    required: true,
  })
  dateCreated: Date;

  constructor(data?: Partial<Nottex>) {
    super(data);
  }
}

export interface NottexRelations {
  // describe navigational properties here
}

export type NottexWithRelations = Nottex & NottexRelations;
