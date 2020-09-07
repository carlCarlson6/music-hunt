import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import { AppContext } from '../common/AppContext';
import { UserResolver } from './resolvers/UserResolver';
import { AlbumResolver } from './resolvers/AlbumResolver';
import {Express} from 'express';
import { VoteResolver } from './resolvers/VoteResolver';


export const buildGqlServer = async (app: Express): Promise<ApolloServer> => {
    const schema = await buildSchema({
        resolvers: [
            UserResolver,
            AlbumResolver,
            VoteResolver
        ]
    })

    const server = new ApolloServer({
        schema,
        context: ({req, res}): AppContext => ({req, res, userId: ''})
    })
    server.applyMiddleware({app});
    
    return server;
}
