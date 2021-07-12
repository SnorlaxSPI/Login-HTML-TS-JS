import express from 'express';
import { router } from './routes'

const app = express();

app.use(express.json());

app.use(router);

export { app };

// https://www.youtube.com/watch?v=Hn2RnPfS-Xk