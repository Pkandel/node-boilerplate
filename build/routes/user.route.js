'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userController = require('../controllers/userController');

var _userController2 = _interopRequireDefault(_userController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
/**
 * @swagger
 * definition:
 *   User:
 *     properties:
 *       name:
 *         type: string
 *       password:
 *          type: string
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/User'
 */
router.route('/').get(_userController2.default.list
/**
 * @swagger
 * /api/users/save:
 *   post:
 *     tags:
 *       - Users
 *     description: Save user details
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: User's name
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Saved user in database
 *         schema:
 *           $ref: '#/definitions/User'
 */
);router.route('/save').post(_userController2.default.save

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: User's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Returns a single user
 *         schema:
 *           $ref: '#/definitions/User'
 */
);router.route('/:id').get(_userController2.default.findOne
/**
 * @swagger
 * /api/users/{id}:
 *   post:
 *     tags:
 *       - Users
 *     description: Delete a user provided that the id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: User's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: User is deleted successfully
 *         schema:
 *           $ref: '#/definitions/User'
 */
);router.route('/:id').delete(_userController2.default.remove);

exports.default = router;