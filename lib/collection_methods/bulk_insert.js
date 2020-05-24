'use strict'

const ensureCollection = require('../util/ensure_collection')

/**
 * Implements
 * {@link module:bfx-hf-models.DBAdapterCollectionMethods~bulkInsert}
 *
 * @memberof module:bfx-hf-models-adapter-lowdb
 * @private
 * @async
 *
 * @param {module:bfx-hf-models-adapter-lowdb.LowDBInstance} db - db instance
 * @param {module:bfx-hf-models.Model} model - model instance
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
