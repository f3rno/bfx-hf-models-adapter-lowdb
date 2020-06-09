'use strict'

const debug = require('debug')('bfx:hf:models:adapter-lowdb:util:verify-criteria')

/**
 * Verifies that the document matches the provided knex-compatible
 * criteria array.
 *
 * @private
 *
 * @param {object} doc - document to check
 * @param {bfx-hf-models.DBAdapterCriteria[]} criteria - knex-compatible
 * @returns {boolean} valid - true if provided invalid criteria
 */
const verifyCriteria = (doc = {}, criteria = []) => {
  return !criteria.find(crit => { // NOTE: negated
    const [fieldName, comp, value] = crit
    const docV = doc[fieldName]

    switch (comp) {
      case '=':
        return docV !== value

      case '!=':
        return docV === value

      case '>':
        return docV <= value

      case '>=':
        return docV < value

      case '<':
        return docV >= value

      case '<=':
        return docV > value

      default:
        debug('unknown comparator: %s [%j]', comp, crit)
        return true
    }
  })
}

module.exports = verifyCriteria
