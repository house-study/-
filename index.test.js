const reverseArray = require("./index");

test("숫자 배열을 뒤집기", () => {
  expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
});

test("중첩된 배열 뒤집기", () => {
  expect(reverseArray([1, [2, 3], 4])).toEqual([4, [3, 2], 1]);
});

test("빈 배열 뒤집기", () => {
  expect(reverseArray([])).toEqual([]);
});

test("단일 요소가 있는 배열 뒤집기", () => {
  expect(reverseArray([100])).toEqual([100]);
});

test("일부가 비어 있는 중첩 배열 뒤집기", () => {
  expect(reverseArray([[], [1, 2], [], [3, 4], []])).toEqual([
    [],
    [4, 3],
    [],
    [2, 1],
    [],
  ]);
});

test("매우 깊게 중첩된 배열 뒤집기", () => {
  expect(reverseArray([1, [2, [3, [4, [5, 6]]]]])).toEqual([
    [[[[6, 5], 4], 3], 2],
    1,
  ]);
});
