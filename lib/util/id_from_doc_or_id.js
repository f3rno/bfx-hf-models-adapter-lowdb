'use strict'

const _isObject = require('lodash/isObject')

/**
 * Generates a key from a partial document, or returns the ID if provided
 *
 * @memberof module:bfx-hf-models-adapter-lowdb
 * @private
 *
 * @param {Function} mapKey - must generate a valid key from a partial document
 * @param {object|string} docOrID - document or ID
 * @returns {string} ID
 */
const idFromDocOrID = (mapKey, docOrID) => {
  return _isObject(docOrID)
    ? mapKey(docOrID)
    : docOrID
}

module.exports = idFromDocOrID
