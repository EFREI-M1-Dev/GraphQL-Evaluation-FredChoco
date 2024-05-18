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
  postId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
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

export type Query = {
  __typename?: 'Query';
  getAllComments: Array<Maybe<Comment>>;
  getAllDislikes: Array<Maybe<Dislike>>;
  getAllLikes: Array<Maybe<Like>>;
  getAllPosts: Array<Maybe<Post>>;
  getAppreciationRate: Scalars['Float']['output'];
  getComment?: Maybe<Comment>;
  getDislike?: Maybe<Dislike>;
  getLatestPosts: Array<Maybe<LatestPost>>;
  getLike?: Maybe<Like>;
  getLikedPosts: Array<Maybe<Post>>;
  getLoggedUser?: Maybe<User>;
  getPost?: Maybe<Post>;
  getTotalCommentCount: Scalars['Int']['output'];
  getTotalPostCount: Scalars['Int']['output'];
  getUser?: Maybe<User>;
  getUserPosts: Array<Maybe<Post>>;
};


export type QueryGetCommentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetDislikeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetLikeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetLikedPostsArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserPostsArgs = {
  id: Scalars['ID']['input'];
};

export type UpdateUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type UserCreateResponse = {
  __typename?: 'UserCreateResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user: User;
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
  user?: Maybe<User>;
};

export type Statistics_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type Statistics_QueryQuery = { __typename?: 'Query', getTotalPostCount: number, getTotalCommentCount: number, getAppreciationRate: number };

export type Latest_Post_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type Latest_Post_QueryQuery = { __typename?: 'Query', getLatestPosts: Array<{ __typename?: 'LatestPost', likes: number, dislikes: number, post: { __typename?: 'Post', id: string, title: string, createdAt: any, user: { __typename?: 'User', username: string } } } | null> };

export type SignInUserMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignInUserMutation = { __typename?: 'Mutation', signInUser: { __typename?: 'UserSignInResponse', message: string, success: boolean, token?: string | null } };

export type User_Post_QueryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type User_Post_QueryQuery = { __typename?: 'Query', getUserPosts: Array<{ __typename?: 'Post', content: string, createdAt: any, id: string, title: string, user: { __typename?: 'User', id: string } } | null> };

export type CreateUserMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserCreateResponse', code: number, message: string, success: boolean, user: { __typename?: 'User', username: string, id: string } } };

export type User_Info_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type User_Info_QueryQuery = { __typename?: 'Query', getLoggedUser?: { __typename?: 'User', id: string, email: string, username: string } | null };


export const Statistics_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"STATISTICS_Query"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTotalPostCount"}},{"kind":"Field","name":{"kind":"Name","value":"getTotalCommentCount"}},{"kind":"Field","name":{"kind":"Name","value":"getAppreciationRate"}}]}}]} as unknown as DocumentNode<Statistics_QueryQuery, Statistics_QueryQueryVariables>;
export const Latest_Post_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LATEST_POST_Query"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLatestPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"likes"}},{"kind":"Field","name":{"kind":"Name","value":"dislikes"}}]}}]}}]} as unknown as DocumentNode<Latest_Post_QueryQuery, Latest_Post_QueryQueryVariables>;
export const SignInUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignInUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signInUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<SignInUserMutation, SignInUserMutationVariables>;
export const User_Post_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"USER_POST_QUERY"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<User_Post_QueryQuery, User_Post_QueryQueryVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const User_Info_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"USER_INFO_Query"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLoggedUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<User_Info_QueryQuery, User_Info_QueryQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
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
  postId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
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

export type Query = {
  __typename?: 'Query';
  getAllComments: Array<Maybe<Comment>>;
  getAllDislikes: Array<Maybe<Dislike>>;
  getAllLikes: Array<Maybe<Like>>;
  getAllPosts: Array<Maybe<Post>>;
  getAppreciationRate: Scalars['Float']['output'];
  getComment?: Maybe<Comment>;
  getDislike?: Maybe<Dislike>;
  getLatestPosts: Array<Maybe<LatestPost>>;
  getLike?: Maybe<Like>;
  getLikedPosts: Array<Maybe<Post>>;
  getLoggedUser?: Maybe<User>;
  getPost?: Maybe<Post>;
  getTotalCommentCount: Scalars['Int']['output'];
  getTotalPostCount: Scalars['Int']['output'];
  getUser?: Maybe<User>;
  getUserPosts: Array<Maybe<Post>>;
};


