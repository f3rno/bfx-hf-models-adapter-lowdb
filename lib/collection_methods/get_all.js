'use strict'

const ensureCollection = require('../util/ensure_collection')

/**
 * @private
 *
 * @param {LowDBInstance} db - db instance
 * @param {bfx-hf-models.Model} model - model instance
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
