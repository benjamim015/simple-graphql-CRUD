import { container } from 'tsyringe';
import { Arg, Mutation, Resolver } from 'type-graphql';

import CreateUserService from '../../services/CreateUserService';
import User from '../../typeorm/entities/User';

@Resolver()
export default class CreateUserResolver {
  constructor(
    private createUserService = container.resolve(CreateUserService),
  ) {}

  @Mutation(() => User)
  async createUser(@Arg('name') name: string): Promise<User> {
    const user = this.createUserService.execute(name);

    return user;
  }
}
