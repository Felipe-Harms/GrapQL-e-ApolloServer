import { RESTDataSource } from 'apollo-datasource-rest';
import { makeUserDataLoader } from './dataloaders';

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

  async getUser(id) {
    return this.get(id, undefined, {
      cacheOptions: { ttl: 90 },
    });
  }

  batchLoadByPostId(id) {
    return this.dataLoader.load(id);
  }
}
