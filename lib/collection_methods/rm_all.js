'use strict'

const ensureCollection = require('../util/ensure_collection')

/**
 * @private
 *
 * @param {LowDBInstance} db - db instance
 * @param {bfx-hf-models.Model} model - model instance
 * @returns {number} nRemoved - number of removed records
 */
const rmAll = async (db, { path }) => {
  ensureCollection(db, path)

  const nRows = db.get(path).value().length

  db.set(path, []).write()

  return nRows
}

module.exports = rmAll
