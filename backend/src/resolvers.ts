import { GraphQLError } from "graphql";
import { Resolvers } from "./types.js";

import { UserMutations, UserQueries } from './models/User';
import { signInUser } from './models/signInUser';

export const resolvers: Resolvers = {
    Query: {
        ...UserQueries
    },
    Mutation: {
        ...UserMutations,
        signInUser,
    },
}