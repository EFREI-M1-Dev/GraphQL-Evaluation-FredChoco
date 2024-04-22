import { GraphQLError } from "graphql";
import { Resolvers } from "./types.js";
import { createUser } from "./mutations/createUser.js";
import { signInUser } from "./mutations/signInUser.js";

export const resolvers: Resolvers = {
    Query: {
        getEmpty: (_, __, {dataSources}) => true,
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
        signInUser: signInUser
    },

    // People: {
    //     eyeColor: ({eye_color}) => eye_color,
    //     films: ({films}, _, {dataSources}) => {
    //         return dataSources.ghibliAPI.getFilmsByUrls(films)
    //     }
    // },

}