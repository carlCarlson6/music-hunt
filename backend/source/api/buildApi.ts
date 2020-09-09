import express, {Express} from 'express';
import cors from 'cors';
import { cors_client_url } from '../../env_vars';


export const buildApi = (): Express => {
    const app = express();

    app.use(cors({
        credentials: true, 
        origin: cors_client_url
    }));

    return app;
}