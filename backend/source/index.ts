import 'reflect-metadata';
import {Express} from 'express';
import { createConnection } from 'typeorm';
import { buildGqlServer } from './gql/buildGqlServer';
import { buildApi } from './api/buildApi';

const main = async (): Promise<void> => {
    await createConnection().then(() => console.log('connected to DB'));

    const app: Express = buildApi();
    await buildGqlServer(app);
    
    const port = process.env.PORT || 4000;
    app.listen(Number(port), '0.0.0.0', () => console.log('server is running'));
}

main();