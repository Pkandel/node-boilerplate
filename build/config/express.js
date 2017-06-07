'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _routes = require('../routes');

var _routes2 = _interopRequireDefault(_routes);

var _swaggerJsdoc = require('swagger-jsdoc');

var _swaggerJsdoc2 = _interopRequireDefault(_swaggerJsdoc);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

//parse body params and attach them to req.body
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_express2.default.static("./public"));

// swagger definition
var swaggerDefinition = {
    info: {
        title: 'Node Swagger API Boilerplate',
        version: '1.0.0',
        description: 'This is awesome API'
    },
    host: 'localhost:28080',
    basePath: '/'
};

// options for the swagger docs
var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./src/routes/*.js']
};
// initialize swagger-jsdoc
var swaggerSpec = (0, _swaggerJsdoc2.default)(options);

if (_config2.default.env === 'development') {
    app.use((0, _morgan2.default)('dev'));
}
//mount all routes on /api path
app.use('/api', _routes2.default);

// serve swagger
app.get('/swagger.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

exports.default = app;