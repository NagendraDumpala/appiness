import Role from '../models/user-roles.model';

/**
 * set user create variables
 * @param {*} req
 * @param {*} user
 * @returns {user}
 */
async function setUserCreateVaribles(req, user) {
  user.userName = user.firstName + ' ' + user.lastName;

  let newRoleObj = {
    userId: user._id
  };
  let newRole = new Role(newRoleObj);

  // check
  let existedRole = await Role.findOneRecord({});
  if (existedRole) {
    newRole.role = 'user';
  } else {
    newRole.role = 'admin';
  }

  // save the user role
  newRole = await Role.save(newRole);

  // assign role to user
  user.role = newRole._id;

  return user;
}

/**
 * set user update variables
 * @param {*} req
 * @param {*} user
 * @returns {user}
 */
function setUserUpdateVaribles(req, user) {
  user.update = new Date();
  return user;
}


export default {
  setUserCreateVaribles,
  setUserUpdateVaribles
};
