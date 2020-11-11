import { v4 } from 'uuid';

import User from '../../typeorm/entities/User';
import IUsersRepository from '../IUsersRepository';

export default class UsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async create(name: string): Promise<User> {
    const user = new User();

    Object.assign(user, { id: v4(), name });

    this.users.push(user);

    return user;
  }

  public async findById(id: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.id === id);

    return findUser;
  }

  public async findByName(name: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.name === name);

    return findUser;
  }

  public async findAll(): Promise<User[]> {
    return this.users;
  }

  public async save(user: User): Promise<User> {
    const findIndex = this.users.findIndex(findUser => findUser.id === user.id);

    this.users[findIndex] = user;

    return user;
  }

  public async delete(id: string): Promise<User | undefined> {
    const findIndex = this.users.findIndex(findUser => findUser.id === id);

    const user = this.users[findIndex];

    this.users.splice(findIndex, 1);

    return user;
  }
}
