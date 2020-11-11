import CreateUserResolver from './resolvers/CreateUserResolver';
import DeleteUserResolver from './resolvers/DeleteUserResolver';
import FindAllUsersResolver from './resolvers/FindAllUsersResolver';
import FindUserByIdResolver from './resolvers/FindUserByIdResolver';
import UpdateUserResolver from './resolvers/UpdateUserResolver';

const UserResolvers = [
  CreateUserResolver,
  DeleteUserResolver,
  FindAllUsersResolver,
  FindUserByIdResolver,
  UpdateUserResolver,
] as const;

export default UserResolvers;
