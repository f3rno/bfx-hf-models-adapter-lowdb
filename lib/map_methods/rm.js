'use strict'

const ensureMap = require('../util/ensure_map')
const idFromDocOrID = require('../util/id_from_doc_or_id')

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterMapMethods~rm}
 *
 * @throws {Error} fails if record does not exist
 * @memberof module:bfx-hf-models-adapter-lowdb
 * @private
 * @async
 *
 * @param {module:bfx-hf-models-adapter-lowdb.LowDBInstance} db - db instance
 * @param {module:bfx-hf-models.Model} model - initialized model instance
 * @param {object|string|number} docOrID - record to remove or its ID
 */
const rm = async (db, { mapKey, path }, docOrID) => {
  ensureMap(db, path)

  const id = idFromDocOrID(mapKey, docOrID)
  const fullPath = `${path}.${id}`
  const v = db.get(fullPath).value()

  if (!v) {
    throw new Error(`value does not exist: ${fullPath}`)
  }

  db.unset(`${path}.${id}`).write()
}

module.exports = rm
