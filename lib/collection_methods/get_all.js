'use strict'

const ensureCollection = require('../util/ensure_collection')

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterCollectionMethods~getAll}
 *
 * @memberof module:bfx-hf-models-adapter-lowdb
 * @private
 * @async
 *
 * @param {module:bfx-hf-models-adapter-lowdb.LowDBInstance} db - db instance
 * @param {module:bfx-hf-models.Model} model - model instance
 * @returns {object[]} records
 */
const getAll = async (db, { path }) => {
  ensureCollection(db, path)

  return db
    .get(path)
    .values()
    .value()
}

module.exports = getAll