export type QueryGetCommentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetDislikeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetLikeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetLikedPostsArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserPostsArgs = {
  id: Scalars['ID']['input'];
};

export type UpdateUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type UserCreateResponse = {
  __typename?: 'UserCreateResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user: User;
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
  Query: ResolverTypeWrapper<{}>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  UpdateUserInput: UpdateUserInput;
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
  Query: {};
  Float: Scalars['Float']['output'];
  UpdateUserInput: UpdateUserInput;
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
  createPost?: Resolver<ResolversTypes['PostCreateResponse'], ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'content' | 'title' | 'userId'>>;
  createUser?: Resolver<ResolversTypes['UserCreateResponse'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'email' | 'password' | 'username'>>;
  deleteComment?: Resolver<ResolversTypes['CommentDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteCommentArgs, 'id'>>;
  deleteDislike?: Resolver<ResolversTypes['DislikeDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteDislikeArgs, 'id'>>;
  deleteLike?: Resolver<ResolversTypes['LikeDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteLikeArgs, 'id'>>;
  deletePost?: Resolver<ResolversTypes['PostDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeletePostArgs, 'id'>>;
  deleteUser?: Resolver<ResolversTypes['UserDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  signInUser?: Resolver<ResolversTypes['UserSignInResponse'], ParentType, ContextType, RequireFields<MutationSignInUserArgs, 'password' | 'username'>>;
  updateComment?: Resolver<ResolversTypes['CommentUpdateResponse'], ParentType, ContextType, RequireFields<MutationUpdateCommentArgs, 'content' | 'postId' | 'userId'>>;
  updateUser?: Resolver<ResolversTypes['UserUpdateResponse'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id' | 'input'>>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
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

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAllComments?: Resolver<Array<Maybe<ResolversTypes['Comment']>>, ParentType, ContextType>;
  getAllDislikes?: Resolver<Array<Maybe<ResolversTypes['Dislike']>>, ParentType, ContextType>;
  getAllLikes?: Resolver<Array<Maybe<ResolversTypes['Like']>>, ParentType, ContextType>;
  getAllPosts?: Resolver<Array<Maybe<ResolversTypes['Post']>>, ParentType, ContextType>;
  getAppreciationRate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  getComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<QueryGetCommentArgs, 'id'>>;
  getDislike?: Resolver<Maybe<ResolversTypes['Dislike']>, ParentType, ContextType, RequireFields<QueryGetDislikeArgs, 'id'>>;
  getLatestPosts?: Resolver<Array<Maybe<ResolversTypes['LatestPost']>>, ParentType, ContextType>;
  getLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType, RequireFields<QueryGetLikeArgs, 'id'>>;
  getLikedPosts?: Resolver<Array<Maybe<ResolversTypes['Post']>>, ParentType, ContextType, RequireFields<QueryGetLikedPostsArgs, 'id'>>;
  getLoggedUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  getPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryGetPostArgs, 'id'>>;
  getTotalCommentCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  getTotalPostCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, 'id'>>;
  getUserPosts?: Resolver<Array<Maybe<ResolversTypes['Post']>>, ParentType, ContextType, RequireFields<QueryGetUserPostsArgs, 'id'>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCreateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserCreateResponse'] = ResolversParentTypes['UserCreateResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
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
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserCreateResponse?: UserCreateResponseResolvers<ContextType>;
  UserDeleteResponse?: UserDeleteResponseResolvers<ContextType>;
  UserSignInResponse?: UserSignInResponseResolvers<ContextType>;
  UserUpdateResponse?: UserUpdateResponseResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  auth?: AuthDirectiveResolver<any, any, ContextType>;
};
