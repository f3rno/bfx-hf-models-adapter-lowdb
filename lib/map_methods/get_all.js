'use strict'

const ensureMap = require('../util/ensure_map')

/**
 * @private
 *
 * @param {LowDBInstance} db - db instance
 * @param {bfx-hf-models.Model} model - initialized model instance
 * @returns {object} records - map of all records, key'ed by `mapKey`
 */
const getAll = async (db, { path }) => {
  ensureMap(db, path)

  return db.get(path).value()
}

module.exports = getAll
