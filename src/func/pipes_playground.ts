// sync way
import { pipe_async, pipe_sync } from "./pipes";

const composition = () =>
  pipe_sync(
    n => n + 1,
    n => n * 2,
    n => n * 3,
  )(2);
console.log(composition());

const promise_composition1 = async () =>
  await pipe_async(
    () => 2,
    x => Promise.resolve(x + 1),
    x => Promise.resolve(x * 2),
    x => Promise.resolve(x * 3),
  )();
promise_composition1().then(console.log);

const promise_composition2 = async () =>
  await pipe_async( () => 2,
    x => Promise.resolve(x + 1), // 3
    x => Promise.resolve(x * 2), // 6
    x => Promise.resolve(x * 3), // 18
    x => Promise.resolve(x + 1), // 19
    x => Promise.resolve(x + 1), // 20
  )();
promise_composition2().then(console.log);

