import { GraphQLError } from "graphql";
import { Resolvers } from "./types.js";

import { UserMutations, UserQueries } from './models/User';
import { signInUser } from './models/signInUser';

export const resolvers: Resolvers = {
    Query: {
        getEmpty: (_, __, {dataSources}) => true,
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
        ...UserQueries
    },
    Mutation: {
        //    incrementTrackLikes: async (_, {id}, {dataSources}) => {
        //     try {
        //         const track = await dataSources.trackAPI.incrementTrackLike(id);
        //         return {
        //             code: 200,
        //             message: 'Number of likes has been incremented',
        //             success: Boolean(track),
        //             track
        //         }
        //     } catch(e) {
        //         return {
        //             code: 304,
        //             message: 'Resource not modified',
        //             success: false,
        //             track: null,
        //         }
        //     }
        // },
        // createLike: createLike,
        // createDislike: createDislike,
        // createComment: createComment,
        // deleteLike: deleteLike,
        // deleteDislike: deleteDislike,
        // deleteComment: deleteComment,
        // updateComment: updateComment
        ...UserMutations,
        signInUser,
    },
}