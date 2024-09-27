import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    firstName: String!
    lastName: String!
  }

  type AuthPayload {
    token: String
    user: User
  }
    type Query{
    _empty: String
    }

  type Mutation {
    signup(email: String!, firstName: String!, lastName: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
  }
`;