'use strict'

/**
 * Flushes all changes to disk.
 *
 * **UNIQUE TO LOWDB**
 *
 * @memberof module:bfx-hf-models-adapter-lowdb
 * @private
 * @async
 *
 * @param {module:bfx-hf-models-adapter-lowdb.LowDBInstance} db - db instance
 */
const write = async (db) => {
  db.write()
}

module.exports = write
