import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import connect from './db/connect.js';
import lodgeRouter from './routes/lodges.js';

dotenv.config({ path: './config.env' });

const { DBLINK, DBUSERNAME, DBPASSWORD } = process.env;
connect(DBLINK, DBUSERNAME, DBPASSWORD);

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(cors());

app.use(express.static('./client/build'));
app.use('/lodges', lodgeRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(app.get('port'));
