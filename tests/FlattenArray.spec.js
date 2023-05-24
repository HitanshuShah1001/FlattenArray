const Flattenme = require("../index.js");

test("Flatten check ", () => {
  expect(Flattenme([1, 2, [5, 6, 7, 8]])).toEqual([1, 2, 5, 6, 7, 8]);
  expect(Flattenme([1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  expect(Flattenme([[1], [2], [3], [4], [5]])).toEqual([1, 2, 3, 4, 5]);
  expect(Flattenme([[1, [2, [3, [4]]]], 5, [6, [7, 8, [9]]], 10])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  expect(Flattenme([])).toEqual([]);

  expect(Flattenme([[], [], []])).toEqual([]);
  expect(Flattenme([1, undefined, 3, [null, 5], {}, "6"])).toEqual([
    1,
    undefined,
    3,
    "null",
    5,
    "{}",
    "6",
  ]);
  expect(
    Flattenme([Infinity, -Infinity, NaN, [0, [NaN, [Infinity, [-Infinity]]]]])
  ).toEqual([Infinity, -Infinity, NaN, 0, NaN, Infinity, -Infinity]);
  expect(Flattenme([1, [2, [3, [4]]], { prop: "value" }, true])).toEqual([
    1,
    2,
    3,
    4,
    '{"prop":"value"}',
    true,
  ]);
  expect(Flattenme([1, [2, [3, [4]]], [5, [6, [7, [8]]]]])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);
});
