class Flow {
  constructor(readonly val: number) {}

  map(f: (x: number) => number): Flow {
    console.log('flow.mapping');
    return new Flow(f(this.val));
  }

  map_lazy(f: (z_: number) => number): Lazy {
    return new Lazy(this.val, f);
  }

  fold(): number {
    console.log('flow.folding');
    return this.val;
  }

}

class Lazy {
  constructor(readonly val: number, readonly defer_f: (z_: number) => number) {}

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

const x = new Flow(1)
  .map(mapper1)
  .map_lazy(mapper2)
  .fold()
  .fold()

console.log(x);
