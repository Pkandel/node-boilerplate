import express from 'express';
import User from '../controllers/userController';

const router = express.Router();
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
router.route('/')
    .get(User.list)
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
router.route('/save')
    .post(User.save)

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
router.route('/:id')
    .get(User.findOne)
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
router.route('/:id')
    .delete(User.remove)

export default router;