'use strict'

const ensureMap = require('../util/ensure_map')

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterMapMethods~create}
 *
 * @memberof module:bfx-hf-models-adapter-lowdb
 * @private
 * @async
 *
 * @param {module:bfx-hf-models-adapter-lowdb.LowDBInstance} db - db instance
 * @param {module:bfx-hf-models.Model} model - initialized model instance
 * @param {object} data - data to be saved as a new record
 * @returns {object} record - created record
 */
const create = async (db, { mapKey, path }, data) => {
  ensureMap(db, path)

  const fullPath = `${path}.${mapKey(data)}`

  if (db.get(fullPath).value()) {
    throw new Error(`${fullPath} already exists, cannot create`)
  }

  db.set(fullPath, data).write()

  return db.get(fullPath).value()
}

module.exports = create
