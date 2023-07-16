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
  return dataSources.postAPI.createPost(data);
};

const updatePost = async (_, { postId, data }, { dataSources }) => {
  return dataSources.postAPI.updatePost(postId, data);
};

const deletePost = async (_, { postId }, { dataSources }) => {
  return dataSources.postAPI.deletePost(postId);
};

//Field Resolvers

const user = async ({ userId }, _, { dataSources }) => {
  return dataSources.userAPI.batchLoadByPostId(userId);
};

export const postResolvers = {
  Query: { post, posts },
  Mutation: { createPost, updatePost, deletePost },
  Post: { user },
};
