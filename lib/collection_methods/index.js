'use strict'

const find = require('./find')
const rmAll = require('./rm_all')
const getAll = require('./get_all')
const update = require('./update')
const insert = require('./insert')
const bulkInsert = require('./bulk_insert')
const insertSorted = require('./insert_sorted')
const getInRange = require('./get_in_range')
const upsert = require('./upsert')
const bulkUpsert = require('./bulk_upsert')

module.exports = {
  find,
  rmAll,
  getAll,
  update,
  insert,
  bulkInsert,
  insertSorted,
  getInRange,
  upsert,
  bulkUpsert
}
