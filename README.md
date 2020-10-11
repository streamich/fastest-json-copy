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

For primitive values, 10x faster than `fast-copy` and 70x faster than `JSON.parse(JSON.stringify)`.

```
node benchmarks/primitives.js 
1. fastest-json-copy (v1) x 14,841,253 ops/sec ±0.65% (92 runs sampled)
2. fastest-json-copy (v2) x 14,092,359 ops/sec ±0.64% (91 runs sampled)
3. fast-copy x 1,486,431 ops/sec ±2.26% (92 runs sampled)
4. JSON.parse(JSON.stringify) x 211,240 ops/sec ±0.76% (88 runs sampled)
5. lodash.cloneDeep x 3,767,042 ops/sec ±1.06% (92 runs sampled)
6. fast-clone x 16,377,211 ops/sec ±0.86% (91 runs sampled)
7. deepclone x 4,283,380 ops/sec ±0.84% (91 runs sampled)
8. fast-deepclone x 2,668,417 ops/sec ±0.70% (89 runs sampled)
Fastest is 6. fast-clone
```

For small objects, 3x faster than `fast-copy` and 10x faster than `JSON.parse(JSON.stringify)`.

```
node benchmarks/small-values.js 
1. fastest-json-copy (v1) x 1,829,560 ops/sec ±1.78% (91 runs sampled)
2. fastest-json-copy (v2) x 1,811,327 ops/sec ±0.86% (93 runs sampled)
3. fast-copy x 547,079 ops/sec ±1.95% (88 runs sampled)
4. JSON.parse(JSON.stringify) x 182,498 ops/sec ±0.72% (90 runs sampled)
5. lodash.cloneDeep x 220,452 ops/sec ±1.43% (91 runs sampled)
6. fast-clone x 139,153 ops/sec ±1.04% (87 runs sampled)
7. deepclone x 229,912 ops/sec ±1.03% (89 runs sampled)
8. fast-deepclone x 153,742 ops/sec ±0.74% (90 runs sampled)
Fastest is 1. fastest-json-copy (v1)
```

For large objects, 3x faster than `fast-copy` and 5x faster than `JSON.parse(JSON.stringify)`.

```
node benchmarks/large-values.js 
1. fastest-json-copy (v1) x 47,361 ops/sec ±1.98% (92 runs sampled)
2. fastest-json-copy (v2) x 47,662 ops/sec ±0.77% (89 runs sampled)
3. fast-copy x 18,639 ops/sec ±1.55% (89 runs sampled)
4. JSON.parse(JSON.stringify) x 10,399 ops/sec ±0.78% (90 runs sampled)
5. lodash.cloneDeep x 6,284 ops/sec ±0.79% (91 runs sampled)
6. fast-clone x 6,437 ops/sec ±0.70% (92 runs sampled)
7. deepclone x 5,809 ops/sec ±0.75% (91 runs sampled)
8. fast-deepclone x 5,057 ops/sec ±0.82% (89 runs sampled)
Fastest is 2. fastest-json-copy (v2),1. fastest-json-copy (v1)
```

## License

[MIT © Vadim Dalecky](LICENSE).
