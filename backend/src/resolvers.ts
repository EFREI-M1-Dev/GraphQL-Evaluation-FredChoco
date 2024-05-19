import { Resolvers } from "./types.js";

import { UserMutations, UserQueries } from './models/User/index.js';
import { PostQueries, PostMutations } from './models/Post/index.js';
import { signInUser } from './models/Auth/signInUser.js';
import {LikeMutations, LikeQueries} from "./models/Like/index.js";
import {DislikeMutations, DislikeQueries} from "./models/Dislike/index.js";
import {CommentMutations, CommentQueries} from "./models/Comment/index.js";
import {StatisticsQueries} from "./models/Statistics/index.js";
import { GraphQLScalarType } from 'graphql';
import {GraphQLUpload} from "graphql-upload-ts";

const dateScalar = new GraphQLScalarType({
    name: 'Date',
    parseValue(value: unknown) {
        if (typeof value === 'string' || typeof value === 'number') {
            return new Date(value);
        }
        throw new Error('Invalid date value');
    },
    serialize(value: unknown) {
        if (value instanceof Date) {
            // Convertir la date en heure locale
            const localDate = new Date(value.getTime() - (value.getTimezoneOffset() * 60000));
            return localDate.toLocaleString();
        }
        throw new Error('Invalid date value');
    },
});


export const resolvers: Resolvers = {
    Query: {
        ...LikeQueries,
        ...DislikeQueries,
        ...CommentQueries,
        ...UserQueries,
        ...PostQueries,
        ...StatisticsQueries
    },
    Mutation: {
        ...UserMutations,
        ...LikeMutations,
        ...DislikeMutations,
        ...CommentMutations,
        ...PostMutations,
        signInUser,
    },
    Date: dateScalar,
    Upload: GraphQLUpload,
}