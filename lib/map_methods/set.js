'use strict'

const ensureMap = require('../util/ensure_map')
const idFromDocOrID = require('../util/id_from_doc_or_id')

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterMapMethods~set}
 *
 * @memberof module:bfx-hf-models-adapter-lowdb
 * @private
 * @async
 *
 * @param {module:bfx-hf-models-adapter-lowdb.LowDBInstance} db - db instance
 * @param {module:bfx-hf-models.Model} model - initialized model instance
 * @param {object} value - record value, containing relevant data for key
 *   generation. Any existing record with the same key will be overwritten.
 * @returns {object} record - final record value as stored in the DB
 */
const set = async (db, { mapKey, path }, value) => {
  ensureMap(db, path)

  const id = idFromDocOrID(mapKey, value)
  const fullPath = `${path}.${id}`

  db.set(fullPath, value).write()

  return value
}

module.exports = set
