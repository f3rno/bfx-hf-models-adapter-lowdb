const debug = require('debug')('bfx:hf:models:adapter-lowdb:util:verify-criteria')

/**
 * Verifies that the document matches the provided knex-compatible
 * criteria array.
 *
 * Criteria is of the form:
 * [
 *   ['fieldA', '<', 1000],
 *   ['fieldB', '=', 'some-string'],
 * ]
 *
 * @param {Object} doc - document to check
 * @param {Array[]} criteria - knex-compatible
 * @return {boolean} valid
 */
module.exports = (doc = {}, criteria = []) => {
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
