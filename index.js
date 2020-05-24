'use strict'

const HFDBLowDBAdapter = require('./lib/index')

/**
 * This is an adapter around {@npm lowdb} (a lodash-powered JSON database) for
 * the Bitfinex Honey Framework. To use, initialize an instance of the
 * {@link module:bfx-hf-models|bfx-hf-models} database with it as an adapter.
 *
 * ### Features
 * * {@npm lowdb} saves the DB contents as a JSON file on disk
 * * No need to run a 3rd party database server instance
 * * Fully compatible with {@link module:bfx-hf-models|bfx-hf-models} & the HF
 *   system ({@link module:bfx-hf-data-server|bfx-hf-data-server},
 *   {@link module:bfx-hf-algo-server|bfx-hf-algo-server},
 *   {@link module:bfx-hf-algo|bfx-hf-algo}, etc)
 *
 * ### Unique Collection Methods
 * * `upsert()` - insert or update a record by index match
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
 * ### Installation
 *
 * ```bash
 * npm i --save bfx-hf-models-adapter-lowdb
 * ```
 *
 * ### Quickstart & Example
 *
 * ```js
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
 * ```
 *
 * @license Apache-2.0
 * @module bfx-hf-models-adapter-lowdb
 */

module.exports = HFDBLowDBAdapter
