/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nquery STATISTICS_Query {\n  getTotalPostCount\n  getTotalCommentCount\n  getAppreciationRate\n}\n": types.Statistics_QueryDocument,
    "\nquery LATEST_POST_Query {\n  getLatestPosts {\n  post {\n    id\n    title\n    createdAt\n    user {\n        username\n    }\n    }\n   likes \n   dislikes\n  }\n}\n": types.Latest_Post_QueryDocument,
    "\nmutation SignInUser($username: String!, $password: String!) {\n  signInUser(username: $username, password: $password) {\n    message\n    success\n    token\n  }\n}\n": types.SignInUserDocument,
    "\nquery USER_POST_QUERY($id: ID!) {\n  getUserPosts(id: $id) {\n    content\n    createdAt\n    id\n    title\n    user {\n      id\n    }\n  }\n}\n": types.User_Post_QueryDocument,
    "\nmutation createUser($username: String!, $password: String!, $email: String!) {\n  createUser(username: $username, password: $password, email: $email) {\n    code\n    message\n    success\n    user {\n      username\n      id\n    }\n  }\n}\n": types.CreateUserDocument,
    "\n  query USER_INFO_Query {\n    getLoggedUser {\n      id\n      email\n      username\n    }\n  }\n": types.User_Info_QueryDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery STATISTICS_Query {\n  getTotalPostCount\n  getTotalCommentCount\n  getAppreciationRate\n}\n"): (typeof documents)["\nquery STATISTICS_Query {\n  getTotalPostCount\n  getTotalCommentCount\n  getAppreciationRate\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery LATEST_POST_Query {\n  getLatestPosts {\n  post {\n    id\n    title\n    createdAt\n    user {\n        username\n    }\n    }\n   likes \n   dislikes\n  }\n}\n"): (typeof documents)["\nquery LATEST_POST_Query {\n  getLatestPosts {\n  post {\n    id\n    title\n    createdAt\n    user {\n        username\n    }\n    }\n   likes \n   dislikes\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation SignInUser($username: String!, $password: String!) {\n  signInUser(username: $username, password: $password) {\n    message\n    success\n    token\n  }\n}\n"): (typeof documents)["\nmutation SignInUser($username: String!, $password: String!) {\n  signInUser(username: $username, password: $password) {\n    message\n    success\n    token\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery USER_POST_QUERY($id: ID!) {\n  getUserPosts(id: $id) {\n    content\n    createdAt\n    id\n    title\n    user {\n      id\n    }\n  }\n}\n"): (typeof documents)["\nquery USER_POST_QUERY($id: ID!) {\n  getUserPosts(id: $id) {\n    content\n    createdAt\n    id\n    title\n    user {\n      id\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation createUser($username: String!, $password: String!, $email: String!) {\n  createUser(username: $username, password: $password, email: $email) {\n    code\n    message\n    success\n    user {\n      username\n      id\n    }\n  }\n}\n"): (typeof documents)["\nmutation createUser($username: String!, $password: String!, $email: String!) {\n  createUser(username: $username, password: $password, email: $email) {\n    code\n    message\n    success\n    user {\n      username\n      id\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query USER_INFO_Query {\n    getLoggedUser {\n      id\n      email\n      username\n    }\n  }\n"): (typeof documents)["\n  query USER_INFO_Query {\n    getLoggedUser {\n      id\n      email\n      username\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;