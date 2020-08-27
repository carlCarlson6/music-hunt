import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import { MyContext } from '../../common/types/MyContext';
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
        context: ({req, res}): MyContext => ({req, res})
    })

    return server;
}
