import { PostsAPI } from '../post/datasources';
import { UsersAPI } from './datasources';

const users = async (_, { input }, { dataSources }) => {
  const users = await dataSources.userAPI.getUsers(input);
  return users;
};

const user = async (_, { id }, { dataSources }) => {
  const user = await dataSources.userAPI.getUser(id);
  return user;
};

const posts = ({ id }, _, { dataSources }) => {
  return dataSources.postAPI.batchLoadByUserId(id);
};

export const userResolvers = {
  Query: { user, users },
  User: { posts },
};
