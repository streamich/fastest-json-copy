const Benchmark = require('benchmark');
const {versions} = require('./versions');

const values = [
  {},
  [],
  {foo: 'bar'},
  {id: '123123123', name: 'Tester John', tags: ['Sports', 'News']},
  {op: 'replace', path: '/foo/bar/0/bazbazbaz', value: true},
  [1, 'id.users.get', {userId: 'zzzzzzzzzzzzzzzz'}],
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
