import { zip } from '../src/zip';


test('zips an Array of ints with its own reverse', () => {

  const xs = [ 1, 2, 3 ];
  const sx = xs.concat().reverse();
  const result = Array.from(zip(xs, sx));
  expect(result).toStrictEqual([
    [ 1, 3 ],
    [ 2, 2 ],
    [ 3, 1 ],
  ]);

});


test('zips two objects together by keys and values', () => {

  const fst = { a: 0, b: 1, c: 2 };
  const snd = { a: 9, b: 8, c: 7 };

  const result = Object.fromEntries(
    zip(
      Object.keys(fst), // [a, b, c] -- Implicit assumption -- keys are identical
      zip(
        Object.values(fst), // [0, 1, 2]
        Object.values(snd), // [9, 8, 7]
      ), // [[0, 9], [1, 8], [2, 7]]
    ),
  );

  expect(result).toStrictEqual({
    a: [0, 9],
    b: [1, 8],
    c: [2, 7],
  });

});
