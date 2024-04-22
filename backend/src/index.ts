import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./schema.js";
import { getUserFromToken } from "./modules/auth.js";
import consola from 'consola';
import db from './datasources/db.js';


const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }) => {
        const { cache } = server
        const authorization = (req.headers.authorization)?.split('Bearer ')?.[1]
        const user = authorization ? getUserFromToken(authorization) : null;
        return {
            dataSources: {
                db
            },
            user
        }
    }
})

consola.log(`🚀  Server ready at: ${url}`)