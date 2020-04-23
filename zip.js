function* zip(fst, snd) {

  const fstIterable = fst[Symbol.iterator]();
  const sndIterable = snd[Symbol.iterator]();

  let isFirstDone = false;
  let isSecondDone = false;
  while (!isFirstDone && !isSecondDone) {

    const a = isFirstDone ? null : fstIterable.next();
    isFirstDone |= a && a.done;

    const b = isSecondDone ? null : sndIterable.next();
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

module.exports = zip;
