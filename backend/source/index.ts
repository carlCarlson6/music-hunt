import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import {Express} from 'express';
import { createConnection } from 'typeorm';
import { buildGqlServer } from './gql/buildGqlServer';
import { buildApi } from './api/buildApi';

const main = async (): Promise<void> => {
    await createConnection();
    console.log('connected to DB');

    const app: Express = buildApi();

    const gqlServer: ApolloServer = await buildGqlServer();
    gqlServer.applyMiddleware({ app });

    app.listen(4000, () => console.log('server is running on localhost:4000/graphql'))
}

main();