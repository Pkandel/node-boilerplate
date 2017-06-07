'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('./user.route');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var router = _express2.default.Router();

//using middleware
app.use(function (req, res, next) {
    next();
});

router.get('/', function (req, res) {
    return res.json({
        success: true,
        message: "here you will quickely explore the end point",
        endPoints: [{
            url: "/api/users",
            message: "get all users data"
        }, {
            url: "/api/users/save",
            message: "save user data"
        }, {
            url: "/api/users/id",
            message: "get specific user on get request and delete on delete request"
        }]
    });
});

//mount user routes at /users
router.use('/users', _user2.default);

//mount auth routes at /auth


exports.default = router;