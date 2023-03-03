import { hello } from './module.js';
console.log(hello());

import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      #O TIPO ID É MUITO PARECIDO COM STRINGS E SEMPRE É CONVERTIDO PARA UMA STRING(não confiar)
      # UTILIZAR O (!) SERVE PARA DEFINIR QUE O RESOLVE DA QUERY NÃO PODE SER NULO (NULL)
      user: User
    }

    type User {
      id: ID!
      userFirstName: String
      userLastName: String
      plan: String
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: 'sksckln239843',
          userFirstName: 'Felipe',
          userLastName: 'De Freitas',
          plan: 'Default',
        };
      },
    },
  },
});

server.listen(4000).then(({ url }) => {
  console.log(`Server Listening  on url ${url}`);
});
