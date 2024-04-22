import gql from "graphql-tag";

export const typeDefs = gql`
type User {
  id: ID!
  username: String!
}

type Post {
  id: ID!
  title: String!
  content: String!
  userId: ID!
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
  getEmpty: Boolean!
  getLike: Like!
  getDislike: Dislike!
  getComment: Comment!
  
  getAllLikes: [Like!]!
  getAllDislikes: [Dislike!]!
}

type Mutation {
  createUser(username: String!, password: String!, email: String!): CreateUserResponse
  signInUser(username: String!, password: String!): SignInUserResponse
  
  createLike(userId: ID!, postId: ID!): LikeCreateResponse
  createDislike(userId: ID!, postId: ID!): DislikeCreateResponse
  createComment(userId: ID!, postId: ID!, content: String!): CommentCreateResponse
  
  deleteLike(userId: ID!, postId: ID!): LikeDeleteResponse
  deleteDislike(userId: ID!, postId: ID!): DislikeDeleteResponse
  deleteComment(userId: ID!, postId: ID!): CommentDeleteResponse
  
  updateComment(userId: ID!, postId: ID!, content: String!): CommentUpdateResponse
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