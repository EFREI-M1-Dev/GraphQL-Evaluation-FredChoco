import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { makeExecutableSchema } from '@graphql-tools/schema';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import consola from 'consola';
import { graphqlUploadExpress } from 'graphql-upload-ts';

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

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
}));
app.use(bodyParser.json());

// Add file upload middleware before the GraphQL middleware
app.use(
    '/graphql',
    graphqlUploadExpress({
        maxFileSize: 10000000, // 10 MB
        maxFiles: 10,
    })
);

const startServer = async () => {
    await server.start();

    app.use(
        '/graphql',
        expressMiddleware(server, {
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
        })
    );

    app.listen({ port: 4000 }, () => {
        consola.log(`🚀 Server ready at: http://localhost:4000/graphql`);
    });
};

startServer().then(() => {
    consola.success('Server started');
}).catch((error) => {
    consola.error(error);
});
