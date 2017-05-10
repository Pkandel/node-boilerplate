import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();
   
//get all users
router.route('/')
    .get(userController.list)

router.route('/save')
    .get(userController.save)
    
router.route('/:id')
    .get(userController.findOne)

router.route('/:id')
    .delete(userController.remove)

export default router;