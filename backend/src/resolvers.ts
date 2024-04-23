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
        ...UserMutations,
        ...LikeMutations,
        ...DislikeMutations,
        ...CommentMutations,
        signInUser,
    },
}