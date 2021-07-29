import express, { Express } from 'express';
import compression from 'compression';
import { homeRouter } from './routes/home.route';

const app: Express = express();
app.use(compression());
app.use('/', homeRouter);

export default app;
