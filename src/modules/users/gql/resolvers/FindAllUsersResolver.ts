import { container } from 'tsyringe';
import { Query, Resolver } from 'type-graphql';

import FindAllUsersService from '../../services/FindAllUsersService';
import User from '../../typeorm/entities/User';

@Resolver()
export default class FindAllUsersResolver {
  constructor(
    private findAllUsersService = container.resolve(FindAllUsersService),
  ) {}

  @Query(() => [User])
  users(): Promise<User[]> {
    return this.findAllUsersService.execute();
  }
}
