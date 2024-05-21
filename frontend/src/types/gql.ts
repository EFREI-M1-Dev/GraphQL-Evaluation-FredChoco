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
    "\n    mutation DELETE_POST_Mutation($deletePostId: ID!) {\n      deletePost(id: $deletePostId) {\n        code\n        message\n        success\n      }\n    }\n    ": types.Delete_Post_MutationDocument,
    "\nquery RANDOM_POST_QUERY {\n  getRandomPost {\n    id\n  }\n}\n": types.Random_Post_QueryDocument,
    "\nquery STATISTICS_Query {\n  getTotalPostCount\n  getTotalCommentCount\n  getAppreciationRate\n  getUserCount\n}\n": types.Statistics_QueryDocument,
    "\nmutation CreatePost($title: String!, $content: String!, $userId: ID!, $file: Upload!) {\n  createPost(title: $title, content: $content, userId: $userId, file: $file) {\n    code\n    message\n    success\n  }\n}\n": types.CreatePostDocument,
    "\nmutation UpdatePost($updatePostId: ID!, $input: UpdatePostInput!) {\n  updatePost(id: $updatePostId, input: $input) {\n    code\n    message\n    success\n  }\n}\n": types.UpdatePostDocument,
    "\nquery LATEST_POST_Query {\n  getLatestPosts {\n  post {\n    id\n    title\n    createdAt\n    imagePath\n    user {\n        username\n    }\n  }\n  likes \n  dislikes\n  }\n}\n": types.Latest_Post_QueryDocument,
    "\nmutation SignInUser($username: String!, $password: String!) {\n  signInUser(username: $username, password: $password) {\n    message\n    success\n    token\n  }\n}\n": types.SignInUserDocument,
    "\nquery POST_QUERY($id: ID!) {\n  getPost(id: $id) {\n    comments\n    dislikes\n    likes\n    post {\n      content\n      createdAt\n      id\n      title\n      imagePath\n      user {\n        email\n        id\n        username\n      }\n    }\n  }\n}\n": types.Post_QueryDocument,
    "\nquery POST_COMMENTS_QUERY($postId: ID!) {\n  getAllCommentsByPost(postId: $postId) {\n    content\n    createdAt\n    id\n    user {\n      username\n      id\n      imagePath\n    }\n  }\n}\n": types.Post_Comments_QueryDocument,
    "\nmutation createComment($userId: ID!, $postId: ID!, $content: String!) {\n    createComment(userId: $userId, postId: $postId, content: $content) {\n        code\n        message\n        success\n        comment {\n            content\n            createdAt\n            user {\n                username\n            }\n        }\n    }\n}\n": types.CreateCommentDocument,
    "\nmutation updateComment($id: ID!, $content: String!) {\n    updateComment(id: $id, content: $content) {\n        code\n        message\n        success\n        comment {\n            content\n            createdAt\n            user {\n                username\n            }\n        }\n    }\n}\n": types.UpdateCommentDocument,
    "\nmutation deleteComment($id: ID!) {\n    deleteComment(id: $id) {\n        code\n        message\n        success\n    }\n}\n": types.DeleteCommentDocument,
    "\nmutation createLike($userId: ID!, $postId: ID!) {\n    createLike(userId: $userId, postId: $postId) {\n        code\n        message\n        success\n    }\n}\n": types.CreateLikeDocument,
    "\nmutation deleteLike($id: ID!) {\n    deleteLike(id: $id) {\n        code\n        message\n        success\n    }\n}\n": types.DeleteLikeDocument,
    "\nquery getLike($userId: ID!, $postId: ID!) {\n    getLike(userId: $userId, postId: $postId) {\n        id\n    }\n}\n": types.GetLikeDocument,
    "\nmutation createDislike($userId: ID!, $postId: ID!) {\n    createDislike(userId: $userId, postId: $postId) {\n        code\n        message\n        success\n    }\n}\n": types.CreateDislikeDocument,
    "\nmutation deleteDislike($id: ID!) {\n    deleteDislike(id: $id) {\n        code\n        message\n        success\n    }\n}\n": types.DeleteDislikeDocument,
    "\nquery getDislike($userId: ID!, $postId: ID!) {\n    getDislike(userId: $userId, postId: $postId) {\n        id\n    }\n}\n": types.GetDislikeDocument,
    "\nquery USER_POST_QUERY($id: ID!) {\n    getUserPosts(id: $id) {\n        post {\n            content\n            createdAt\n            id\n            title\n            imagePath\n            user {\n                id\n                username\n            }\n        }\n        likes\n        dislikes\n    }\n}\n": types.User_Post_QueryDocument,
    "\nquery USER_LIKES_QUERY($id: ID!) {\n  getLikesByUser(id: $id) {\n    post {\n      id\n      title\n      content\n      imagePath\n      user {\n        username\n      }\n    }\n  }\n}\n": types.User_Likes_QueryDocument,
    "\nquery USER_BY_USERNAME($username: String!) {\n  getUserByUsername(username: $username) {\n    id\n    username\n    email\n    imagePath\n  }\n}\n": types.User_By_UsernameDocument,
    "\nmutation createUser($username: String!, $password: String!, $email: String!) {\n  createUser(username: $username, password: $password, email: $email) {\n    code\n    message\n    success\n    user {\n      username\n      id\n    }\n  }\n}\n": types.CreateUserDocument,
    "\nmutation UpdateUser($updateUserId: ID!, $input: UpdateUserInput!) {\n  updateUser(id: $updateUserId, input: $input) {\n    code\n    message\n    success\n    token\n  }\n}\n": types.UpdateUserDocument,
    "\nquery SEARCH_POST_QUERY($input: String!) {\n  getSearchPost(input: $input) {\n    post {\n      id\n      title\n      imagePath\n      user {\n        username\n        id\n      }\n    }\n    likes\n    dislikes\n    comments\n  }\n}\n": types.Search_Post_QueryDocument,
    "\n  query USER_INFO_Query {\n    getLoggedUser {\n      id\n      email\n      username\n      imagePath\n    }\n  }\n": types.User_Info_QueryDocument,
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
export function gql(source: "\n    mutation DELETE_POST_Mutation($deletePostId: ID!) {\n      deletePost(id: $deletePostId) {\n        code\n        message\n        success\n      }\n    }\n    "): (typeof documents)["\n    mutation DELETE_POST_Mutation($deletePostId: ID!) {\n      deletePost(id: $deletePostId) {\n        code\n        message\n        success\n      }\n    }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery RANDOM_POST_QUERY {\n  getRandomPost {\n    id\n  }\n}\n"): (typeof documents)["\nquery RANDOM_POST_QUERY {\n  getRandomPost {\n    id\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery STATISTICS_Query {\n  getTotalPostCount\n  getTotalCommentCount\n  getAppreciationRate\n  getUserCount\n}\n"): (typeof documents)["\nquery STATISTICS_Query {\n  getTotalPostCount\n  getTotalCommentCount\n  getAppreciationRate\n  getUserCount\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation CreatePost($title: String!, $content: String!, $userId: ID!, $file: Upload!) {\n  createPost(title: $title, content: $content, userId: $userId, file: $file) {\n    code\n    message\n    success\n  }\n}\n"): (typeof documents)["\nmutation CreatePost($title: String!, $content: String!, $userId: ID!, $file: Upload!) {\n  createPost(title: $title, content: $content, userId: $userId, file: $file) {\n    code\n    message\n    success\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation UpdatePost($updatePostId: ID!, $input: UpdatePostInput!) {\n  updatePost(id: $updatePostId, input: $input) {\n    code\n    message\n    success\n  }\n}\n"): (typeof documents)["\nmutation UpdatePost($updatePostId: ID!, $input: UpdatePostInput!) {\n  updatePost(id: $updatePostId, input: $input) {\n    code\n    message\n    success\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery LATEST_POST_Query {\n  getLatestPosts {\n  post {\n    id\n    title\n    createdAt\n    imagePath\n    user {\n        username\n    }\n  }\n  likes \n  dislikes\n  }\n}\n"): (typeof documents)["\nquery LATEST_POST_Query {\n  getLatestPosts {\n  post {\n    id\n    title\n    createdAt\n    imagePath\n    user {\n        username\n    }\n  }\n  likes \n  dislikes\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation SignInUser($username: String!, $password: String!) {\n  signInUser(username: $username, password: $password) {\n    message\n    success\n    token\n  }\n}\n"): (typeof documents)["\nmutation SignInUser($username: String!, $password: String!) {\n  signInUser(username: $username, password: $password) {\n    message\n    success\n    token\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery POST_QUERY($id: ID!) {\n  getPost(id: $id) {\n    comments\n    dislikes\n    likes\n    post {\n      content\n      createdAt\n      id\n      title\n      imagePath\n      user {\n        email\n        id\n        username\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery POST_QUERY($id: ID!) {\n  getPost(id: $id) {\n    comments\n    dislikes\n    likes\n    post {\n      content\n      createdAt\n      id\n      title\n      imagePath\n      user {\n        email\n        id\n        username\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery POST_COMMENTS_QUERY($postId: ID!) {\n  getAllCommentsByPost(postId: $postId) {\n    content\n    createdAt\n    id\n    user {\n      username\n      id\n      imagePath\n    }\n  }\n}\n"): (typeof documents)["\nquery POST_COMMENTS_QUERY($postId: ID!) {\n  getAllCommentsByPost(postId: $postId) {\n    content\n    createdAt\n    id\n    user {\n      username\n      id\n      imagePath\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation createComment($userId: ID!, $postId: ID!, $content: String!) {\n    createComment(userId: $userId, postId: $postId, content: $content) {\n        code\n        message\n        success\n        comment {\n            content\n            createdAt\n            user {\n                username\n            }\n        }\n    }\n}\n"): (typeof documents)["\nmutation createComment($userId: ID!, $postId: ID!, $content: String!) {\n    createComment(userId: $userId, postId: $postId, content: $content) {\n        code\n        message\n        success\n        comment {\n            content\n            createdAt\n            user {\n                username\n            }\n        }\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation updateComment($id: ID!, $content: String!) {\n    updateComment(id: $id, content: $content) {\n        code\n        message\n        success\n        comment {\n            content\n            createdAt\n            user {\n                username\n            }\n        }\n    }\n}\n"): (typeof documents)["\nmutation updateComment($id: ID!, $content: String!) {\n    updateComment(id: $id, content: $content) {\n        code\n        message\n        success\n        comment {\n            content\n            createdAt\n            user {\n                username\n            }\n        }\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation deleteComment($id: ID!) {\n    deleteComment(id: $id) {\n        code\n        message\n        success\n    }\n}\n"): (typeof documents)["\nmutation deleteComment($id: ID!) {\n    deleteComment(id: $id) {\n        code\n        message\n        success\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation createLike($userId: ID!, $postId: ID!) {\n    createLike(userId: $userId, postId: $postId) {\n        code\n        message\n        success\n    }\n}\n"): (typeof documents)["\nmutation createLike($userId: ID!, $postId: ID!) {\n    createLike(userId: $userId, postId: $postId) {\n        code\n        message\n        success\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation deleteLike($id: ID!) {\n    deleteLike(id: $id) {\n        code\n        message\n        success\n    }\n}\n"): (typeof documents)["\nmutation deleteLike($id: ID!) {\n    deleteLike(id: $id) {\n        code\n        message\n        success\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getLike($userId: ID!, $postId: ID!) {\n    getLike(userId: $userId, postId: $postId) {\n        id\n    }\n}\n"): (typeof documents)["\nquery getLike($userId: ID!, $postId: ID!) {\n    getLike(userId: $userId, postId: $postId) {\n        id\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation createDislike($userId: ID!, $postId: ID!) {\n    createDislike(userId: $userId, postId: $postId) {\n        code\n        message\n        success\n    }\n}\n"): (typeof documents)["\nmutation createDislike($userId: ID!, $postId: ID!) {\n    createDislike(userId: $userId, postId: $postId) {\n        code\n        message\n        success\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation deleteDislike($id: ID!) {\n    deleteDislike(id: $id) {\n        code\n        message\n        success\n    }\n}\n"): (typeof documents)["\nmutation deleteDislike($id: ID!) {\n    deleteDislike(id: $id) {\n        code\n        message\n        success\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getDislike($userId: ID!, $postId: ID!) {\n    getDislike(userId: $userId, postId: $postId) {\n        id\n    }\n}\n"): (typeof documents)["\nquery getDislike($userId: ID!, $postId: ID!) {\n    getDislike(userId: $userId, postId: $postId) {\n        id\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery USER_POST_QUERY($id: ID!) {\n    getUserPosts(id: $id) {\n        post {\n            content\n            createdAt\n            id\n            title\n            imagePath\n            user {\n                id\n                username\n            }\n        }\n        likes\n        dislikes\n    }\n}\n"): (typeof documents)["\nquery USER_POST_QUERY($id: ID!) {\n    getUserPosts(id: $id) {\n        post {\n            content\n            createdAt\n            id\n            title\n            imagePath\n            user {\n                id\n                username\n            }\n        }\n        likes\n        dislikes\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery USER_LIKES_QUERY($id: ID!) {\n  getLikesByUser(id: $id) {\n    post {\n      id\n      title\n      content\n      imagePath\n      user {\n        username\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery USER_LIKES_QUERY($id: ID!) {\n  getLikesByUser(id: $id) {\n    post {\n      id\n      title\n      content\n      imagePath\n      user {\n        username\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery USER_BY_USERNAME($username: String!) {\n  getUserByUsername(username: $username) {\n    id\n    username\n    email\n    imagePath\n  }\n}\n"): (typeof documents)["\nquery USER_BY_USERNAME($username: String!) {\n  getUserByUsername(username: $username) {\n    id\n    username\n    email\n    imagePath\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation createUser($username: String!, $password: String!, $email: String!) {\n  createUser(username: $username, password: $password, email: $email) {\n    code\n    message\n    success\n    user {\n      username\n      id\n    }\n  }\n}\n"): (typeof documents)["\nmutation createUser($username: String!, $password: String!, $email: String!) {\n  createUser(username: $username, password: $password, email: $email) {\n    code\n    message\n    success\n    user {\n      username\n      id\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation UpdateUser($updateUserId: ID!, $input: UpdateUserInput!) {\n  updateUser(id: $updateUserId, input: $input) {\n    code\n    message\n    success\n    token\n  }\n}\n"): (typeof documents)["\nmutation UpdateUser($updateUserId: ID!, $input: UpdateUserInput!) {\n  updateUser(id: $updateUserId, input: $input) {\n    code\n    message\n    success\n    token\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery SEARCH_POST_QUERY($input: String!) {\n  getSearchPost(input: $input) {\n    post {\n      id\n      title\n      imagePath\n      user {\n        username\n        id\n      }\n    }\n    likes\n    dislikes\n    comments\n  }\n}\n"): (typeof documents)["\nquery SEARCH_POST_QUERY($input: String!) {\n  getSearchPost(input: $input) {\n    post {\n      id\n      title\n      imagePath\n      user {\n        username\n        id\n      }\n    }\n    likes\n    dislikes\n    comments\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query USER_INFO_Query {\n    getLoggedUser {\n      id\n      email\n      username\n      imagePath\n    }\n  }\n"): (typeof documents)["\n  query USER_INFO_Query {\n    getLoggedUser {\n      id\n      email\n      username\n      imagePath\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;