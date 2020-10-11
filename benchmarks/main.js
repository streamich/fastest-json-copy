const Benchmark = require('benchmark');
const {deepClone: v1} = require('../lib');
const fastCopy = require('fast-copy');
const {allKeys} = require('./docs');

const suite = new Benchmark.Suite;

suite
  .add(`fastest-json-copy (v1)`, function() {
    v1(allKeys);
  })
  .add(`fast-copy`, function() {
    fastCopy(allKeys);
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run();
