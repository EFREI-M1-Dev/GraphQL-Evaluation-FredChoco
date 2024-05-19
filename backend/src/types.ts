import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { DataSourceContext } from './context';
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
  getLikesByUser: Array<Maybe<Like>>;
  getLoggedUser?: Maybe<User>;
  getPost?: Maybe<Post>;
  getSearchPost: Array<Maybe<Post>>;
  getTotalCommentCount: Scalars['Int']['output'];
  getTotalPostCount: Scalars['Int']['output'];
  getUser?: Maybe<User>;
  getUserByUsername?: Maybe<User>;
  getUserCount: Scalars['Int']['output'];
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Comment: ResolverTypeWrapper<Comment>;
  CommentCreateResponse: ResolverTypeWrapper<CommentCreateResponse>;
  CommentDeleteResponse: ResolverTypeWrapper<CommentDeleteResponse>;
  CommentUpdateResponse: ResolverTypeWrapper<CommentUpdateResponse>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  Dislike: ResolverTypeWrapper<Dislike>;
  DislikeCreateResponse: ResolverTypeWrapper<DislikeCreateResponse>;
  DislikeDeleteResponse: ResolverTypeWrapper<DislikeDeleteResponse>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  LatestPost: ResolverTypeWrapper<LatestPost>;
  Like: ResolverTypeWrapper<Like>;
  LikeCreateResponse: ResolverTypeWrapper<LikeCreateResponse>;
  LikeDeleteResponse: ResolverTypeWrapper<LikeDeleteResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  Post: ResolverTypeWrapper<Post>;
  PostCreateResponse: ResolverTypeWrapper<PostCreateResponse>;
  PostDeleteResponse: ResolverTypeWrapper<PostDeleteResponse>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateUserInput: UpdateUserInput;
  User: ResolverTypeWrapper<User>;
  UserCreateResponse: ResolverTypeWrapper<UserCreateResponse>;
  UserDeleteResponse: ResolverTypeWrapper<UserDeleteResponse>;
  UserSignInResponse: ResolverTypeWrapper<UserSignInResponse>;
  UserUpdateResponse: ResolverTypeWrapper<UserUpdateResponse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Comment: Comment;
  CommentCreateResponse: CommentCreateResponse;
  CommentDeleteResponse: CommentDeleteResponse;
  CommentUpdateResponse: CommentUpdateResponse;
  Date: Scalars['Date']['output'];
  Dislike: Dislike;
  DislikeCreateResponse: DislikeCreateResponse;
  DislikeDeleteResponse: DislikeDeleteResponse;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  LatestPost: LatestPost;
  Like: Like;
  LikeCreateResponse: LikeCreateResponse;
  LikeDeleteResponse: LikeDeleteResponse;
  Mutation: {};
  Post: Post;
  PostCreateResponse: PostCreateResponse;
  PostDeleteResponse: PostDeleteResponse;
  Query: {};
  String: Scalars['String']['output'];
  UpdateUserInput: UpdateUserInput;
  User: User;
  UserCreateResponse: UserCreateResponse;
  UserDeleteResponse: UserDeleteResponse;
  UserSignInResponse: UserSignInResponse;
  UserUpdateResponse: UserUpdateResponse;
};

export type AuthDirectiveArgs = { };

export type AuthDirectiveResolver<Result, Parent, ContextType = DataSourceContext, Args = AuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CommentResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentCreateResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CommentCreateResponse'] = ResolversParentTypes['CommentCreateResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentDeleteResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CommentDeleteResponse'] = ResolversParentTypes['CommentDeleteResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentUpdateResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CommentUpdateResponse'] = ResolversParentTypes['CommentUpdateResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DislikeResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Dislike'] = ResolversParentTypes['Dislike']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DislikeCreateResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['DislikeCreateResponse'] = ResolversParentTypes['DislikeCreateResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  dislike?: Resolver<Maybe<ResolversTypes['Dislike']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DislikeDeleteResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['DislikeDeleteResponse'] = ResolversParentTypes['DislikeDeleteResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LatestPostResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['LatestPost'] = ResolversParentTypes['LatestPost']> = {
  dislikes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  likes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like']> = {
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeCreateResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['LikeCreateResponse'] = ResolversParentTypes['LikeCreateResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  like?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeDeleteResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['LikeDeleteResponse'] = ResolversParentTypes['LikeDeleteResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
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

export type PostResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostCreateResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PostCreateResponse'] = ResolversParentTypes['PostCreateResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostDeleteResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PostDeleteResponse'] = ResolversParentTypes['PostDeleteResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAllComments?: Resolver<Array<Maybe<ResolversTypes['Comment']>>, ParentType, ContextType>;
  getAllDislikes?: Resolver<Array<Maybe<ResolversTypes['Dislike']>>, ParentType, ContextType>;
  getAllLikes?: Resolver<Array<Maybe<ResolversTypes['Like']>>, ParentType, ContextType>;
  getAllPosts?: Resolver<Array<Maybe<ResolversTypes['Post']>>, ParentType, ContextType>;
  getAppreciationRate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  getComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<QueryGetCommentArgs, 'id'>>;
  getDislike?: Resolver<Maybe<ResolversTypes['Dislike']>, ParentType, ContextType, RequireFields<QueryGetDislikeArgs, 'id'>>;
  getLatestPosts?: Resolver<Array<Maybe<ResolversTypes['LatestPost']>>, ParentType, ContextType>;
  getLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType, RequireFields<QueryGetLikeArgs, 'id'>>;
  getLikesByUser?: Resolver<Array<Maybe<ResolversTypes['Like']>>, ParentType, ContextType, RequireFields<QueryGetLikesByUserArgs, 'id'>>;
  getLoggedUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  getPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryGetPostArgs, 'id'>>;
  getSearchPost?: Resolver<Array<Maybe<ResolversTypes['Post']>>, ParentType, ContextType, RequireFields<QueryGetSearchPostArgs, 'input'>>;
  getTotalCommentCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  getTotalPostCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, 'id'>>;
  getUserByUsername?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserByUsernameArgs, 'username'>>;
  getUserCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  getUserPosts?: Resolver<Array<Maybe<ResolversTypes['Post']>>, ParentType, ContextType, RequireFields<QueryGetUserPostsArgs, 'id'>>;
};

export type UserResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCreateResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['UserCreateResponse'] = ResolversParentTypes['UserCreateResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserDeleteResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['UserDeleteResponse'] = ResolversParentTypes['UserDeleteResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserSignInResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['UserSignInResponse'] = ResolversParentTypes['UserSignInResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserUpdateResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['UserUpdateResponse'] = ResolversParentTypes['UserUpdateResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
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

export type DirectiveResolvers<ContextType = DataSourceContext> = {
  auth?: AuthDirectiveResolver<any, any, ContextType>;
};
