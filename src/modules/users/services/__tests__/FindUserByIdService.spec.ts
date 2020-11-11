import FakeUsersRepository from '../../repositories/fakes/FakeUsersRepository';
import FindUserByIdService from '../FindUserByIdService';

let fakeUsersRepository: FakeUsersRepository;
let findUserById: FindUserByIdService;

describe('Find user by id', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    findUserById = new FindUserByIdService(fakeUsersRepository);
  });

  it('should be able to find a user by id', async () => {
    const user = await fakeUsersRepository.create('John Doe');

    const findUser = await findUserById.execute(user.id);

    expect(findUser).toHaveProperty('name', 'John Doe');
  });

  it('should not be able to find a user that does not exist', async () => {
    await expect(
      findUserById.execute('non-existing-id'),
    ).rejects.toBeInstanceOf(Error);
  });
});
