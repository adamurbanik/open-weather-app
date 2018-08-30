import express from 'express';
import path from 'path';
import compression from 'compression';
import bodyParser from 'body-parser';

import routes from 'server/routes';


export const PORT = 8080;


const app = express();

app.use(compression());
app.use(bodyParser.json());

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use('/weather', routes());

// app.use(error());
app.use(express.static(path.join(__dirname, 'build')));

app.listen(PORT, (err) => {
  console.log(`App listening on port:${PORT}`);
});



