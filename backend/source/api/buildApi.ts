import express, {Express} from 'express';
import cors from 'cors';
import session from 'express-session';


export const buildApi = (): Express => {
    const app = express();

    app.use(cors({
        credentials:true, 
        origin:'http://localhost:3000'
    }));

    return app;
}