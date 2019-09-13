'use strict'

const ensureCollection = require('../util/ensure_collection')

module.exports = async (db, { path }, docs) => {
  ensureCollection(db, path)

  const values = db.get(path).values().value()
  docs.forEach(d => { values.push(d) })

  db.set(path, values).write()

  return values
}
