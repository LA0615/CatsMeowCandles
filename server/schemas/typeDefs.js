import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
  }

  type AuthPayload {
    token: String
    user: User
  }
    type Query{
    _empty: String
    }

  type Mutation {
    signup(email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
  }
`;