/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  post: Post;
  user: User;
};

export type CommentCreateResponse = {
  __typename?: 'CommentCreateResponse';
  code: Scalars['Int']['output'];
  comment?: Maybe<Comment>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type CommentDeleteResponse = {
  __typename?: 'CommentDeleteResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type CommentUpdateResponse = {
  __typename?: 'CommentUpdateResponse';
  code: Scalars['Int']['output'];
  comment?: Maybe<Comment>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Dislike = {
  __typename?: 'Dislike';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  post: Post;
  user: User;
};

export type DislikeCreateResponse = {
  __typename?: 'DislikeCreateResponse';
  code: Scalars['Int']['output'];
  dislike?: Maybe<Dislike>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type DislikeDeleteResponse = {
  __typename?: 'DislikeDeleteResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type LatestPost = {
  __typename?: 'LatestPost';
  comments: Scalars['Int']['output'];
  dislikes: Scalars['Int']['output'];
  likes: Scalars['Int']['output'];
  post: Post;
};

export type Like = {
  __typename?: 'Like';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  post: Post;
  user: User;
};

export type LikeCreateResponse = {
  __typename?: 'LikeCreateResponse';
  code: Scalars['Int']['output'];
  like?: Maybe<Like>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type LikeDeleteResponse = {
  __typename?: 'LikeDeleteResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: CommentCreateResponse;
  createDislike: DislikeCreateResponse;
  createLike: LikeCreateResponse;
  createPost: PostCreateResponse;
  createUser: UserCreateResponse;
  deleteComment: CommentDeleteResponse;
  deleteDislike: DislikeDeleteResponse;
  deleteLike: LikeDeleteResponse;
  deletePost: PostDeleteResponse;
  deleteUser: UserDeleteResponse;
  signInUser: UserSignInResponse;
  updateComment: CommentUpdateResponse;
  updatePost: PostUpdateResponse;
  updateUser: UserUpdateResponse;
};


export type MutationCreateCommentArgs = {
  content: Scalars['String']['input'];
  postId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreateDislikeArgs = {
  postId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreateLikeArgs = {
  postId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreatePostArgs = {
  content: Scalars['String']['input'];
  file: Scalars['Upload']['input'];
  title: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDislikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSignInUserArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationUpdateCommentArgs = {
  content: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePostInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  input: UpdateUserInput;
};

export type Post = {
  __typename?: 'Post';
  content: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  imagePath: Scalars['String']['output'];
  title: Scalars['String']['output'];
  user: User;
};

export type PostCreateResponse = {
  __typename?: 'PostCreateResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  post?: Maybe<Post>;
  success: Scalars['Boolean']['output'];
};

export type PostDeleteResponse = {
  __typename?: 'PostDeleteResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type PostUpdateResponse = {
  __typename?: 'PostUpdateResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  post?: Maybe<Post>;
  success: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllComments: Array<Maybe<Comment>>;
  getAllCommentsByPost: Array<Maybe<Comment>>;
  getAllDislikes: Array<Maybe<Dislike>>;
  getAllLikes: Array<Maybe<Like>>;
  getAllPosts: Array<Maybe<Post>>;
  getAppreciationRate: Scalars['Float']['output'];
  getComment?: Maybe<Comment>;
  getDislike?: Maybe<Dislike>;
  getLatestPosts: Array<Maybe<LatestPost>>;
  getLike?: Maybe<Like>;
  getLikesByUser: Array<Maybe<Like>>;
  getLoggedUser?: Maybe<User>;
  getPost?: Maybe<LatestPost>;
  getRandomPost: Post;
  getSearchPost: Array<Maybe<LatestPost>>;
  getTotalCommentCount: Scalars['Int']['output'];
  getTotalPostCount: Scalars['Int']['output'];
  getUser?: Maybe<User>;
  getUserByUsername?: Maybe<User>;
  getUserCount: Scalars['Int']['output'];
  getUserPosts: Array<Maybe<LatestPost>>;
};


export type QueryGetAllCommentsByPostArgs = {
  postId: Scalars['ID']['input'];
};


export type QueryGetCommentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetDislikeArgs = {
  postId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryGetLikeArgs = {
  postId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryGetLikesByUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetSearchPostArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserByUsernameArgs = {
  username: Scalars['String']['input'];
};


export type QueryGetUserPostsArgs = {
  id: Scalars['ID']['input'];
};

export type UpdatePostInput = {
  content: Scalars['String']['input'];
  file?: InputMaybe<Scalars['Upload']['input']>;
  title: Scalars['String']['input'];
};

export type UpdateUserInput = {
  email: Scalars['String']['input'];
  file?: InputMaybe<Scalars['Upload']['input']>;
  username: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imagePath: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type UserCreateResponse = {
  __typename?: 'UserCreateResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type UserSignInResponse = {
  __typename?: 'UserSignInResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type UserUpdateResponse = {
  __typename?: 'UserUpdateResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type Delete_Post_MutationMutationVariables = Exact<{
  deletePostId: Scalars['ID']['input'];
}>;


export type Delete_Post_MutationMutation = { __typename?: 'Mutation', deletePost: { __typename?: 'PostDeleteResponse', code: number, message: string, success: boolean } };

export type Random_Post_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type Random_Post_QueryQuery = { __typename?: 'Query', getRandomPost: { __typename?: 'Post', id: string } };

export type Statistics_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type Statistics_QueryQuery = { __typename?: 'Query', getTotalPostCount: number, getTotalCommentCount: number, getAppreciationRate: number, getUserCount: number };

export type CreatePostMutationVariables = Exact<{
  title: Scalars['String']['input'];
  content: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
  file: Scalars['Upload']['input'];
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'PostCreateResponse', code: number, message: string, success: boolean } };

export type UpdatePostMutationVariables = Exact<{
  updatePostId: Scalars['ID']['input'];
  input: UpdatePostInput;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'PostUpdateResponse', code: number, message: string, success: boolean } };

export type Latest_Post_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type Latest_Post_QueryQuery = { __typename?: 'Query', getLatestPosts: Array<{ __typename?: 'LatestPost', likes: number, dislikes: number, post: { __typename?: 'Post', id: string, title: string, createdAt: any, imagePath: string, user: { __typename?: 'User', username: string } } } | null> };

export type SignInUserMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignInUserMutation = { __typename?: 'Mutation', signInUser: { __typename?: 'UserSignInResponse', message: string, success: boolean, token?: string | null } };

export type Post_QueryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type Post_QueryQuery = { __typename?: 'Query', getPost?: { __typename?: 'LatestPost', comments: number, dislikes: number, likes: number, post: { __typename?: 'Post', content: string, createdAt: any, id: string, title: string, imagePath: string, user: { __typename?: 'User', email: string, id: string, username: string } } } | null };

export type Post_Comments_QueryQueryVariables = Exact<{
  postId: Scalars['ID']['input'];
}>;


export type Post_Comments_QueryQuery = { __typename?: 'Query', getAllCommentsByPost: Array<{ __typename?: 'Comment', content: string, createdAt: any, id: string, user: { __typename?: 'User', username: string, id: string } } | null> };

export type CreateCommentMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
  content: Scalars['String']['input'];
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'CommentCreateResponse', code: number, message: string, success: boolean, comment?: { __typename?: 'Comment', content: string, createdAt: any, user: { __typename?: 'User', username: string } } | null } };

export type UpdateCommentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  content: Scalars['String']['input'];
}>;


export type UpdateCommentMutation = { __typename?: 'Mutation', updateComment: { __typename?: 'CommentUpdateResponse', code: number, message: string, success: boolean, comment?: { __typename?: 'Comment', content: string, createdAt: any, user: { __typename?: 'User', username: string } } | null } };

export type DeleteCommentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', deleteComment: { __typename?: 'CommentDeleteResponse', code: number, message: string, success: boolean } };

export type CreateLikeMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
}>;


export type CreateLikeMutation = { __typename?: 'Mutation', createLike: { __typename?: 'LikeCreateResponse', code: number, message: string, success: boolean } };

export type DeleteLikeMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteLikeMutation = { __typename?: 'Mutation', deleteLike: { __typename?: 'LikeDeleteResponse', code: number, message: string, success: boolean } };

export type GetLikeQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
}>;


export type GetLikeQuery = { __typename?: 'Query', getLike?: { __typename?: 'Like', id: string } | null };

export type CreateDislikeMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
}>;


export type CreateDislikeMutation = { __typename?: 'Mutation', createDislike: { __typename?: 'DislikeCreateResponse', code: number, message: string, success: boolean } };

export type DeleteDislikeMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteDislikeMutation = { __typename?: 'Mutation', deleteDislike: { __typename?: 'DislikeDeleteResponse', code: number, message: string, success: boolean } };

export type GetDislikeQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
  postId: Scalars['ID']['input'];
}>;


export type GetDislikeQuery = { __typename?: 'Query', getDislike?: { __typename?: 'Dislike', id: string } | null };

export type User_Post_QueryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type User_Post_QueryQuery = { __typename?: 'Query', getUserPosts: Array<{ __typename?: 'LatestPost', likes: number, dislikes: number, post: { __typename?: 'Post', content: string, createdAt: any, id: string, title: string, imagePath: string, user: { __typename?: 'User', id: string, username: string } } } | null> };

export type User_Likes_QueryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type User_Likes_QueryQuery = { __typename?: 'Query', getLikesByUser: Array<{ __typename?: 'Like', post: { __typename?: 'Post', id: string, title: string, content: string, imagePath: string, user: { __typename?: 'User', username: string } } } | null> };

export type User_By_UsernameQueryVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type User_By_UsernameQuery = { __typename?: 'Query', getUserByUsername?: { __typename?: 'User', id: string, username: string, email: string, imagePath: string } | null };

export type CreateUserMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserCreateResponse', code: number, message: string, success: boolean, user?: { __typename?: 'User', username: string, id: string } | null } };

export type UpdateUserMutationVariables = Exact<{
  updateUserId: Scalars['ID']['input'];
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'UserUpdateResponse', code: number, message: string, success: boolean, token?: string | null } };

export type Search_Post_QueryQueryVariables = Exact<{
  input: Scalars['String']['input'];
}>;


export type Search_Post_QueryQuery = { __typename?: 'Query', getSearchPost: Array<{ __typename?: 'LatestPost', likes: number, dislikes: number, comments: number, post: { __typename?: 'Post', id: string, title: string, imagePath: string, user: { __typename?: 'User', username: string, id: string } } } | null> };

export type User_Info_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type User_Info_QueryQuery = { __typename?: 'Query', getLoggedUser?: { __typename?: 'User', id: string, email: string, username: string, imagePath: string } | null };


export const Delete_Post_MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DELETE_POST_Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deletePostId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deletePostId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<Delete_Post_MutationMutation, Delete_Post_MutationMutationVariables>;
export const Random_Post_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RANDOM_POST_QUERY"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRandomPost"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<Random_Post_QueryQuery, Random_Post_QueryQueryVariables>;
export const Statistics_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"STATISTICS_Query"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPostCount"}},{"kind":"Field","name":{"kind":"Name","value":"getTotalCommentCount"}},{"kind":"Field","name":{"kind":"Name","value":"getAppreciationRate"}},{"kind":"Field","name":{"kind":"Name","value":"getUserCount"}}]}}]} as unknown as DocumentNode<Statistics_QueryQuery, Statistics_QueryQueryVariables>;
export const CreatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<CreatePostMutation, CreatePostMutationVariables>;
export const UpdatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updatePostId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePostInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updatePostId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<UpdatePostMutation, UpdatePostMutationVariables>;
export const Latest_Post_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LATEST_POST_Query"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLatestPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"}}]}}]}}]} as unknown as DocumentNode<Latest_Post_QueryQuery, Latest_Post_QueryQueryVariables>;
export const SignInUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignInUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signInUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<SignInUserMutation, SignInUserMutationVariables>;
export const Post_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"POST_QUERY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Post_QueryQuery, Post_QueryQueryVariables>;
export const Post_Comments_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"POST_COMMENTS_QUERY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllCommentsByPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<Post_Comments_QueryQuery, Post_Comments_QueryQueryVariables>;
export const CreateCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}},{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"comment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateCommentMutation, CreateCommentMutationVariables>;
export const UpdateCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"comment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateCommentMutation, UpdateCommentMutationVariables>;
export const DeleteCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const CreateLikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createLike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLike"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<CreateLikeMutation, CreateLikeMutationVariables>;
export const DeleteLikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteLike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteLike"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<DeleteLikeMutation, DeleteLikeMutationVariables>;
export const GetLikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLike"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetLikeQuery, GetLikeQueryVariables>;
export const CreateDislikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createDislike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createDislike"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<CreateDislikeMutation, CreateDislikeMutationVariables>;
export const DeleteDislikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteDislike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteDislike"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<DeleteDislikeMutation, DeleteDislikeMutationVariables>;
export const GetDislikeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDislike"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDislike"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetDislikeQuery, GetDislikeQueryVariables>;
export const User_Post_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"USER_POST_QUERY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"}}]}}]}}]} as unknown as DocumentNode<User_Post_QueryQuery, User_Post_QueryQueryVariables>;
export const User_Likes_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"USER_LIKES_QUERY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLikesByUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]}}]} as unknown as DocumentNode<User_Likes_QueryQuery, User_Likes_QueryQueryVariables>;
export const User_By_UsernameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"USER_BY_USERNAME"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserByUsername"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}}]}}]}}]} as unknown as DocumentNode<User_By_UsernameQuery, User_By_UsernameQueryVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const Search_Post_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SEARCH_POST_QUERY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSearchPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"}},{"kind":"Field","name":{"kind":"Name","value":"comments"}}]}}]}}]} as unknown as DocumentNode<Search_Post_QueryQuery, Search_Post_QueryQueryVariables>;
export const User_Info_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"USER_INFO_Query"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLoggedUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}}]}}]}}]} as unknown as DocumentNode<User_Info_QueryQuery, User_Info_QueryQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  post: Post;
  user: User;
};

