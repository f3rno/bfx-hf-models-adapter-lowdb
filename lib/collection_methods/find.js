'use strict'

const ensureCollection = require('../util/ensure_collection')
const verifyCriteria = require('../util/verify_criteria')

/**
 * @private
 *
 * @param {LowDBInstance} db - db instance
 * @param {bfx-hf-models.Model} model - model instance
 * @param {bfx-hf-models.DBAdapterCriteria[]} criteria - array of criteria
 *   which must be met for a record to be included in the results
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
