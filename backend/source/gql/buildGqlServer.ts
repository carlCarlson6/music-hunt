import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import { AppContext } from '../common/types/AppContext';
import { UserResolver } from './resolvers/UserResolver';
import { AlbumResolver } from './resolvers/AlbumResolver';
import {Express} from 'express';


export const buildGqlServer = async (app: Express): Promise<ApolloServer> => {
    const schema = await buildSchema({
        resolvers: [
            UserResolver,
            AlbumResolver
        ]
    })

    const server = new ApolloServer({
        schema,
        context: ({req, res}): AppContext => ({req, res})
    })
    server.applyMiddleware({app});
    
    return server;
}
