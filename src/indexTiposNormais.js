import { hello } from './module.js';
console.log(hello());

import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      #O TIPO ID É MUITO PARECIDO COM STRINGS E SEMPRE É CONVERTIDO PARA UMA STRING(não confiar)
      # UTILIZAR O (!) SERVE PARA DEFINIR QUE O RESOLVE DA QUERY NÃO PODE SER NULO (NULL)
      id: ID
      name: String
      age: Int
      salary: Float
      fired: Boolean
      arrayString: [String]
    }
  `,
  resolvers: {
    Query: {
      id: () => 'kznvkjfe190291',
      name: () => 'Felipe De Freitas',
      age: () => 20,
      salary: () => 5234.68,
      fired: () => false,
      arrayString: () => ['A', 'b', 'KJ', 'Zx'],
    },
  },
});

server.listen(4000).then(({ url }) => {
  console.log(`Server Listening  on url ${url}`);
});
