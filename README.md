## LowDB Adapter for the Honey Framework DB
This is an adapter around lowdb (a lodash-powered JSON database) for the Bitfinex Honey Framework. To use, initialize an instance of the `bfx-hf-models` database with it as an adapter.

Example:

```js
const HFDBLowDBAdapter = require('bfx-hf-models-adapter-lowdb')
const { schema: HFDBBitfinexSchema } = require('bfx-hf-ext-plugin-bitfinex')
const HFDB = require('bfx-hf-models')

const LOWDB_FILENAME = '...'

const db = new HFDB({
  schema: HFDBBitfinexSchema,
  adapter: HFDBLowDBAdapter({
    dbPath: LOWDB_FILENAME,
    schema: HFDBBitfinexSchema,
  }),
})

const { Candle } = db
const candles = await Candle.getAll()

console.log(`read ${candles.length} candles`)
```