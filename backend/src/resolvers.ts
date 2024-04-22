import { GraphQLError } from "graphql";
import { Resolvers } from "./types.js";
import { createUser } from "./mutations/createUser.js";
import { signInUser } from "./mutations/signInUser.js";

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
        createUser: createUser,
        signInUser: signInUser,
        // createLike: createLike,
        // createDislike: createDislike,
        // createComment: createComment,
        // deleteLike: deleteLike,
        // deleteDislike: deleteDislike,
        // deleteComment: deleteComment,
        // updateComment: updateComment
    },

    // People: {
    //     eyeColor: ({eye_color}) => eye_color,
    //     films: ({films}, _, {dataSources}) => {
    //         return dataSources.ghibliAPI.getFilmsByUrls(films)
    //     }
    // },

}