import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import postRouter from './routes/posts.js';
import lodgeRouter from './routes/lodges.js';

import connect from './db/connect.js';
import __dirname from './__dirname.js';

const { DBLINK, DBUSERNAME, DBPASSWORD, PORT } = process.env;
connect(DBLINK, DBUSERNAME, DBPASSWORD);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(cors());

app.use(express.static('./client/build/'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/client/build/' });
});

app.use('/posts', postRouter);
app.use('/lodges', lodgeRouter);

const port = PORT || 8000;

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
