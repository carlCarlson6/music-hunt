import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import { AppContext } from '../common/types/AppContext';
import { UserResolver } from './resolvers/UserResolver';
import { AlbumResolver } from './resolvers/AlbumResolver';


export const buildGqlServer = async (): Promise<ApolloServer> => {
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

    return server;
}
