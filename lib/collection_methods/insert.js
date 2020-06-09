'use strict'

const ensureCollection = require('../util/ensure_collection')

/**
 * @private
 *
 * @param {LowDBInstance} db - db instance
 * @param {bfx-hf-models.Model} model - initialized model instance
 * @param {object} doc - record to be inserted
 * @returns {object} record - inserted record data
 */
const insert = async (db, { path }, doc) => {
  ensureCollection(db, path)

  return db.get(path).push(doc).write()
}

module.exports = insert
