const {
  add, subtract, divide, multiply,
} = require('../calculator');

describe('add', () => {
  test('1 + 2 is 3', () => {
    const adding = add(1, 2);
    expect(adding).toBe(3);
  });

  test('10 + 46546546 is 46546556', () => {
    const adding = add(10, 46546546);
    expect(adding).toBe(46546556);
  });

  test('5465465214 + 84032101304 is 89497566518', () => {
    const adding = add(5465465214, 84032101304);
    expect(adding).toBe(89497566518);
  });
});

describe('subtract', () => {
  test('1 - 2 is -1', () => {
    const subtracting = subtract(1, 2);
    expect(subtracting).toBe(-1);
  });

  test('10 - 8 is 2', () => {
    const subtracting = subtract(10, 8);
    expect(subtracting).toBe(2);
  });

  test('46546546 - 10 is 46546536', () => {
    const subtracting = subtract(46546546, 10);
    expect(subtracting).toBe(46546536);
  });
});

describe('divide', () => {
  test('4 / 2 is 2', () => {
    const dividing = divide(4, 2);
    expect(dividing).toBe(2);
  });

  test('4 / 3 is 1.3333333333333333', () => {
    const dividing = divide(4, 3);
    expect(dividing).toBe(1.3333333333333333);
  });

  test('1 / 100000 is 0.00001', () => {
    const dividing = divide(1, 100000);
    expect(dividing).toBe(0.00001);
  });
});

describe('multiply', () => {
  test('1 * 3 is 3', () => {
    const multiplying = multiply(1, 3);
    expect(multiplying).toBe(3);
  });

  test('56156165748940156210984 * 0 is 0', () => {
    const multiplying = multiply(56156165748940156210984, 0);
    expect(multiplying).toBe(0);
  });

  test('2154992346 * 2 is 4309984692', () => {
    const multiplying = multiply(2154992346, 2);
    expect(multiplying).toBe(4309984692);
  });
});
