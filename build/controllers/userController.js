'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require('../models/user.model');

var _user2 = _interopRequireDefault(_user);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//get all users
function list(req, res, next) {
  _user2.default.find(function (err, users) {
    if (err) {
      return res.json({
        status: "error",
        message: "error fetching users"
      });
    }
    if (users.length === 0) {
      return res.json({
        status: "success",
        data: null,
        message: "no user in database"
      });
    }
    return res.json({
      status: "success",
      data: users,
      message: "list of users"
    });
  });
}

//save user to the database
function save(req, res, next) {
  console.log(req.body.name);
  if (req.body.name === undefined) {
    return res.json({
      status: "error",
      message: "can not get user name"
    });
  }
  var user = new _user2.default({
    name: req.body.name
  });

  user.save(function (err) {
    if (err) {
      return res.json({
        status: "error",
        message: "error saving user"
      });
    }
    return res.json({
      status: "success",
      message: "successfully saved user to the database"
    });
  });
}
//get one records provided that the id of user
function findOne(req, res, next) {
  _user2.default.findOne({ id: req.params.id }, function (err, user) {
    if (err) {
      return res.json({
        status: "error",
        message: "error getting user with id " + req.params.id
      });
    }

    return res.json({
      status: "success",
      data: user,
      message: "user details"
    });
  });
}
//remove one record provided that the id of user
function remove(req, res, next) {
  _user2.default.remove({ id: req.params.id }, function (err, user) {
    if (err) {
      return res.json({
        status: "error",
        message: "error deleting user with id " + req.params.id
      });
    }
    return res.json({
      status: "success",
      message: "User successfully deleted with id " + req.params.id
    });
  });
}

exports.default = { list: list, save: save, remove: remove, findOne: findOne };