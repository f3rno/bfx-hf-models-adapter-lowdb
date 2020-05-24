'use strict'

const ensureMap = require('../util/ensure_map')

/**
 * Removes all records from the map.
 *
 * **UNIQUE TO LOWDB**
 *
 * @memberof module:bfx-hf-models-adapter-lowdb
 * @private
 * @async
 *
 * @param {module:bfx-hf-models-adapter-lowdb.LowDBInstance} db - db instance
 * @param {module:bfx-hf-models.Model} model - initialized model instance
 */
const rmAll = async (db, { path }) => {
  ensureMap(db, path)
  db.unset(path).write()
}

module.exports = rmAll
