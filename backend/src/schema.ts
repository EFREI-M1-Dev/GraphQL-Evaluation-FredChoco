import gql from "graphql-tag";

export const typeDefs = gql`

directive @auth on FIELD_DEFINITION

# =========================================MODELS========================================================
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

# =========================================QUERIES========================================================

type Query {
  getUser(id: ID!): User @auth
  getPost(id: ID!): Post @auth
  getLike(id: ID!): Like @auth
  getDislike(id: ID!): Dislike @auth
  getComment(id: ID!): Comment @auth
 
  getAllLikes: [Like]! @auth
  getAllDislikes: [Dislike]! @auth
  getAllComments: [Comment]! @auth
  
  getTotalPostCount: Int! 
  getTotalCommentCount: Int! 
  getAppreciationRate: Float!
} 

# =========================================MUTATIONS========================================================

type Mutation {
  signInUser(username: String!, password: String!): UserSignInResponse!
  
  createUser(username: String!, password: String!, email: String!): UserCreateResponse!
  createLike(userId: ID!, postId: ID!): LikeCreateResponse! @auth
  createDislike(userId: ID!, postId: ID!): DislikeCreateResponse! @auth
  createComment(userId: ID!, postId: ID!, content: String!): CommentCreateResponse! @auth
  createPost(title: String!, content: String!, userId: ID!): PostCreateResponse! @auth
  
  deleteLike(id: ID!): LikeDeleteResponse! @auth
  deleteDislike(id: ID!): DislikeDeleteResponse! @auth
  deleteComment(id: ID!): CommentDeleteResponse! @auth
  deletePost(id: ID!): PostDeleteResponse! @auth
  deleteUser(id: ID!): UserDeleteResponse! @auth
  
  updateUser(id: ID!, input: UpdateUserInput!): UserUpdateResponse! @auth
  updateComment(userId: ID!, postId: ID!, content: String!): CommentUpdateResponse! @auth
}

# =========================================RESPONSES========================================================

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
}

type DislikeDeleteResponse {
  code: Int!
  success: Boolean!
  message: String!
}

type CommentDeleteResponse {
  code: Int!
  success: Boolean!
  message: String!
}

type CommentUpdateResponse {
  code: Int!
  success: Boolean!
  message: String!
  comment: Comment
}
`