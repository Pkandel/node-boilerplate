'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

var _express = require('./config/express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//connect to mongo db


//config should be imported before importing any other file
var mongoUri = _config2.default.mongo.host;
_mongoose2.default.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } });
_mongoose2.default.connection.on('error', function () {
    throw new Error('unable to connect to database: ' + mongoUri);
});

_express2.default.listen(_config2.default.port, function () {
    console.log('server started on port ' + _config2.default.port + ' (' + _config2.default.env + ')');
});

exports.default = _express2.default;