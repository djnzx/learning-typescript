import { Either } from "tsmonad42";

Either.left<string, number>('A')
  .lift(async v => Promise.resolve(v + 1))
  .lift(async v => Promise.resolve(await v + 1))
  .lift(async v => Promise.resolve(await v + 1))
  .caseOf({
    left: () => Promise.resolve(-1),
    right: (v) => v,
  }).then(z => console.log(z))
