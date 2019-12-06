import express from 'express';
import validate from 'express-validation';
import asyncHandler from 'express-async-handler';

import userCtrl from '../controllers/user.controller';

import paramValidation from '../config/param-validation';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/login')
  /** POST /api/login - User login */
  .post(asyncHandler(userCtrl.login));

router.route('/')
  /** GET /api/users - Get list of users */
  .get(asyncHandler(userCtrl.list))

  /** POST /api/users - Create new user */
  .post(validate(paramValidation.createUser), asyncHandler(userCtrl.create));

router.route('/:userId')
  /** GET /api/users/:userId - Get user */
  .get(asyncHandler(userCtrl.get))

  /** PUT /api/users/:userId - Update user */
  .put(asyncHandler(userCtrl.update))

  /** DELETE /api/users/:userId - Delete user */
  .delete(asyncHandler(userCtrl.remove));

/** Load users when API with userId route parameter is hit */
router.param('userId', asyncHandler(userCtrl.load));

export default router;
