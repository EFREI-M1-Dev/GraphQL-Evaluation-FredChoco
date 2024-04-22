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


type Post {
  id: ID!
  title: String!
  content: String!
  user: User! 
}

type Like {
  id: ID!
  userId: ID!
  postId: ID!
}

type Dislike {
  id: ID!
  userId: ID!
  postId: ID!
}

type Comment {
    id: ID!
    userId: ID!
    postId: ID!
    content: String!
}

type Query {
  getUser(id: ID!): User
  getPost(id: ID!): Post
  
  getLike: Like!
  getDislike: Dislike!
  getComment: Comment!
  
  getAllLikes: [Like!]!
  getAllDislikes: [Dislike!]!
}

type Mutation {
  createUser(username: String!, password: String!, email: String!): UserCreateResponse!
  deleteUser(id: ID!): UserDeleteResponse!
  updateUser(id: ID!, input: UpdateUserInput!): UserUpdateResponse!
  signInUser(username: String!, password: String!): UserSignInResponse!
  
  createLike(userId: ID!, postId: ID!): LikeCreateResponse!
  createDislike(userId: ID!, postId: ID!): DislikeCreateResponse!
  createComment(userId: ID!, postId: ID!, content: String!): CommentCreateResponse!
  
  deleteLike(userId: ID!, postId: ID!): LikeDeleteResponse!
  deleteDislike(userId: ID!, postId: ID!): DislikeDeleteResponse!
  deleteComment(userId: ID!, postId: ID!): CommentDeleteResponse!
  
  updateComment(userId: ID!, postId: ID!, content: String!): CommentUpdateResponse!
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

type LikeCreateResponse {
  code: Int!
  success: Boolean!
  message: String!
  like: Like
}

type DislikeCreateResponse {
  code: Int!
  success: Boolean!
  message: String!
  dislike: Dislike
}

type CommentCreateResponse {
  code: Int!
  success: Boolean!
  message: String!
  comment: Comment
}

type LikeDeleteResponse {
  code: Int!
  success: Boolean!
  message: String!
  like: Like
}

type DislikeDeleteResponse {
  code: Int!
  success: Boolean!
  message: String!
  dislike: Dislike
}

type CommentDeleteResponse {
  code: Int!
  success: Boolean!
  message: String!
  comment: Comment
}

type CommentUpdateResponse {
  code: Int!
  success: Boolean!
  message: String!
  comment: Comment
}
`