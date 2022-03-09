import express from 'express';
import cors from 'cors';
import postRouter from './routes/posts.js';
import lodgeRouter from './routes/lodges.js';
import './db/db.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/posts', postRouter);
app.use('/lodges', lodgeRouter);

app.listen(8000);
