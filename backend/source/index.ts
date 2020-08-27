import 'reflect-metadata';
import {Express} from 'express';
import { createConnection } from 'typeorm';
import { buildGqlServer } from './gql/buildGqlServer';
import { buildApi } from './api/buildApi';

const main = async (): Promise<void> => {
    await createConnection().then(() => console.log('connected to DB'));

    const app: Express = buildApi();
    await buildGqlServer(app);
    
    app.listen(4000, () => console.log('server is running on localhost:4000/graphql'))
}

main();