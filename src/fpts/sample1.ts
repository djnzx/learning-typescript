import { left, right } from "fp-ts/lib/Either";

const e1 = left<number, string>(5);
const e2 = right<number, string>('hello');
const e3 = e2.mapLeft(x => x+1).map(r => r.toUpperCase());

const e11 = e1.bimap(() => -1, () => 'Done');
const e12 = e2.bimap(() => -1, () => 'Done');

console.log(e1.toString());
console.log(e2.toString());

console.log(e11.toString());
console.log(e12.toString());

const outcome = e2.fold<string>(
  (n: number) => `_${n}_`,
  (s: string) => `+${s}+`,
);
console.log(outcome);

const q1 = e2.chain(s => right(`${s}+`));
console.log(q1);
