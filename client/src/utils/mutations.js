import { gql } from '@apollo/client';

export const SIGNUP_USER = gql`
  mutation signup($email: String!, $firstName: String!, $lastName: String!, $password: String!) {
  signup(email: $email, firstName: $firstName, lastName: $lastName, password: $password) {
    token
    user {
      _id
      email
      firstName
      lastName
    }
  }
}
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        firstName
        lastName
      }
    }
  }
`;

export const FORGOT_PASSWORD = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;

export const RESET_PASSWORD = gql`
  mutation resetPassword($token: String!, $password: String!) {
    resetPassword(token: $token, password: $password)
  }
`;