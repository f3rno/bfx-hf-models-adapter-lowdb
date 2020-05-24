'use strict'

/**
 * Creates an empty collection at the path if none exists
 *
 * @memberof module:bfx-hf-models-adapter-lowdb
 * @private
 *
 * @param {LowDB} db - {@npm lowdb} instance
 * @param {string} path - target path for collection
 */
const ensureCollection = (db, path) => {
  if (!db.get(path).value()) {
    db.set(path, []).write()
  }
}

module.exports = ensureCollection
