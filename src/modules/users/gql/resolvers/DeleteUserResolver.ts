import { container } from 'tsyringe';
import { Arg, Mutation, Resolver } from 'type-graphql';

import DeleteUserService from '../../services/DeleteUserService';
import User from '../../typeorm/entities/User';

@Resolver()
export default class DeleteUserResolver {
  constructor(
    private deleteUserService = container.resolve(DeleteUserService),
  ) {}

  @Mutation(() => User, { nullable: true })
  async deleteUser(@Arg('id') id: string): Promise<User | undefined> {
    return this.deleteUserService.execute(id);
  }
}
