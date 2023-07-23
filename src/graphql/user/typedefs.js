import { gql } from 'apollo-server';

//    "id": "903",
//    "firstName": "Enzo",
//    "lastName": "Barros",
//    "userName": "enzo_barros",
//    "indexRef": 18,
//    "createdAt": "2018-03-28T00:53:08.981Z"

export const userTypeDefs = gql`
  extend type Query {
    user(id: ID!): User!
    users(input: apiFiltersInput): [User!]!
  }

  extend type Mutation {
    createUser(data: CreateUserInput!): User!
    updateUser(userId: ID!, data: UpdateUserInput!): User!
    deleteUser(userId: ID!): Boolean!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    userName: String!
    indexRef: Int!
    createdAt: String!
    posts: [Post!]!
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    userName: String!
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    userName: String
  }
`;
