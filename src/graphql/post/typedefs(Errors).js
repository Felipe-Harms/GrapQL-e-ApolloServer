import { gql } from 'apollo-server';

//{
//  "id": "860",
//  "title": "Et voluptatem nulla omnis et iusto ullam.",
//  "body": "Ad non pariatur. Aut molestias accusamus et inventore sunt voluptates non doloremque illum. Perspiciatis et provident vel et fugiat dolores ut. Quos quibusdam impedit cupiditate quia at eaque quae.",
//  "userId": "29",
//  "indexRef": 10,
//  "createdAt": "2018-08-10T23:41:51.714Z"
//}

export const postTypeDefs = gql`
  extend type Query {
    post(id: ID!): PostResult!
    posts(input: apiFiltersInput): [Post!]!
  }

  union PostResult = PostNotFoundError | PostTimeoutError | Post

  interface PostError {
    statusCode: Int!
    message: String!
  }

  type PostNotFoundError implements PostError {
    statusCode: Int!
    message: String!
    postId: String!
  }

  type PostTimeoutError implements PostError {
    statusCode: Int!
    message: String!
    timeout: Int!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    #userId:String!
    #user: User!
    indexRef: Int!
    createdAt: String!
    unixTimestamp: String!
  }
`;
