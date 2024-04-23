import { GraphQLError } from "graphql";
import { Resolvers } from "./types.js";

import { UserMutations, UserQueries } from './models/User/index.js';
import { PostQueries, PostMutations } from './models/Post/index.js';
import { signInUser } from './models/Auth/signInUser.js';
import {LikeMutations, LikeQueries} from "./models/Like/index.js";
import {DislikeMutations, DislikeQueries} from "./models/Dislike/index.js";
import {CommentMutations, CommentQueries} from "./models/Comment/index.js";

export const resolvers: Resolvers = {
    Query: {
        ...LikeQueries,
        ...DislikeQueries,
        ...CommentQueries,
        ...UserQueries,
        ...PostQueries
    },
    Mutation: {
        ...UserMutations,
        ...LikeMutations,
        ...DislikeMutations,
        ...CommentMutations,
        ...PostMutations,
        signInUser,
    },
}