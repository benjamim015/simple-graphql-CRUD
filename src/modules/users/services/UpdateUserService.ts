import { inject, injectable } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';
import User from '../typeorm/entities/User';

interface IRequest {
  id: string;
  name: string;
}

@injectable()
export default class UpdateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ id, name }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new Error('This user does not exist!');
    }

    const findUserByName = await this.usersRepository.findByName(name);

    if (findUserByName) {
      throw new Error('This name is already used!');
    }

    user.name = name;

    return this.usersRepository.save(user);
  }
}
