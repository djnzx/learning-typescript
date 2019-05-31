import { io, IO } from "fp-ts/lib/IO";
import { constant } from "fp-ts/lib/function";
import { error, log } from "fp-ts/lib/Console";

const base1 = new IO( () => 1); // IO<number>   // canonic way. run = () => 1
const base3 = io.of(1);              // IO<number>   // sugar way 1. new IO(() => a)
const base2 = new IO(constant(1));// IO<number>   // sugar way 2. constant returns () => a, but it doesn't accept any parameters
// if we need specific behavior we should write:
const base4 = new IO<string>(() => { console.log('77'); return '+77+'; })

const k1 = log('hello');    // return new IO<void>(() => console.log(s))
const k2 = error('world');
const k3 = error('my name');
const k4 = error('is Alex');

// chain method takes the current value and passes it to function f(a: A) = IO<B>

base1
  .chain(val                  => new IO(() => { console.log(val); return val; }))
  .chain(val1                 => new IO(() => { const val2 = val1 + 1; console.log(val2); return [val1, val2]; }))
  .chain(([val1, val2])       => new IO(() => { const val3 = val2 + 1; console.log(val3); return [val1, val2, val3]; }))
  .chain(([val1, val2, val3]) => new IO(() => { const val4 = val3 + 1; console.log(val4); return [val1, val2, val3, val4]; }))
  .chain((all) => log(all))
  .chain( () => base4)
  .chain((all) => log(all))
  .run();

k1
  .chain(() => k2)
  .chain(() => k3)
  .chain(() => k4)
  .run();
