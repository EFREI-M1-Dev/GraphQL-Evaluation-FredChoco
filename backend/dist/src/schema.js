import gql from "graphql-tag";
export const typeDefs = gql `

directive @auth on FIELD_DEFINITION
scalar Date
scalar Upload

# =========================================MODELS========================================================
type User {
  id: ID!
  username: String!
  email: String!
  imagePath: String!
}

type Post {
  id: ID!
  title: String!
  content: String!
  user: User! 
  createdAt: Date!
  imagePath: String!
}

type Like {
  id: ID!
  user: User!
  post: Post!
  createdAt: Date!
}

type Dislike {
  id: ID!
  user: User!
  post: Post!
  createdAt: Date!
}

type Comment {
    id: ID!
    user: User!
    post: Post!
    content: String!
    createdAt: Date!
}

type LatestPost {
    post: Post!
    likes: Int!
    dislikes: Int!
    comments: Int!
}

# =========================================QUERIES========================================================

type Query {
  getUser(id: ID!): User @auth
  getPost(id: ID!): LatestPost
  getLike(userId: ID!, postId: ID!): Like @auth
  getDislike(userId: ID!, postId: ID!): Dislike @auth
  getComment(id: ID!): Comment @auth
  getLoggedUser: User @auth
  getUserByUsername(username: String!): User
 
  getAllLikes: [Like]! @auth
  getAllDislikes: [Dislike]! @auth
  getAllComments: [Comment]! @auth
  getAllPosts: [Post]! @auth
  getLatestPosts: [LatestPost]!
  getUserPosts(id: ID!): [LatestPost]!
  getSearchPost(input: String!, sortPopularity: Boolean!): [LatestPost]! 
  getAllCommentsByPost(postId: ID!): [Comment]!
  getRandomPost: Post!
  getPostLikedByUser(id: ID!): [LatestPost]!
  
  getTotalPostCount: Int! 
  getTotalCommentCount: Int! 
  getAppreciationRate: Float!
  getUserCount: Int!
} 

# =========================================MUTATIONS========================================================

type Mutation {
  signInUser(username: String!, password: String!): UserSignInResponse!
  
  createUser(username: String!, password: String!, email: String!): UserCreateResponse!
  createLike(userId: ID!, postId: ID!): LikeCreateResponse! @auth
  createDislike(userId: ID!, postId: ID!): DislikeCreateResponse! @auth
  createComment(userId: ID!, postId: ID!, content: String!): CommentCreateResponse! @auth
  createPost(title: String!, content: String!, userId: ID!, file: Upload!): PostCreateResponse! @auth
  
  deleteLike(id: ID!): LikeDeleteResponse! @auth
  deleteDislike(id: ID!): DislikeDeleteResponse! @auth
  deleteComment(id: ID!): CommentDeleteResponse! @auth
  deletePost(id: ID!): PostDeleteResponse! @auth
  deleteUser(id: ID!): UserDeleteResponse! @auth
  
  updateUser(id: ID!, input: UpdateUserInput!): UserUpdateResponse! @auth
  updateComment(id: ID!, content: String!): CommentUpdateResponse! @auth
  updatePost(id: ID!, input: UpdatePostInput!): PostUpdateResponse! @auth
 
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
  user: User
}

type UserDeleteResponse {
  code: Int!
  success: Boolean!
  message: String!
}

input UpdateUserInput {
  username: String!
  email: String!
  file: Upload
}

input UpdatePostInput {
  title: String!
  content: String!
  file: Upload
}

type PostUpdateResponse {
  code: Int!
  success: Boolean!
  message: String!
  post: Post
}

type UserUpdateResponse {
  code: Int!
  success: Boolean!
  message: String!
  user: User
  token: String
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
`;
