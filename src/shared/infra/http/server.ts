import 'reflect-metadata';

import cors from 'cors';

import express from 'express';

import routes from './routes';

import '@shared/infra/typeorm';

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes)

app.listen(3000, () => console.log('Server running at port 3000'))