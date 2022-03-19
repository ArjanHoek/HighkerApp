const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
dotenv.config({ path: './config.env' });

require('./db/connect.js');

const lodgeRouter = require('./routes/lodges.js');

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(cors());

app.use('/lodges', lodgeRouter);

app.use(express.static('./client/build'));
app.get('*', (_, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(app.get('port'));
