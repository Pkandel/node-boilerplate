import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import config from './config';
import routes from '../app/routes';

const app = express();

if(config.env === 'development') {
    app.use(logger('dev'));
}

//parse body params and attach them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//mount all routes on /api path
app.use('/api', routes);

export default app;