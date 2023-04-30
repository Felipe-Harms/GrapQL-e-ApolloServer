import fetch from 'node-fetch';
import { getPosts } from './post/utils';
import { getUsers } from './user/utils';
import { makeUserDataLoader } from './user/dataloaders';
import { makePostDataLoader } from './post/dataloaders';

const API_URL = process.env.API_URL;

export const context = () => {
  return {
    userdataLoader: makeUserDataLoader(getUsers(fetch)),
    postdataLoader: makePostDataLoader(getPosts(fetch)),
    getUsers: getUsers(fetch),
    getPosts: getPosts(fetch),
  };
};
