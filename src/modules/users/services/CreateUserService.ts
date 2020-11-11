import { inject, injectable } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';
import User from '../typeorm/entities/User';

@injectable()
export default class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(name: string): Promise<User> {
    const findUserWithSameName = await this.usersRepository.findByName(name);

    if (findUserWithSameName) {
      throw new Error('This name is already used!');
    }

    const user = await this.usersRepository.create(name);

    return user;
  }
}
