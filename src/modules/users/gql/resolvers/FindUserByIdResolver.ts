import { container } from 'tsyringe';
import { Arg, Query, Resolver } from 'type-graphql';

import FindUserByIdService from '../../services/FindUserByIdService';
import User from '../../typeorm/entities/User';

@Resolver()
export default class FindUserByIdResolver {
  constructor(
    private findUserByIdService = container.resolve(FindUserByIdService),
  ) {}

  @Query(() => User, { nullable: true })
  user(@Arg('id', () => String) id: string): Promise<User | undefined> {
    return this.findUserByIdService.execute(id);
  }
}
