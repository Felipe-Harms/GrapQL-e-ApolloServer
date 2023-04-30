import { fetch } from 'node-fetch';
import { DataLoader } from 'dataloader';

const posts = async (_, { input }, { dataSources }) => {
  const posts = dataSources.postAPI.getPosts(input);
  return posts;
};

const post = async (_, { id }, { dataSources }) => {
  const post = dataSources.postAPI.getPost(id);
  return post;
};

DataLoader = require('dataloader');

const userDataLoader = new DataLoader(async (ids) => {
  const urlQuery = ids.join('&id=');
  const url = 'http://localhost:3000/users/?id=' + urlQuery;
  const response = await fetch(url);
  const data = await response.json();
  return ids.map((id) => data.find((user) => user.id == id));
});

const user = async ({ userId }, _, { userDataLoader }) => {
  userDataLoader.load(userId);
  const response = await getUsers('/' + userId);
  return response.json();
};

export const postResolvers = {
  Query: { post, posts },
  Post: { user },
};
