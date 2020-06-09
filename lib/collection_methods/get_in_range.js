'use strict'

const ensureCollection = require('../util/ensure_collection')
const verifyCriteria = require('../util/verify_criteria')

/**
 * @private
 *
 * @param {LowDBInstance} db - db instance
 * @param {bfx-hf-models.Model} model - model instance
 * @param {bfx-hf-models.DBAdapterCriteria[]} criteria - criteria
 * @param {object} range - range definition
 * @param {string} range.key - key name on records to be checked against
 *   start/end limits
 * @param {number} range.start - minimum value for `range.key`
 * @param {number} range.end - maximum value for `range.key`
 * @param {object} [sort] - sort parameters
 * @param {string} [sort.orderBy] - key to sort results by
 * @param {string} [sort.orderDirection] - `'desc'` for descending results,
 *   otherwise ascending.
 * @returns {object[]} records - matching records
 */
const getInRange = async (db, { path }, criteria, {
  key,
  start,
  end
}, { orderBy, orderDirection } = {}) => {
  ensureCollection(db, path)

  const values = db
    .get(path)
    .filter(doc => {
      return verifyCriteria(doc, criteria) && (
        doc[key] >= start && doc[key] <= end
      )
    })
    .values()
    .value()

  if (orderBy && orderDirection) {
    values.sort((a, b) => {
      return orderDirection === 'desc'
        ? b[orderBy] - a[orderBy]
        : a[orderBy] - b[orderBy]
    })
  }

  return values
}

module.exports = getInRange
