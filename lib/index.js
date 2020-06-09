'use strict'

const debug = require('debug')('bfx:hf:models:adapter-lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const _isString = require('lodash/isString')
const _isObject = require('lodash/isObject')
const _isEmpty = require('lodash/isEmpty')
const lowdb = require('lowdb')

const mapMethods = require('./map_methods')
const genericMethods = require('./generic_methods')
const collectionMethods = require('./collection_methods')

/**
 * Adapter generator based on provided configuration
 *
 * @throws {Error} fails if given an invalid or empty `dbPath`
 * @private
 *
 * @param {object} config - configuration
 * @param {string} config.dbPath - path to `lowdb` JSON store on disk
 * @param {object} [config.defaultData] - optional seed data if the DB is blank
 * @param {Function} [config.Backend=FileSync] - lowdb backend, by default
 *   store is synced to a file on disk at `dbPath`
 * @returns {bfx-hf-models.DBAdapter} adapter
 */
const AdapterGenerator = ({
  dbPath,
  defaultData,
  Backend = FileSync
}) => {
  if (!_isString(dbPath) || _isEmpty(dbPath)) {
    throw new Error('DB path required')
  }

  debug('loading from %s', dbPath)

  const db = lowdb(new Backend(dbPath))

  if (_isObject(defaultData) && !_isEmpty(defaultData)) {
    db.defaults(defaultData).write()
  }

  const close = db.write.bind(db) // can't close lowdb, just flush changes

  /**
   * @type {bfx-hf-models.Model}
   * @constant
   * @readonly
   */
  const LowDBAdapter = {
    db,
    close,
    mapMethods,
    collectionMethods,
    genericMethods,
    name: 'LowDB'
  }

  return LowDBAdapter
}

module.exports = AdapterGenerator