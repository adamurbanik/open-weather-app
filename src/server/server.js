import express from 'express';
import path from 'path';
import compression from 'compression';
import bodyParser from 'body-parser';

import routes from 'server/routes';


export const PORT = 8080;


const app = express();

app.use(compression());
app.use(bodyParser.json());

app.use('/weather', routes());

// app.use(error());
app.use(express.static(path.join(__dirname, 'build')));

app.listen(PORT, (err) => {
  console.log(`App listening on port:${PORT}`);
});



