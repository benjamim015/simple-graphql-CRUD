import FakeUsersRepository from '../../repositories/fakes/FakeUsersRepository';
import FindAllUsersService from '../FindAllUsersService';

let fakeUsersRepository: FakeUsersRepository;
let findAllUsers: FindAllUsersService;

describe('Find all users', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    findAllUsers = new FindAllUsersService(fakeUsersRepository);
  });

  it('should be able to find all users', async () => {
    await fakeUsersRepository.create('John Doe');
    await fakeUsersRepository.create('John Doe 2');

    const allUsers = await findAllUsers.execute();

    expect(allUsers.length).toBe(2);
  });
});
