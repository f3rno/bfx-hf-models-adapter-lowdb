'use strict'

const ensureCollection = require('../util/ensure_collection')

/**
 * @private
 *
 * @param {LowDBInstance} db - db instance
 * @param {bfx-hf-models.Model} model - model instance
 * @param {object[]} docs - records to insert
 * @returns {object[]} insertedRecords
 */
const bulkInsert = async (db, { path }, docs) => {
  ensureCollection(db, path)

  const values = db.get(path).values().value()
  docs.forEach(d => { values.push(d) })

  db.set(path, values).write()

  return values
}

module.exports = bulkInsert
