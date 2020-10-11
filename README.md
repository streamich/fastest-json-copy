# `fastest-json-copy`

- Fastest JSON deep clone implementation for Node.js
- Goal of this project is to track and maintain the fastest deep cloning function for plain JavaScript objects (POJOs), aka JSON objects.
- Keeps track of benchmarks of all other implementations.

## Usage

Install

```
yarn add fastest-json-copy
```

Use

```js
import {copy} from 'fastest-json-copy';

copy({foo: 'bar'});
```


## Performance

```
node benchmarks/main.js 
1. fastest-json-copy (v1) x 503,154 ops/sec ±2.31% (91 runs sampled)
2. fast-copy x 256,505 ops/sec ±1.08% (89 runs sampled)
3. JSON.parse(JSON.stringify) x 123,357 ops/sec ±1.05% (88 runs sampled)
4. lodash.cloneDeep x 72,527 ops/sec ±0.70% (91 runs sampled)
5. fast-clone x 80,488 ops/sec ±0.85% (92 runs sampled)
6. deepclone x 60,886 ops/sec ±0.81% (92 runs sampled)
7. fast-deepclone x 46,326 ops/sec ±0.65% (88 runs sampled)
Fastest is 1. fastest-json-copy (v1)
```

## License

[MIT © Vadim Dalecky](LICENSE).
