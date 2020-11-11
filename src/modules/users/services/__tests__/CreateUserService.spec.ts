import FakeUsersRepository from '../../repositories/fakes/FakeUsersRepository';
import CreateUserService from '../CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let createUser: CreateUserService;

describe('Create user', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    createUser = new CreateUserService(fakeUsersRepository);
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute('John Doe');

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create 2 users with the same name', async () => {
    await createUser.execute('John Doe');

    await expect(createUser.execute('John Doe')).rejects.toBeInstanceOf(Error);
  });
});
