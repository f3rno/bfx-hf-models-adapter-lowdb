'use strict'

const ensureMap = require('../util/ensure_map')
const verifyCriteria = require('../util/verify_criteria')

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterMapMethods~find}
 *
 * @memberof module:bfx-hf-models-adapter-lowdb
 * @private
 * @async
 *
 * @param {module:bfx-hf-models-adapter-lowdb.LowDBInstance} db - db instance
 * @param {module:bfx-hf-models.Model} model - initialized model instance
 * @param {module:bfx-hf-models.DBAdapterCriteria[]} criteria - array of
 *   conditions to apply to records in the collection; the first record meeting
 *   all conditions is returned as the "found" record.
 * @returns {object[]} records - array of records matching the provided
 *   criteria
 */
const find = async (db, { path }, criteria) => {
  ensureMap(db, path)

  const documents = db.get(path).values().value()

  return documents.filter(doc => verifyCriteria(doc, criteria))
}

module.exports = find
