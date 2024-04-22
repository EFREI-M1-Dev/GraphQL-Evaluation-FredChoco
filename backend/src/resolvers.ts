import { GraphQLError } from "graphql";
import { Resolvers } from "./types.js";

import { UserMutations, UserQueries } from './models/User';
import { PostQueries } from './models/Post';
import { signInUser } from './models/signInUser';

export const resolvers: Resolvers = {
    Query: {
        getLike: (_, __, {dataSources}) => {
            throw new GraphQLError('Not implemented')
        },
        getDislike: (_, __, {dataSources}) => {
            throw new GraphQLError('Not implemented')
        },
        getComment: (_, __, {dataSources}) => {
            throw new GraphQLError('Not implemented')
        },
        getAllLikes: (_, __, {dataSources}) => {
            throw new GraphQLError('Not implemented')
        },
        getAllDislikes: (_, __, {dataSources}) => {
            throw new GraphQLError('Not implemented')
        },
        ...UserQueries,
        ...PostQueries
    },
    Mutation: {
        ...UserMutations,
        signInUser,
    },
}