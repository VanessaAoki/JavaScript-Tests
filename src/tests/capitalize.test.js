const capitalizeSting = require('../stringcapitalize');

test('test should return Test', () => {
  expect(capitalizeSting('test')).toBe('Test');
});