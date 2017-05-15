import express  from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import config from './config';
import routes from '../app/routes';
import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';

const app = express();

//parse body params and attach them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));

// swagger definition
var swaggerDefinition = {
    info: {
        title: 'Node Swagger API Boilerplate',
        version: '1.0.0',
        description: 'This is awesome API',
    },
    host: 'localhost:28080',
    basePath: '/',
};

// options for the swagger docs
var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./app/routes/*.js']
};
// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);

if(config.env === 'development') {
    app.use(logger('dev'));
}
//mount all routes on /api path
app.use('/api', routes);

// serve swagger
app.get('/swagger.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

export default app;