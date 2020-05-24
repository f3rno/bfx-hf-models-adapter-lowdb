'use strict'

/**
 * Creates an empty map at the path if none exists
 *
 * @memberof module:bfx-hf-models-adapter-lowdb
 * @private
 *
 * @param {module:bfx-hf-models-adapter-lowdb.LowDBInstance} db - db instance
 * @param {string} path - target path
 */
const ensureMap = (db, path) => {
  if (!db.get(path).value()) {
    db.set(path, {}).write()
  }
}

module.exports = ensureMap
