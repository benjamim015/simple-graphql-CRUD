import FakeUsersRepository from '../../repositories/fakes/FakeUsersRepository';
import UpdateUserService from '../UpdateUserService';

let fakeUsersRepository: FakeUsersRepository;
let updateUser: UpdateUserService;

describe('Update user', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    updateUser = new UpdateUserService(fakeUsersRepository);
  });

  it('should be able to update a user', async () => {
    const user = await fakeUsersRepository.create('John Doe');

    const updatedUser = await updateUser.execute({
      id: user.id,
      name: 'updated name',
    });

    expect(updatedUser).toHaveProperty('name', 'updated name');
  });

  it('should not be able to update a user that does not exist', async () => {
    await expect(
      updateUser.execute({
        id: 'non-existing-id',
        name: 'non-existing-name',
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should not be able to update a username to another name already used', async () => {
    await fakeUsersRepository.create('John Doe');
    const user = await fakeUsersRepository.create('John Doe 2');

    await expect(
      updateUser.execute({
        id: user.id,
        name: 'John Doe',
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
