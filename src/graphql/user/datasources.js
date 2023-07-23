import { RESTDataSource } from 'apollo-datasource-rest';
import { makeUserDataLoader } from './dataloaders';
import { create } from 'json-server';
import { createUserFn, deleteUserFn, updateUserFn } from './user-repository';

export class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL + '/users';
    this.dataLoader = makeUserDataLoader(this.getUsers.bind(this));
  }

  async getUsers(urlParams = {}) {
    return this.get('', urlParams, {
      cacheOptions: { ttl: 90 },
    });
  }

  async createUser(data) {
    return createUserFn(data, this);
  }

  async updateUser(userId, data) {
    return updateUserFn(userId, data, this);
  }

  async deleteUser(userId) {
    return deleteUserFn(userId, this);
  }

  async getUser(id) {
    return this.get(id, undefined, {
      cacheOptions: { ttl: 90 },
    });
  }

  batchLoadByPostId(id) {
    return this.dataLoader.load(id);
  }
}
