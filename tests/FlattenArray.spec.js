const FlattenArray = require("../index.js");

test("Flatten check ", () => {
  expect(FlattenArray([1, 2, [5, 6, 7, 8]])).toEqual([1, 2, 5, 6, 7, 8]);
  expect(
    FlattenArray([1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]])
  ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(FlattenArray([[1], [2], [3], [4], [5]])).toEqual([1, 2, 3, 4, 5]);
  expect(FlattenArray([[1, [2, [3, [4]]]], 5, [6, [7, 8, [9]]], 10])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  expect(FlattenArray([])).toEqual([]);

  expect(FlattenArray([[], [], []])).toEqual([]);
  expect(FlattenArray([1, undefined, 3, [null, 5], {}, "6"])).toEqual([
    1,
    undefined,
    3,
    "null",
    5,
    "{}",
    "6",
  ]);
  expect(
    FlattenArray([
      Infinity,
      -Infinity,
      NaN,
      [0, [NaN, [Infinity, [-Infinity]]]],
    ])
  ).toEqual([Infinity, -Infinity, NaN, 0, NaN, Infinity, -Infinity]);
  expect(FlattenArray([1, [2, [3, [4]]], { prop: "value" }, true])).toEqual([
    1,
    2,
    3,
    4,
    '{"prop":"value"}',
    true,
  ]);
  expect(FlattenArray([1, [2, [3, [4]]], [5, [6, [7, [8]]]]])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);
});
