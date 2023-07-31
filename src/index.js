import { hello } from './module.js';
console.log(hello());
import { ApolloServer, gql } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/shcema.js';
import fetch from 'node-fetch';
import { context } from './graphql/context.js';
import { PostsAPI } from './graphql/post/datasources.js';
import { UsersAPI } from './graphql/user/datasources.js';
import { LoginAPI } from './graphql/login/datasources.js';

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers,
  context,
  dataSources: () => {
    return {
      postAPI: new PostsAPI(),
      userAPI: new UsersAPI(),
      loginAPI: new LoginAPI(),
    };
  },
});

server.listen(4000).then(({ url }) => {
  console.log(`Server Listening  on url ${url}`);
});
