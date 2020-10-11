const Benchmark = require('benchmark');
const {allKeys} = require('./docs');
const {versions} = require('./versions');

const suite = new Benchmark.Suite;

let i = 1;
for (const name in versions) {
  const copy = versions[name];
  suite
    .add(i + '. ' + name, function() {
      copy(allKeys);
    });
  i++;
}

suite
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run();
