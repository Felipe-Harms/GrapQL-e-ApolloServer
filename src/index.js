import { hello } from './module.js';
console.log(hello());
import { ApolloServer, gql } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/shcema.js';
import fetch from 'node-fetch';

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers,
  context: () => {
    return {
      fetch,
    };
  },
});

server.listen(4000).then(({ url }) => {
  console.log(`Server Listening  on url ${url}`);
});
