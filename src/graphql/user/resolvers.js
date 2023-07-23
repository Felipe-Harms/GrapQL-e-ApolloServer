import { PostsAPI } from '../post/datasources';
import { UsersAPI } from './datasources';
//query resolvers
const users = async (_, { input }, { dataSources }) => {
  const users = await dataSources.userAPI.getUsers(input);
  return users;
};

const user = async (_, { id }, { dataSources }) => {
  const user = await dataSources.userAPI.getUser(id);
  return user;
};

//mutation resolvers

const createUser = async (_, { data }, { dataSources }) => {
  return dataSources.userAPI.createUser(data);
};

const updateUser = async (_, { userId, data }, { dataSources }) => {
  return dataSources.userAPI.updateUser(userId, data);
};

const deleteUser = async (_, { userId }, { dataSources }) => {
  return dataSources.userAPI.deleteUser(userId);
};

//field resolvers
const posts = ({ id }, _, { dataSources }) => {
  return dataSources.postAPI.batchLoadByUserId(id);
};

export const userResolvers = {
  Query: { user, users },
  Mutation: { createUser, updateUser, deleteUser },
  User: { posts },
};
