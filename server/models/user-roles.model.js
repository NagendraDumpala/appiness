import Promise from 'bluebird';
import httpStatus from 'http-status';
import mongoose from 'mongoose';

import APIError from '../helpers/APIError';
const Schema = mongoose.Schema;

/**
 * UserRole Schema
 */
const UserRoleSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  role: {
    type: String
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
UserRoleSchema.statics = {
  /**
  * save and update role
  * @param role
  * @returns {Promise<role, APIError>}
  */
  save(role) {
    return role.save()
      .then((role) => {
        if (role) {
          return role;
        }
        const err = new APIError('Error in role create', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * Get role
   * @param {ObjectId} id - The objectId of role.
   * @returns {Promise<role, APIError>}
   */
  get(id) {
    return this.findById(id)
      .populate('userId', 'email userName')
      .exec()
      .then((role) => {
        if (role) {
          return role;
        }
        const err = new APIError('No such role exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List roles in descending order of 'createdAt' timestamp.
   * @returns {Promise<role[], APIError>}
   */
  list(query) {
    return this.find(query.filter, query.entityFields)
      .sort(query.sorting)
      .skip((query.page - 1) * query.limit)
      .limit(query.limit)
      .populate('userId', 'email userName')
      .exec()
      .then((roles) => {
        if (roles) {
          return roles;
        }
        const err = new APIError('Roles not found!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });

  },

  /**
   * Count of role records
   * @returns {Promise<role[]>}
   */
  totalCount(query) {
    return this.find(query.filter)
      .count();
  },

  /**
   * Get role by params
   * @param {*} query
   * @returns {Promise<role, APIError>}
   */
  findOneRecord(query) {
    return this.findOne(query)
      .populate('userId', 'email userName')
      .exec()
      .then((role) => role);
  }
};

/**
 * @typedef UserRole
 */
export default mongoose.model('UserRole', UserRoleSchema);
