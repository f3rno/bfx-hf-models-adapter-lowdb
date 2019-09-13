'use strict'

const ensureMap = require('../util/ensure_map')
const idFromDocOrID = require('../util/id_from_doc_or_id')

module.exports = async (db, { mapKey, path }, value) => {
  ensureMap(db, path)

  const id = idFromDocOrID(mapKey, value)
  const fullPath = `${path}.${id}`

  db.set(fullPath, value).write()

  return value
}
