'use strict'

process.env.DEBUG = '*'

const debug = require('debug')('bfx:hf:models:adapter-lowdb:examples:usage')
const { schema: DummySchema } = require('bfx-hf-ext-plugin-dummy')
const HFDB = require('bfx-hf-models')
const HFDBLowDBAdapter = require('../')

const LOWDB_FILENAME = `${__dirname}/../db/example.json`

const db = new HFDB({
  schema: DummySchema,
  adapter: HFDBLowDBAdapter({
    dbPath: LOWDB_FILENAME
  })
})

const run = async () => {
  const { Candle } = db
  const candles = await Candle.getAll()

  debug('read %d candles', candles.length)
}

try {
  run()
} catch (e) {
  debug('error: %s', e.stack)
}
