'use strict'

/**
 * Creates an empty map at the path if none exists
 *
 * @private
 *
 * @param {LowDBInstance} db - db instance
 * @param {string} path - target path
 */
const ensureMap = (db, path) => {
  if (!db.get(path).value()) {
    db.set(path, {}).write()
  }
}

module.exports = ensureMap
