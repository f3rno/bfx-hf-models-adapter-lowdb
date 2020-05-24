'use strict'

const ensureCollection = require('../util/ensure_collection')
const verifyCriteria = require('../util/verify_criteria')

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterCollectionMethods~update}
 *
 * @memberof module:bfx-hf-models-adapter-lowdb
 * @private
 * @async
 *
 * @param {module:bfx-hf-models-adapter-lowdb.LowDBInstance} db - db instance
 * @param {module:bfx-hf-models.Model} model - initialized model instance
 * @param {module:bfx-hf-models.DBAdapterCriteria[]} criteria - array of
 *   criteria to be met for a record to be updated
 * @param {object} data - data to saved on matching records; partial update
 * @returns {number} nModified - number of modified records
 */
const update = async (db, { path }, criteria = [], data) => {
  ensureCollection(db, path)

  let modified = 0

  db
    .get(path)
    .filter(doc => {
      const valid = verifyCriteria(doc, criteria)

      if (valid) {
        modified += 1
      }

      return valid
    })
    .each(doc => {
      Object.assign(doc, data)
    })
    .write()

  return modified
}

module.exports = update
