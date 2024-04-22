import gql from "graphql-tag";

export const typeDefs = gql`
type User {
  id: ID!
  username: String!
}


# type Query {
# 
# }

type Mutation {
  createUser(username: String!, password: String!): CreateUserResponse
  signInUser(username: String!, password: String!): SignInUserResponse
}

type CreateUserResponse {
  code: Int!
  success: Boolean!
  message: String!
  user: User
}

type SignInUserResponse {
  code: Int!
  success: Boolean!
  message: String!
  token: String
}
`