'use strict'

const HFDBLowDBAdapter = require('./lib')

/**
 * This is an adapter around `lowdb` (a lodash-powered JSON database) for the
 * Bitfinex Honey Framework. To use, initialize an instance of the
 * {@link external:bfx-hf-models} database with it as an adapter.
 *
 * ### Unique Collection Methods
 * * `bulkUpsert()` like `upsert()` but for multiple records
 * * `insertSorted()` - insert a record while maintaing sort (sort configured
 *   per-call)
 *
 * ### Unique Map Methods
 * * `rmAll()` - removes all records
 *
 * ### Unique Generic Methods
 * * `write()` - flushes all changes to disk
 *
 * @license Apache-2.0
 * @module bfx-hf-models-adapter-lowdb
 * @function
 * @throws {Error} fails if given an invalid or empty `dbPath`
 *
 * @param {object} config - configuration
 * @param {string} config.dbPath - path to `lowdb` JSON store on disk
 * @param {object} [config.defaultData] - optional seed data if the DB is blank
 * @param {Function} [config.Backend=FileSync] - lowdb backend, by default
 *   store is synced to a file on disk at `dbPath`
 * @returns {bfx-hf-models.DBAdapter} adapter
 *
 * @example
 * const HFDBLowDBAdapter = require('bfx-hf-models-adapter-lowdb')
 * const { schema: HFDBBitfinexSchema } = require('bfx-hf-ext-plugin-bitfinex')
 * const HFDB = require('bfx-hf-models')
 *
 * const LOWDB_FILENAME = '...'
 *
 * const db = new HFDB({
 *   schema: HFDBBitfinexSchema,
 *   adapter: HFDBLowDBAdapter({
 *     dbPath: LOWDB_FILENAME,
 *     schema: HFDBBitfinexSchema,
 *   }),
 * })
 *
 * const { Candle } = db
 * const candles = await Candle.getAll()
 *
 * console.log(`read ${candles.length} candles`)
 */

/**
 * @external bfx-hf-models
 * @see https://github.com/bitfinexcom/bfx-hf-models
 */

module.exports = HFDBLowDBAdapter
