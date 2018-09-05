const sum = require('./sum');

test('test sum of 1 + 2 equal 3', () => {
  expect(sum(1,2)).toBe(3);
});