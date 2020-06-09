'use strict'

/**
 * Creates an empty collection at the path if none exists
 *
 * @private
 *
 * @param {LowDB} db - `lowdb` instance
 * @param {string} path - target path for collection
 */
const ensureCollection = (db, path) => {
  if (!db.get(path).value()) {
    db.set(path, []).write()
  }
}

module.exports = ensureCollection
