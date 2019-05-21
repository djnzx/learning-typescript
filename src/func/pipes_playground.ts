import { pipe_async, pipe_async2, pipe_sync } from "./pipes";

class FuncFlow {
  private functions: Array<Function> = [];

  public static from(first: Function): FuncFlow {
    return new FuncFlow(first);
  }

  constructor(first: Function) {
    this.functions.push(first);
  }

  public chain(next: Function): FuncFlow {
    this.functions.push(next);
    return this;
  }

  public async fold() {
    return pipe_async2(this.functions)();
  }
}

// sync way
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

FuncFlow.from(() => 2) // 2
  .chain( x => Promise.resolve(x + 1) ) // 3
  .chain( x => Promise.resolve(x * 2) ) // 6
  .chain( x => Promise.resolve(x * 3) ) // 18
  .chain( x => Promise.resolve(x + 1) ) // 19
  .fold()
  .then(console.log);

