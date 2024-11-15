import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { VehiculoService } from './vehiculo.service';
import { Vehiculo } from './vehiculo.entity';
import { CreateVehiculoInput } from './dto/create-vehiculo.input';
import { UpdateVehiculoInput } from './dto/update-vehiculo.input';

@Resolver(() => Vehiculo)
export class VehiculoResolver {
  constructor(private readonly vehiculoService: VehiculoService) {}

  @Query(() => [Vehiculo], { name: 'vehiculos' })
  findAll() {
    return this.vehiculoService.findAll();
  }

  @Query(() => Vehiculo, { name: 'vehiculo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.vehiculoService.findOne(id);
  }

  @Mutation(() => Vehiculo)
  createVehiculo(@Args('createVehiculoInput') createVehiculoInput: CreateVehiculoInput) {
    return this.vehiculoService.create(createVehiculoInput);
  }

  @Mutation(() => Vehiculo)
  updateVehiculo(@Args('updateVehiculoInput') updateVehiculoInput: UpdateVehiculoInput) {
    return this.vehiculoService.update(updateVehiculoInput);
  }

  @Mutation(() => Boolean)
  removeVehiculo(@Args('id', { type: () => Int }) id: number) {
    return this.vehiculoService.remove(id);
  }
}
