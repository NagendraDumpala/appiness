import User from '../models/users.model';
import Role from '../models/user-roles.model';

import userService from '../services/user.service.js';

import i18nUtil from '../utils/i18n.util';
import respUtil from '../utils/resp.util';

/**
 * Load user and append to req.
 * @param req
 * @param res
 * @param next
 */
async function load(req, res, next) {
  req.user = await User.get(req.params.userId);
  return next();
}

/**
 * Get user
 * @param req
 * @param res
 * @returns {user}
 */
async function get(req, res) {
  let responseJson = {};
  responseJson.details = req.user;
  res.json(responseJson);
}

/**
 * Create new user
 * @param req
 * @param res
 * @returns { respCode: respCode, respMessage: respMessage }
 */
async function create(req, res) {
  // unique email checking
  let uniqueEmail = await User.findUniqueEmail(req.body.email);
  if (uniqueEmail) {
    req.i18nKey = 'emailExists';
    return res.json(respUtil.getErrorResponse(req));
  }

  // create new user instance
  let user = new User(req.body);

  // set user create variables
  user = await userService.setUserCreateVaribles(req, user);

  // save the new user
  req.user = await User.save(user);
  req.entityType = 'user';
  res.json(respUtil.createSuccessResponse(req));
}

/**
 * Update existing user
 * @param req
 * @param res
 * @param next
 * @returns { respCode: respCode, respMessage: respMessage }
 */
async function update(req, res, next) {
  let user = req.user;
  user = Object.assign(user, req.body);
  req.user = await User.save(user);
  req.entityType = 'user';
  res.json(respUtil.updateSuccessResponse(req));
}

/**
 * Get user list. based on criteria
 * @param req
 * @param res
 * @param next
 * @returns {users: users, pagination: pagination}
 */
async function list(req, res, next) {
  let responseJson = {};
  const query = { filter: { active: true } };
  if (query.page === 1) {
    // total count 
    query.pagination.totalCount = await User.totalCount(query);
  }

  // get total users
  const users = await User.list(query);
  responseJson.users = users;
  responseJson.pagination = query.pagination;
  res.json(responseJson)
}

/**
 * Delete user.
 * @param req
 * @param res
 * @param next
 * @returns { respCode: respCode, respMessage: respMessage }
 */
async function remove(req, res, next) {
  const user = req.user;
  user.active = false;
  req.user = await User.save(user);
  req.entityType = 'user';
  res.json(respUtil.removeSuccessResponse(req));
}

/**
 * login user.
 * @param req
 * @param res
 * @param next
 * @returns { respCode: respCode, respMessage: respMessage }
 */
async function login(req, res, next) {
  let userQuery = { email: req.body.email, password: req.body.password };
  let user = await User.findOneRecord(userQuery);
  if (!user) {
    req.i18nKey = 'emailOrPasswordError';
    return res.json(respUtil.getErrorResponse(req));
  }
  let responseJson = {
    respCode: respUtil.getDetailsSuccessResponse().respCode,
    respMessage: i18nUtil.getI18nMessage('loginSuccess'),
    details: user
  };
  res.json(responseJson);
}


export default {
  load,
  get,
  create,
  update,
  list,
  remove,
  login
};
