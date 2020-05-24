'use strict'

const ensureCollection = require('../util/ensure_collection')
const verifyCriteria = require('../util/verify_criteria')

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterCollectionMethods~find}
 *
 * @memberof module:bfx-hf-models-adapter-lowdb
 * @private
 * @async
 *
 * @param {module:bfx-hf-models-adapter-lowdb.LowDBInstance} db - db instance
 * @param {module:bfx-hf-models.Model} model - model instance
 * @param {module:bfx-hf-models.DBAdapterCriteria[]} criteria - array of
 *   criteria which must be met for a record to be included in the results
 * @returns {object[]} records - matching records
 */
const find = async (db, { path }, criteria = []) => {
  ensureCollection(db, path)

  return db
    .get(path)
    .filter(doc => {
      return verifyCriteria(doc, criteria)
    })
    .values()
    .value()
}

module.exports = find
