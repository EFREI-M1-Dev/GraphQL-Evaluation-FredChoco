// index.js
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { makeExecutableSchema } from '@graphql-tools/schema';
import consola from 'consola';

import { resolvers } from './resolvers.js';
import { typeDefs } from './schema.js';
import { getUserFromToken } from './modules/auth.js';
import db from './datasources/db.js';
import authDirective from './modules/authDirective.js';

const { authDirectiveTypeDefs, authDirectiveTransformer } = authDirective();

let schema = makeExecutableSchema({
    typeDefs: [authDirectiveTypeDefs, typeDefs],
    resolvers,
});

schema = authDirectiveTransformer(schema);

const server = new ApolloServer({
    schema,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }) => {
        const authorization = req.headers.authorization?.split('Bearer ')[1];
        const user = authorization ? getUserFromToken(authorization) : null;
        return {
            dataSources: {
                db,
            },
            user,
        };
    },
});

consola.log(`🚀 Server ready at: ${url}`);
