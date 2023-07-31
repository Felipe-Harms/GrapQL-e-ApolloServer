import { gql } from 'apollo-server';
import { userTypeDefs } from './user/typedefs';
import { userResolvers } from './user/resolvers';
import { postTypeDefs } from './post/typedefs';
import { postResolvers } from './post/resolvers';
import { apiFiltersTypedefs } from './api-filters/typedesfs';
import { apiFiltersResolvers } from './api-filters/resolvers';
import { loginResolvers } from './login/resolvers';
import { loginTypedefs } from './login/typedefs';

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
    hi: String
  }

  type Mutation {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    hi: () => 'Hi de novo',
    _empty: () => true,
  },
  Mutation: {
    _empty: () => true,
  },
};

export const typeDefs = [
  rootTypeDefs,
  userTypeDefs,
  postTypeDefs,
  apiFiltersTypedefs,
  loginTypedefs,
];
export const resolvers = [
  rootResolvers,
  userResolvers,
  postResolvers,
  apiFiltersResolvers,
  loginResolvers,
];
