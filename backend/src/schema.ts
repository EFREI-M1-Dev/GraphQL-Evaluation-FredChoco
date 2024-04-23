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
  user: User!
  post: Post!
}

type Dislike {
  id: ID!
  user: User!
  post: Post!
}

type Comment {
    id: ID!
    user: User!
    post: Post!
    content: String!
}

type Query {
  getUser(id: ID!): User
  getPost(id: ID!): Post
  
  getLike(id: ID!): Like
  getDislike(id: ID!): Dislike
  getComment(id: ID!): Comment
 
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
  createPost(title: String!, content: String!, userId: ID!): PostCreateResponse!
  
  
  deleteLike(id: ID!): LikeDeleteResponse!
  deleteDislike(id: ID!): DislikeDeleteResponse!
  deleteComment(id: ID!): CommentDeleteResponse!
  deletePost(id: ID!): PostDeleteResponse!
  
  updateComment(userId: ID!, postId: ID!, content: String!): CommentUpdateResponse!
}

type PostDeleteResponse {
    code: Int!
    success: Boolean!
    message: String!
}

type PostCreateResponse {
    code: Int!
    success: Boolean!
    message: String!
    post: Post
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