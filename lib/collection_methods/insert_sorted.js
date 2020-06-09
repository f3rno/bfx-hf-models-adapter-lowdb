'use strict'

const ensureCollection = require('../util/ensure_collection')
const binSearchInsert = require('binary-search-insert')

/**
 * **UNIQUE TO LOWDB**
 *
 * @private
 *
 * @param {LowDBInstance} db - db instance
 * @param {bfx-hf-models.Model} model - initialized model instance
 * @param {object} sort - sort configuration
 * @param {string} [sort.dir] - ascending if 'asc', descending otherwise
 * @param {string} sort.key - key of value on records to sort by
 * @param {object} doc - record to be inserted
 * @returns {object} record - inserted record data
 */
const insertSorted = async (db, { path }, sort, doc) => {
  ensureCollection(db, path)

  const allDocs = db.get(path).value()

  const { dir, key: sortKey } = sort
  const comp = dir === 'asc'
    ? (a, b) => a[sortKey] - b[sortKey]
    : (a, b) => b[sortKey] - a[sortKey]

  binSearchInsert(allDocs, comp, doc)

  db.set(path, allDocs)

  return doc
}

module.exports = insertSorted
