import * as assert from 'assert';

function pipe(...fns: Array<Function>): Function {
  const len = fns.length - 1;
  return function(this: any, x: any) {
    let y = x;
    for (let i = 0; i <= len; i++) {
      y = fns[i].call(this, y)
    }
    return y
  }
}

class Flow {
  constructor(readonly val: number) {}

  map(f: (x: number) => number): Flow {
    console.log('flow.mapping');
    return new Flow(f(this.val));
  }

  map_lazy(f: (z_: number) => number): Lazy {
    console.log('flow.mapping.to lazy');
    return new Lazy(this.val, f);
  }

  fold(): number {
    console.log('flow.folding');
    return this.val;
  }

}

class Lazy {
  constructor(
    readonly val: number,
    readonly defer_f: (z_: number) => number) {}

  fold(): Flow {
    console.log('folding lazy');
    return new Flow(this.defer_f(this.val));
  }
}

const mapper1 = n => {
  console.log('mapper1');
  return n + 1;
}; // function 1

const mapper2 = n => {
  console.log('mapper2');
  return n * 2;
}; // function 2

const mapper1_func = () => mapper1;
const mapper2_func = () => mapper2;

console.log('--- starting...');

const x = new Flow(1) // Flow
  .map(mapper1)           // Flow
  .map_lazy(mapper2)      // Lazy
  .fold()                 // Flow
  .fold()                 // number

console.log(x);

const f_ = (n: number) => Promise.resolve(n + 1);
const g_ = (n: number) => Promise.resolve(n * 2);
// const h_ = (n: number) => Promise.resolve(n * 3);

const promise_composition = async () =>
  await pipe(
    f_,
    g_,
    // h_,
  )(2);
// 1. f_: 2+1 = 3
// 2. g_: 3*2 = 6

promise_composition().then(console.log);
