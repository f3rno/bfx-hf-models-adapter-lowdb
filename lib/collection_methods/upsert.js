'use strict'

const ensureCollection = require('../util/ensure_collection')

/**
 * Either inserts a new record or updates an existing one in place if it
 * matches by the configured index.
 *
 * @memberof module:bfx-hf-models-adapter-lowdb
 * @private
 * @async
 *
 * @param {module:bfx-hf-models-adapter-lowdb.LowDBInstance} db - db instance
 * @param {module:bfx-hf-models.Model} model - initialized model instance
 * @param {object} doc - record to upsert
 * @returns {object} record - final record value
 */
const upsert = async (db, { path, index, indexMatches }, doc) => {
  if (!index) {
    throw new Error('can\'t upsert, model missing index')
  }

  ensureCollection(db, path)

  const collection = db.get(path).values().value()
  const existingIndex = collection.findIndex((d) => {
    for (let i = 0; i < indexMatches.length; i += 1) {
      if (d[indexMatches[i]] !== doc[indexMatches[i]]) {
        return false
      }
    }

    return true
  })

  if (existingIndex >= 0) {
    collection[existingIndex] = doc
  } else {
    collection.push(doc)
  }

  db.set(path, collection).write()

  return doc
}

module.exports = upsert
