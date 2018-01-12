import express from 'express';
import * as User from '../controllers/userController';

const router = express.Router();
router.route('/')
  .get(User.list);
router.route('/save')
  .post(User.save);
router.route('/:id')
  .get(User.findOne);
router.route('/:id')
  .delete(User.remove);

export default router;
