'use strict'

/**
 * **UNIQUE TO LOWDB**
 *
 * @private
 *
 * @param {LowDBInstance} db - db instance
 */
const write = async (db) => {
  db.write()
}

module.exports = write
