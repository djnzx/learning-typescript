import { left, right } from "fp-ts/lib/Either";

const func = () => Promise.resolve(13);

const r = right<number, number>(5)
  .map(() => func())
  .map(async y => (await y) + 1)
  .fold<Promise<number>>(
  n => Promise.resolve(n),
  k => k,
);
r.then(result => console.log(result));
