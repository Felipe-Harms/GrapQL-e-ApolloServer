import { hello } from './module.js';
console.log(hello());
import { ApolloServer, gql } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/shcema.js';
import fetch from 'node-fetch';
import { context } from './graphql/context.js';
import { PostsAPI } from './graphql/post/datasources.js';

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers,
  context,
  dataSources: () => {
    return {
      postAPI: new PostsAPI(fetch),
    };
  },
});

server.listen(4000).then(({ url }) => {
  console.log(`Server Listening  on url ${url}`);
});
