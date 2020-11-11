import FakeUsersRepository from '../../repositories/fakes/FakeUsersRepository';
import DeleteUserService from '../DeleteUserService';

let fakeUsersRepository: FakeUsersRepository;
let deleteUser: DeleteUserService;

describe('Delete user', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    deleteUser = new DeleteUserService(fakeUsersRepository);
  });

  it('should be able to delete a user', async () => {
    const user = await fakeUsersRepository.create('John Doe');

    deleteUser.execute(user.id);

    const allUsers = await fakeUsersRepository.findAll();

    expect(allUsers.length).toBe(0);
  });

  it('should not be able to delete a user that does not exist', async () => {
    await expect(deleteUser.execute('non-existing-id')).rejects.toBeInstanceOf(
      Error,
    );
  });
});
