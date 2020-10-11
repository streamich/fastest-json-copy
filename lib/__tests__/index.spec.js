const {deepClone} = require('..');

test('copies primitives', () => {
  const test = num => expect(deepClone(num)).toBe(num);
  test(0);
  test(1);
  test(3);
  test(-1);
  test(-3);
  test(true);
  test(false);
  test(null);
  test('');
  test('foo');
});

const check = val => {
  const result = deepClone(val);
  expect(result).toEqual(val);
  expect(result).not.toBe(val);
};

test('copies shallow array', () => {
  check([]);
  check([1]);
  check([1, 2, 3]);
  check([true, false]);
  check([null]);
  check(['']);
  check(['foo', 'bar']);
  check([1, true, 'foo', null]);
  check([{}]);
});

test('copies shallow object', () => {
  check({});
  check({foo: 'bar'});
  check({foo: 1});
  check({foo: true});
  check({foo: false});
  check({foo: null});
  check({foo: []});
  check({foo: 1, bar: 'baz', qux: null});
});

test('copies deep object', () => {
  check({
    a: 0,
    b: 1,
    c: '',
    d: 'd',
    e: true,
    f: false,
    g: null,
    h: [],
    i: {},
    k: [0, 1, '', 'd', true, false, null, [], {}],
    l: {
      a: 0,
      b: 1,
      c: '',
      d: 'd',
      e: true,
      f: false,
      g: null,
      h: [],
      i: {},
      k: [0, 1, '', 'd', true, false, null, [], {}],
    },
    m: [
      {
        a: 0,
        b: 1,
        c: '',
        d: 'd',
        e: true,
        f: false,
        g: null,
        h: [],
        i: {},
        k: [0, 1, '', 'd', true, false, null, [], {}],
      },
    ],
  });
});
