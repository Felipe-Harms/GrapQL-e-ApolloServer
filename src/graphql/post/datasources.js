import { RESTDataSource } from 'apollo-datasource-rest';
import { makePostDataLoader } from './dataloaders';

export class PostsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL + '/posts';
    this.dataLoader = makePostDataLoader(this.getPosts.bind(this));
  }

  async getPosts(urlParams = {}) {
    return this.get('', urlParams, {
      cacheOptions: { ttl: 90 },
    });
  }

  async getPost(id) {
    return this.get(id, undefined, {
      cacheOptions: { ttl: 90 },
    });
  }

  batchLoadByUserId(id) {
    return this.dataLoader.load(id);
  }
}