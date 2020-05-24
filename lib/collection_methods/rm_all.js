'use strict'

const ensureCollection = require('../util/ensure_collection')

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterCollectionMethods~rmAll}
 *
 * @memberof module:bfx-hf-models-adapter-lowdb
 * @private
 * @async
 *
 * @param {module:bfx-hf-models-adapter-lowdb.LowDBInstance} db - db instance
 * @param {module:bfx-hf-models.Model} model - model instance
 * @returns {number} nRemoved - number of removed records
 */
const rmAll = async (db, { path }) => {
  ensureCollection(db, path)

  const nRows = db.get(path).value().length

  db.set(path, []).write()

  return nRows
}

module.exports = rmAll
