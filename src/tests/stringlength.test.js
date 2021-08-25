const stringLength = require('../stringlength');

test('returns 7 as the characters count', () => {
  expect(stringLength('testing')).toBe(7);
});

test('returns an Error because string is too long', () => {
  expect(() => stringLength('testingToGiveError')).toThrow(Error);
});

test('returns an Error because string is too short', () => {
  expect(() => stringLength('a')).toThrow('This is not a valid number');
});
