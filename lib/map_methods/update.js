'use strict'

const ensureMap = require('../util/ensure_map')
const idFromDocOrID = require('../util/id_from_doc_or_id')

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterMapMethods~update}
 *
 * @throws {Error} fails if record does not exist
 * @memberof module:bfx-hf-models-adapter-lowdb
 * @private
 * @async
 *
 * @param {module:bfx-hf-models-adapter-lowdb.LowDBInstance} db - db instance
 * @param {module:bfx-hf-models.Model} model - initialized model instance
 * @param {object|string|number} docOrID - record to update or its ID
 * @param {object} value - new data for the record
 * @returns {number} nUpdatedRows - number of updated rows (always 1)
 */
const update = async (db, { mapKey, path }, docOrID, value) => {
  ensureMap(db, path)

  const id = idFromDocOrID(mapKey, docOrID)
  const fullPath = `${path}.${id}`
  const v = db.get(fullPath).value()

  if (!v) {
    throw new Error(`value does not exist: ${fullPath}`)
  }

  db.set(fullPath, {
    ...v,
    ...value
  }).write()

  return 1 // updated rows
}

module.exports = update
