import User from '../typeorm/entities/User';

export default interface IUsersRepository {
  create(name: string): Promise<User>;
  findById(id: string): Promise<User | undefined>;
  findByName(name: string): Promise<User | undefined>;
  findAll(): Promise<User[]>;
  save(user: User): Promise<User>;
  delete(id: string): Promise<User | undefined>;
}
