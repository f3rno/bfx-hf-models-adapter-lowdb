'use strict'

const ensureMap = require('../util/ensure_map')

/**
 * **UNIQUE TO LOWDB**
 *
 * @private
 *
 * @param {LowDBInstance} db - db instance
 * @param {bfx-hf-models.Model} model - initialized model instance
 */
const rmAll = async (db, { path }) => {
  ensureMap(db, path)
  db.unset(path).write()
}

module.exports = rmAll
