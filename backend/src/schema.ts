import gql from "graphql-tag";

export const typeDefs = gql`
type UserJWT {
  id: ID!
  username: String!
}

type User {
  id: ID!
  username: String!
  email: String!
}


type Query {
  getUser(id: ID!): User
}

type Mutation {
  createUser(username: String!, password: String!, email: String!): UserCreateResponse!
  deleteUser(id: ID!): UserDeleteResponse!
  updateUser(id: ID!, input: UpdateUserInput!): UserUpdateResponse!
  
  signInUser(username: String!, password: String!): UserSignInResponse!
}

type UserCreateResponse {
  code: Int!
  success: Boolean!
  message: String!
  user: UserJWT
}

type UserDeleteResponse {
  code: Int!
  success: Boolean!
  message: String!
}

input UpdateUserInput {
  username: String!
  email: String!
  password: String!
}

type UserUpdateResponse {
  code: Int!
  success: Boolean!
  message: String!
  user: User
}


type UserSignInResponse {
  code: Int!
  success: Boolean!
  message: String!
  token: String
}
`