## Bitfinex Honey Framework LowDB Adapter for Node.JS

This is an adapter around lowdb (a lodash-powered JSON database) for the Bitfinex Honey Framework. To use, initialize an instance of the `bfx-hf-models` database with it as an adapter.

### Features
* `lowdb` saves the DB contents as a JSON file on disk
* No need to run a 3rd party database server instance
* Fully compatible with `bfx-hf-models` & the HF system (`bfx-hf-data-server`, `bfx-hf-algo-server`, `bfx-hf-algo`, etc)

### Installation

```bash
npm i --save bfx-hf-models-adapter-lowdb
```

### Quickstart & Example

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

### Docs

[Refer to the `examples/`](/examples) folder for executable examples. For information on the available model methods, check the documentation for [bfx-hf-models](https://github.com/bitfinexcom/bfx-hf-models/tree/master/docs)

### Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
