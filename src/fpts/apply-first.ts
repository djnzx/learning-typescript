import { IO } from "fp-ts/lib/IO";

console.log('applyFirst:');

const global: Array<string> = [];

const append = (m: string): IO<string> => new IO(() => { global.push(m); return m; });

const takenFirst = append('first')
  .applyFirst(append('second'))
  .run();

const takenSecond = append('first')
  .applySecond(append('second'))
  .run();

console.log(takenFirst);
console.log(global);

console.log(takenSecond);
console.log(global);
