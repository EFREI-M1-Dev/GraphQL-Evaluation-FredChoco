import { GraphQLError } from "graphql";
import { Resolvers } from "./types.js";

import { UserMutations, UserQueries } from './models/User';
import { PostQueries } from './models/Post';
import { signInUser } from './models/signInUser';
import {LikeMutations, LikeQueries} from "./models/Like";
import {DislikeMutations, DislikeQueries} from "./models/Dislike";
import {CommentMutations, CommentQueries} from "./models/Comment";

export const resolvers: Resolvers = {
    Query: {
        ...LikeQueries,
        ...DislikeQueries,
        ...CommentQueries,
        ...UserQueries,
        ...PostQueries
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
        ...LikeMutations,
        ...DislikeMutations,
        ...CommentMutations,
        signInUser,
    },
}