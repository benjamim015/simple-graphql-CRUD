import { container } from 'tsyringe';
import { Arg, Mutation, Resolver } from 'type-graphql';

import UpdateUserService from '../../services/UpdateUserService';
import User from '../../typeorm/entities/User';

@Resolver()
export default class UpdateUserResolver {
  constructor(
    private updateUserService = container.resolve(UpdateUserService),
  ) {}

  @Mutation(() => User)
  async updateUser(
    @Arg('id') id: string,
    @Arg('name') name: string,
  ): Promise<User | undefined> {
    const user = this.updateUserService.execute({ id, name });

    return user;
  }
}