export type CommentCreateResponse = {
  __typename?: 'CommentCreateResponse';
  code: Scalars['Int']['output'];
  comment?: Maybe<Comment>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type CommentDeleteResponse = {
  __typename?: 'CommentDeleteResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type CommentUpdateResponse = {
  __typename?: 'CommentUpdateResponse';
  code: Scalars['Int']['output'];
  comment?: Maybe<Comment>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Dislike = {
  __typename?: 'Dislike';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  post: Post;
  user: User;
};

export type DislikeCreateResponse = {
  __typename?: 'DislikeCreateResponse';
  code: Scalars['Int']['output'];
  dislike?: Maybe<Dislike>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type DislikeDeleteResponse = {
  __typename?: 'DislikeDeleteResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type LatestPost = {
  __typename?: 'LatestPost';
  comments: Scalars['Int']['output'];
  dislikes: Scalars['Int']['output'];
  likes: Scalars['Int']['output'];
  post: Post;
};

export type Like = {
  __typename?: 'Like';
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  post: Post;
  user: User;
};

export type LikeCreateResponse = {
  __typename?: 'LikeCreateResponse';
  code: Scalars['Int']['output'];
  like?: Maybe<Like>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type LikeDeleteResponse = {
  __typename?: 'LikeDeleteResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: CommentCreateResponse;
  createDislike: DislikeCreateResponse;
  createLike: LikeCreateResponse;
  createPost: PostCreateResponse;
  createUser: UserCreateResponse;
  deleteComment: CommentDeleteResponse;
  deleteDislike: DislikeDeleteResponse;
  deleteLike: LikeDeleteResponse;
  deletePost: PostDeleteResponse;
  deleteUser: UserDeleteResponse;
  signInUser: UserSignInResponse;
  updateComment: CommentUpdateResponse;
  updatePost: PostUpdateResponse;
  updateUser: UserUpdateResponse;
};


export type MutationCreateCommentArgs = {
  content: Scalars['String']['input'];
  postId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreateDislikeArgs = {
  postId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreateLikeArgs = {
  postId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreatePostArgs = {
  content: Scalars['String']['input'];
  file: Scalars['Upload']['input'];
  title: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDislikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSignInUserArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationUpdateCommentArgs = {
  content: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID']['input'];
  input: UpdatePostInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  input: UpdateUserInput;
};

export type Post = {
  __typename?: 'Post';
  content: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  imagePath: Scalars['String']['output'];
  title: Scalars['String']['output'];
  user: User;
};

export type PostCreateResponse = {
  __typename?: 'PostCreateResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  post?: Maybe<Post>;
  success: Scalars['Boolean']['output'];
};

export type PostDeleteResponse = {
  __typename?: 'PostDeleteResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type PostUpdateResponse = {
  __typename?: 'PostUpdateResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  post?: Maybe<Post>;
  success: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllComments: Array<Maybe<Comment>>;
  getAllCommentsByPost: Array<Maybe<Comment>>;
  getAllDislikes: Array<Maybe<Dislike>>;
  getAllLikes: Array<Maybe<Like>>;
  getAllPosts: Array<Maybe<Post>>;
  getAppreciationRate: Scalars['Float']['output'];
  getComment?: Maybe<Comment>;
  getDislike?: Maybe<Dislike>;
  getLatestPosts: Array<Maybe<LatestPost>>;
  getLike?: Maybe<Like>;
  getLikesByUser: Array<Maybe<Like>>;
  getLoggedUser?: Maybe<User>;
  getPost?: Maybe<LatestPost>;
  getRandomPost: Post;
  getSearchPost: Array<Maybe<LatestPost>>;
  getTotalCommentCount: Scalars['Int']['output'];
  getTotalPostCount: Scalars['Int']['output'];
  getUser?: Maybe<User>;
  getUserByUsername?: Maybe<User>;
  getUserCount: Scalars['Int']['output'];
  getUserPosts: Array<Maybe<LatestPost>>;
};


export type QueryGetAllCommentsByPostArgs = {
  postId: Scalars['ID']['input'];
};


export type QueryGetCommentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetDislikeArgs = {
  postId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryGetLikeArgs = {
  postId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryGetLikesByUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetSearchPostArgs = {
  input: Scalars['String']['input'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserByUsernameArgs = {
  username: Scalars['String']['input'];
};


export type QueryGetUserPostsArgs = {
  id: Scalars['ID']['input'];
};

export type UpdatePostInput = {
  content: Scalars['String']['input'];
  file?: InputMaybe<Scalars['Upload']['input']>;
  title: Scalars['String']['input'];
};

export type UpdateUserInput = {
  email: Scalars['String']['input'];
  file?: InputMaybe<Scalars['Upload']['input']>;
  username: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imagePath: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type UserCreateResponse = {
  __typename?: 'UserCreateResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type UserSignInResponse = {
  __typename?: 'UserSignInResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type UserUpdateResponse = {
  __typename?: 'UserUpdateResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Comment: ResolverTypeWrapper<Comment>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  CommentCreateResponse: ResolverTypeWrapper<CommentCreateResponse>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CommentDeleteResponse: ResolverTypeWrapper<CommentDeleteResponse>;
  CommentUpdateResponse: ResolverTypeWrapper<CommentUpdateResponse>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  Dislike: ResolverTypeWrapper<Dislike>;
  DislikeCreateResponse: ResolverTypeWrapper<DislikeCreateResponse>;
  DislikeDeleteResponse: ResolverTypeWrapper<DislikeDeleteResponse>;
  LatestPost: ResolverTypeWrapper<LatestPost>;
  Like: ResolverTypeWrapper<Like>;
  LikeCreateResponse: ResolverTypeWrapper<LikeCreateResponse>;
  LikeDeleteResponse: ResolverTypeWrapper<LikeDeleteResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  Post: ResolverTypeWrapper<Post>;
  PostCreateResponse: ResolverTypeWrapper<PostCreateResponse>;
  PostDeleteResponse: ResolverTypeWrapper<PostDeleteResponse>;
  PostUpdateResponse: ResolverTypeWrapper<PostUpdateResponse>;
  Query: ResolverTypeWrapper<{}>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  UpdatePostInput: UpdatePostInput;
  UpdateUserInput: UpdateUserInput;
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>;
  User: ResolverTypeWrapper<User>;
  UserCreateResponse: ResolverTypeWrapper<UserCreateResponse>;
  UserDeleteResponse: ResolverTypeWrapper<UserDeleteResponse>;
  UserSignInResponse: ResolverTypeWrapper<UserSignInResponse>;
  UserUpdateResponse: ResolverTypeWrapper<UserUpdateResponse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Comment: Comment;
  String: Scalars['String']['output'];
  ID: Scalars['ID']['output'];
  CommentCreateResponse: CommentCreateResponse;
  Int: Scalars['Int']['output'];
  Boolean: Scalars['Boolean']['output'];
  CommentDeleteResponse: CommentDeleteResponse;
  CommentUpdateResponse: CommentUpdateResponse;
  Date: Scalars['Date']['output'];
  Dislike: Dislike;
  DislikeCreateResponse: DislikeCreateResponse;
  DislikeDeleteResponse: DislikeDeleteResponse;
  LatestPost: LatestPost;
  Like: Like;
  LikeCreateResponse: LikeCreateResponse;
  LikeDeleteResponse: LikeDeleteResponse;
  Mutation: {};
  Post: Post;
  PostCreateResponse: PostCreateResponse;
  PostDeleteResponse: PostDeleteResponse;
  PostUpdateResponse: PostUpdateResponse;
  Query: {};
  Float: Scalars['Float']['output'];
  UpdatePostInput: UpdatePostInput;
  UpdateUserInput: UpdateUserInput;
  Upload: Scalars['Upload']['output'];
  User: User;
  UserCreateResponse: UserCreateResponse;
  UserDeleteResponse: UserDeleteResponse;
  UserSignInResponse: UserSignInResponse;
  UserUpdateResponse: UserUpdateResponse;
};

export type AuthDirectiveArgs = { };

export type AuthDirectiveResolver<Result, Parent, ContextType = any, Args = AuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentCreateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentCreateResponse'] = ResolversParentTypes['CommentCreateResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentDeleteResponse'] = ResolversParentTypes['CommentDeleteResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentUpdateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentUpdateResponse'] = ResolversParentTypes['CommentUpdateResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DislikeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Dislike'] = ResolversParentTypes['Dislike']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DislikeCreateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DislikeCreateResponse'] = ResolversParentTypes['DislikeCreateResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dislike?: Resolver<Maybe<ResolversTypes['Dislike']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DislikeDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DislikeDeleteResponse'] = ResolversParentTypes['DislikeDeleteResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LatestPostResolvers<ContextType = any, ParentType extends ResolversParentTypes['LatestPost'] = ResolversParentTypes['LatestPost']> = {
  comments?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dislikes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  likes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeCreateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LikeCreateResponse'] = ResolversParentTypes['LikeCreateResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  like?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LikeDeleteResponse'] = ResolversParentTypes['LikeDeleteResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createComment?: Resolver<ResolversTypes['CommentCreateResponse'], ParentType, ContextType, RequireFields<MutationCreateCommentArgs, 'content' | 'postId' | 'userId'>>;
  createDislike?: Resolver<ResolversTypes['DislikeCreateResponse'], ParentType, ContextType, RequireFields<MutationCreateDislikeArgs, 'postId' | 'userId'>>;
  createLike?: Resolver<ResolversTypes['LikeCreateResponse'], ParentType, ContextType, RequireFields<MutationCreateLikeArgs, 'postId' | 'userId'>>;
  createPost?: Resolver<ResolversTypes['PostCreateResponse'], ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'content' | 'file' | 'title' | 'userId'>>;
  createUser?: Resolver<ResolversTypes['UserCreateResponse'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'email' | 'password' | 'username'>>;
  deleteComment?: Resolver<ResolversTypes['CommentDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteCommentArgs, 'id'>>;
  deleteDislike?: Resolver<ResolversTypes['DislikeDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteDislikeArgs, 'id'>>;
  deleteLike?: Resolver<ResolversTypes['LikeDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteLikeArgs, 'id'>>;
  deletePost?: Resolver<ResolversTypes['PostDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeletePostArgs, 'id'>>;
  deleteUser?: Resolver<ResolversTypes['UserDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  signInUser?: Resolver<ResolversTypes['UserSignInResponse'], ParentType, ContextType, RequireFields<MutationSignInUserArgs, 'password' | 'username'>>;
  updateComment?: Resolver<ResolversTypes['CommentUpdateResponse'], ParentType, ContextType, RequireFields<MutationUpdateCommentArgs, 'content' | 'id'>>;
  updatePost?: Resolver<ResolversTypes['PostUpdateResponse'], ParentType, ContextType, RequireFields<MutationUpdatePostArgs, 'id' | 'input'>>;
  updateUser?: Resolver<ResolversTypes['UserUpdateResponse'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id' | 'input'>>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imagePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostCreateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostCreateResponse'] = ResolversParentTypes['PostCreateResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostDeleteResponse'] = ResolversParentTypes['PostDeleteResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostUpdateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostUpdateResponse'] = ResolversParentTypes['PostUpdateResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAllComments?: Resolver<Array<Maybe<ResolversTypes['Comment']>>, ParentType, ContextType>;
  getAllCommentsByPost?: Resolver<Array<Maybe<ResolversTypes['Comment']>>, ParentType, ContextType, RequireFields<QueryGetAllCommentsByPostArgs, 'postId'>>;
  getAllDislikes?: Resolver<Array<Maybe<ResolversTypes['Dislike']>>, ParentType, ContextType>;
  getAllLikes?: Resolver<Array<Maybe<ResolversTypes['Like']>>, ParentType, ContextType>;
  getAllPosts?: Resolver<Array<Maybe<ResolversTypes['Post']>>, ParentType, ContextType>;
  getAppreciationRate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  getComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<QueryGetCommentArgs, 'id'>>;
  getDislike?: Resolver<Maybe<ResolversTypes['Dislike']>, ParentType, ContextType, RequireFields<QueryGetDislikeArgs, 'postId' | 'userId'>>;
  getLatestPosts?: Resolver<Array<Maybe<ResolversTypes['LatestPost']>>, ParentType, ContextType>;
  getLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType, RequireFields<QueryGetLikeArgs, 'postId' | 'userId'>>;
  getLikesByUser?: Resolver<Array<Maybe<ResolversTypes['Like']>>, ParentType, ContextType, RequireFields<QueryGetLikesByUserArgs, 'id'>>;
  getLoggedUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  getPost?: Resolver<Maybe<ResolversTypes['LatestPost']>, ParentType, ContextType, RequireFields<QueryGetPostArgs, 'id'>>;
  getRandomPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  getSearchPost?: Resolver<Array<Maybe<ResolversTypes['LatestPost']>>, ParentType, ContextType, RequireFields<QueryGetSearchPostArgs, 'input'>>;
  getTotalCommentCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  getTotalPostCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, 'id'>>;
  getUserByUsername?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserByUsernameArgs, 'username'>>;
  getUserCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  getUserPosts?: Resolver<Array<Maybe<ResolversTypes['LatestPost']>>, ParentType, ContextType, RequireFields<QueryGetUserPostsArgs, 'id'>>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imagePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCreateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCreateResponse'] = ResolversParentTypes['UserCreateResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserDeleteResponse'] = ResolversParentTypes['UserDeleteResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserSignInResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserSignInResponse'] = ResolversParentTypes['UserSignInResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserUpdateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserUpdateResponse'] = ResolversParentTypes['UserUpdateResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Comment?: CommentResolvers<ContextType>;
  CommentCreateResponse?: CommentCreateResponseResolvers<ContextType>;
  CommentDeleteResponse?: CommentDeleteResponseResolvers<ContextType>;
  CommentUpdateResponse?: CommentUpdateResponseResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Dislike?: DislikeResolvers<ContextType>;
  DislikeCreateResponse?: DislikeCreateResponseResolvers<ContextType>;
  DislikeDeleteResponse?: DislikeDeleteResponseResolvers<ContextType>;
  LatestPost?: LatestPostResolvers<ContextType>;
  Like?: LikeResolvers<ContextType>;
  LikeCreateResponse?: LikeCreateResponseResolvers<ContextType>;
  LikeDeleteResponse?: LikeDeleteResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostCreateResponse?: PostCreateResponseResolvers<ContextType>;
  PostDeleteResponse?: PostDeleteResponseResolvers<ContextType>;
  PostUpdateResponse?: PostUpdateResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserCreateResponse?: UserCreateResponseResolvers<ContextType>;
  UserDeleteResponse?: UserDeleteResponseResolvers<ContextType>;
  UserSignInResponse?: UserSignInResponseResolvers<ContextType>;
  UserUpdateResponse?: UserUpdateResponseResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  auth?: AuthDirectiveResolver<any, any, ContextType>;
};
