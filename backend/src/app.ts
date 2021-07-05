import 'reflect-metadata';
import express from 'express';
import { router } from './routes';

import './database/connect';

const app = express();

app.use(router);

app.use(express.static('public'));

app.use('/css', express.static(__dirname + '/front-end/css'));
app.use('/js', express.static(__dirname + '/front-end/js'));
app.use('/img', express.static(__dirname + '/front-end/img'));


export { app };