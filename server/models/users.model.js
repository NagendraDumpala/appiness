import Promise from 'bluebird';
import httpStatus from 'http-status';
import mongoose from 'mongoose';

import APIError from '../helpers/APIError';
const Schema = mongoose.Schema;
/**
 * Activity Schema
 */
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  userName: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  status: {
    type: String,
    default: 'Active'
  },
  role: {
    type: Schema.ObjectId,
    ref: 'UserRole'
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date
  },
  active: {
    type: Boolean,
    default: true
  }
});

/**
 * Statics
 */
UserSchema.statics = {
  /**
  * save and update user
  * @param user
  * @returns {Promise<user, APIError>}
  */
  save(user) {
    return user.save()
      .then((user) => {
        if (user) {
          return user;
        }
        const err = new APIError('Error in user', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * Get user
   * @param {ObjectId} id - The objectId of user.
   * @returns {Promise<user, APIError>}
   */
  get(id) {
    return this.findById(id)
      .populate('role', 'role')
      .exec()
      .then((user) => {
        if (user) {
          return user;
        }
        const err = new APIError('No such user exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List users in descending order of 'createdAt' timestamp.
   * @returns {Promise<user[]>}
   */
  list(query) {
    return this.find(query.filter, query.entityFields)
      .sort(query.sorting)
      .skip((query.page - 1) * query.limit)
      .limit(query.limit)
      .populate('role', 'role')
      .exec()
      .then((users) => {
        if (users) {
          return users;
        }
        const err = new APIError('Users not found!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
      
  },

  /**
   * Count of user records
   * @returns {Promise<user[]>}
   */
  totalCount(query) {
    return this.find(query.filter)
      .count();
  },

  /**
   * Find unique email.
   * @param {string} email.
   * @returns {Promise<user[]>}
   */
  findUniqueEmail(email) {
    return this.findOne({
      email: email
    })
      .exec();
  },

    /**
   * Get user by params
   * @param {*} query
   * @returns {Promise<user, APIError>}
   */
  findOneRecord(query) {
    return this.findOne(query)
      .populate('role', 'role')
      .exec()
      .then((user) => user);
  }
};

/**
 * @typedef User
 */
export default mongoose.model('User', UserSchema);
