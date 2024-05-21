import { UserMutations, UserQueries } from './models/User/index.js';
import { PostQueries, PostMutations } from './models/Post/index.js';
import { signInUser } from './models/Auth/signInUser.js';
import { LikeMutations, LikeQueries } from "./models/Like/index.js";
import { DislikeMutations, DislikeQueries } from "./models/Dislike/index.js";
import { CommentMutations, CommentQueries } from "./models/Comment/index.js";
import { StatisticsQueries } from "./models/Statistics/index.js";
import { GraphQLScalarType, Kind } from 'graphql';
import { GraphQLUpload } from "graphql-upload-ts";
const dateTimeScalar = new GraphQLScalarType({
    name: 'DateTime',
    description: 'DateTime custom scalar type',
    parseValue(value) {
        if (typeof value === 'string' || typeof value === 'number') {
            return new Date(value);
        }
        throw new Error('Invalid value type for DateTime');
    },
    serialize(value) {
        if (value instanceof Date) {
            return value.toISOString();
        }
        throw new Error('Invalid value type for DateTime');
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.STRING) {
            return new Date(ast.value);
        }
        return null;
    },
});
export const resolvers = {
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
    Upload: GraphQLUpload,
    DateTime: dateTimeScalar,
};
