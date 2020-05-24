'use strict'

const ensureMap = require('../util/ensure_map')

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterMapMethods~getAll}
 *
 * @memberof module:bfx-hf-models-adapter-lowdb
 * @private
 * @async
 *
 * @param {module:bfx-hf-models-adapter-lowdb.LowDBInstance} db - db instance
 * @param {module:bfx-hf-models.Model} model - initialized model instance
 * @returns {object} records - map of all records, key'ed by `mapKey`
 */
const getAll = async (db, { path }) => {
  ensureMap(db, path)

  return db.get(path).value()
}

module.exports = getAll
