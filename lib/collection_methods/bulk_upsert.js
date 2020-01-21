'use strict'

const ensureCollection = require('../util/ensure_collection')

// NOTE: unique to lowdb
module.exports = async (db, { path, index, indexMatches }, docs) => {
  if (!index) {
    throw new Error('can\'t upsert, model missing index')
  }

  ensureCollection(db, path)

  const collection = db.get(path).values().value()
  const toBeInserted = {}

  for (let i = 0; i < docs.length; i += 1) {
    const doc = docs[i]
    const key = indexMatches.map(k => doc[k]).join('-')
    toBeInserted[key] = doc
  }

  // Check what can be upserted
  for (let i = 0; i < collection.length; i += 1) {
    for (let j = 0; j < docs.length; j += 1) {
      const doc = docs[j]
      const equal = !indexMatches.find(k => doc[k] !== collection[i][k])

      if (equal) {
        const key = indexMatches.map(k => doc[k]).join('-')

        collection[i] = doc
        delete toBeInserted[key]
        break
      }
    }
  }

  // Insert the rest
  const insert = Object.values(toBeInserted)

  for (let i = 0; i < insert.length; i += 1) {
    collection.push(insert[i])
  }

  db.set(path, collection).write()

  return docs
}
