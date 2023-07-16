import { PostsAPI } from '../post/datasources';
import { UsersAPI } from './datasources';
//Query Resolvers
const posts = async (_, { input }, { dataSources }) => {
  const posts = await dataSources.postAPI.getPosts(input);
  return posts;
};

const post = async (_, { id }, { dataSources }) => {
  const post = await dataSources.postAPI.getPost(id);
  return post;
};

//Mutation Resolvers

const createPost = async (_, { data }, { dataSources }) => {
  console.log(data);
  return dataSources.postAPI.createPost(data);
};

//Field Resolvers

const user = async ({ userId }, _, { dataSources }) => {
  return dataSources.userAPI.batchLoadByPostId(userId);
};

export const postResolvers = {
  Query: { post, posts },
  Mutation: { createPost },
  Post: { user },
};
