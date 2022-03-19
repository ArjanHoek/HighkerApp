import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import connect from './db/connect.js';
import lodgeRouter from './routes/lodges.js';

dotenv.config({ path: './config.env' });

const { DBLINK, DBUSERNAME, DBPASSWORD, PORT } = process.env;
connect(DBLINK, DBUSERNAME, DBPASSWORD);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(cors());

app.use('/lodges', lodgeRouter);

const port = PORT || 5000;

app.listen(port);
