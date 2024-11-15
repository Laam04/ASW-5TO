import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ParquearService } from './parquear.service';
import { Parquear } from './parquear.entity';
import { CreateParquearInput } from './dto/create-parquear.input';
import { UpdateParquearInput } from './dto/update-parquear.input';

@Resolver(() => Parquear)
export class ParquearResolver {
  constructor(private readonly parquearService: ParquearService) {}

  @Mutation(() => Parquear)
  createParquear(
    @Args('createParquearInput') createParquearInput: CreateParquearInput,
  ): Promise<Parquear> {
    return this.parquearService.create(createParquearInput);
  }

  @Query(() => [Parquear], { name: 'parqueos' })
  findAll(): Promise<Parquear[]> {
    return this.parquearService.findAll();
  }

  @Query(() => Parquear, { name: 'parquear' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Parquear> {
    return this.parquearService.findOne(id);
  }

  @Mutation(() => Parquear)
  updateParquear(
    @Args('updateParquearInput') updateParquearInput: UpdateParquearInput,
  ): Promise<Parquear> {
    return this.parquearService.update(updateParquearInput.id, updateParquearInput);
  }

  @Mutation(() => Boolean)
  removeParquear(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
    return this.parquearService.remove(id);
  }
}
