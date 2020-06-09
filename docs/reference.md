<a name="bfx-hf-models-adapter-lowdb"></a>

## bfx-hf-models-adapter-lowdb(config) ⇒ <code>bfx-hf-models.DBAdapter</code>
This is an adapter around `lowdb` (a lodash-powered JSON database) for the
Bitfinex Honey Framework. To use, initialize an instance of the
[bfx-hf-models](https://github.com/bitfinexcom/bfx-hf-models) database with it as an adapter.

### Unique Collection Methods
* `bulkUpsert()` like `upsert()` but for multiple records
* `insertSorted()` - insert a record while maintaing sort (sort configured
  per-call)

### Unique Map Methods
* `rmAll()` - removes all records

### Unique Generic Methods
* `write()` - flushes all changes to disk

**Kind**: global function  
**Returns**: <code>bfx-hf-models.DBAdapter</code> - adapter  
**Throws**:

- <code>Error</code> fails if given an invalid or empty `dbPath`

**License**: Apache-2.0  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| config | <code>object</code> |  | configuration |
| config.dbPath | <code>string</code> |  | path to `lowdb` JSON store on disk |
| [config.defaultData] | <code>object</code> |  | optional seed data if the DB is blank |
| [config.Backend] | <code>function</code> | <code>FileSync</code> | lowdb backend, by default   store is synced to a file on disk at `dbPath` |

**Example**  
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
