export function* zipiter(fst, snd) {

  const fstIterable = fst[Symbol.iterator]();
  const sndIterable = snd[Symbol.iterator]();

  let isFirstDone = false;
  let isSecondDone = false;
  while (!isFirstDone || !isSecondDone) {

    const a = isFirstDone ? undefined : fstIterable.next();
    isFirstDone |= a && a.done;

    const b = isSecondDone ? undefined : sndIterable.next();
    isSecondDone |= b && b.done;

    if (isFirstDone && isSecondDone) {
      break;
    }

    yield [
      a && a.value,
      b && b.value
    ];

  }

}
