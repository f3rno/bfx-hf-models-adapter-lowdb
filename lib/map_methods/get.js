'use strict'

const ensureMap = require('../util/ensure_map')
const idFromDocOrID = require('../util/id_from_doc_or_id')

/**
 * @private
 *
 * @param {LowDBInstance} db - db instance
 * @param {bfx-hf-models.Model} model - initialized model instance
 * @param {object|string|number} docOrID - record to fetch or its ID
 * @returns {object} record - matching record
 */
const get = async (db, { mapKey, path }, docOrID) => {
  ensureMap(db, path)

  const id = idFromDocOrID(mapKey, docOrID)
  const fullPath = `${path}.${id}`

  return db.get(fullPath).value()
}

module.exports = get
