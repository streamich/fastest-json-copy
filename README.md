# `fastest-json-copy`

- Fastest JSON deep clone implementation for Node.js
- Goal of this project is to track and maintain the fastest deep cloning function for plain JavaScript objects (POJOs), aka JSON objects.
- Keeps track of benchmarks of implementations.

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
fastest-json-copy (v1) x 549,333 ops/sec ±2.35% (88 runs sampled)
fast-copy x 274,848 ops/sec ±0.77% (90 runs sampled)
Fastest is fastest-json-copy (v1)
```

## License

[MIT © Vadim Dalecky](LICENSE).
