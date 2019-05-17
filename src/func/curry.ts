const zipWith = f => (origin1: [number, number]) => (origin2: [number, number, number]) => {
  const length = Math.min(origin1.length, origin2.length);

  const zs = Array(length);

  for (let i = 0; i < length; i++) {
    zs[i] = f(origin1[i])(origin2[i]);
  }

  return zs;
};

const z = zipWith(x => y => x + y)([1, 2])([4, 5, 6]);

console.log(z);
