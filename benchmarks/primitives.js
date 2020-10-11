const Benchmark = require('benchmark');
const {versions} = require('./versions');

const values = [
  0,
  1
  -1,
  22384345435,
  -23453245,
  23.4352352345,
  2345.245e50,
  '',
  'foo',
  'lorem ipsum dolorem, durum kebab',
  false,
  true,
  null,
];

const suite = new Benchmark.Suite;

let i = 1;
for (const name in versions) {
  const copy = versions[name];
  suite
    .add(i + '. ' + name, function() {
      for (const value of values) copy(value);
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
