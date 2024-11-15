import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EspacioService } from './espacio.service';
import { Espacio } from './espacio.entity';
import { CreateEspacioInput } from './dto/create-espacio.input';
import { UpdateEspacioInput } from './dto/update-espacio.input';

@Resolver(() => Espacio)
export class EspacioResolver {
  constructor(private readonly espacioService: EspacioService) {}

  @Query(() => [Espacio], { name: 'espacios' })
  findAll() {
    return this.espacioService.findAll();
  }

  @Mutation(() => Espacio)
  createEspacio(@Args('createEspacioInput') createEspacioInput: CreateEspacioInput) {
    return this.espacioService.create(createEspacioInput);
  }

  @Mutation(() => Espacio)
  updateEspacio(@Args('updateEspacioInput') updateEspacioInput: UpdateEspacioInput) {
    return this.espacioService.update(updateEspacioInput);
  }
}
