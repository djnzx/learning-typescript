import {io, IO} from "fp-ts/lib/IO";

const plus2 = x => x + 2;
const plus3 = x => x + 3;
const mult2 = x => x * 2;
const mult3 = x => x * 3;

const io_plus2__ = x => new IO( () => x + 2 );
const io_plus2_ = x => new IO( () => plus2(x) );
const io_plus2 = x => io.of( plus2(x) );
const io_plus3 = x => io.of( plus3(x) );
const io_mult2 = x => io.of( mult2(x) );
const io_mult3 = x => io.of( mult3(x) );

const ap_plus2 = io.of( x => plus2(x) );
const ap_plus3 = io.of( x => plus3(x) );
const ap_mult2 = io.of( x => mult2(x) );
const ap_mult3 = io.of( x => mult3(x) );

const step1: IO<number> = io.of(1); // 1
const step2: IO<number> = step1.map( plus2 ); //3
const step3: IO<string> = step2.map( x => `${x}_` ); //3_
const step31: IO<number> = step2.chain( x => io.of(x * 3) ); // 9

/**
 *  .map()
 *  @takes: f(x: A) => y: B
 *  @returns: IO<B>
 *
 *  .chain()
 *  @takes: f(x: A) => IO<B>
 *  @returns: IO<B>
 *
 *
 */

console.log(':map:');
console.log(
    step1              // 1
        .map(plus2)    // 3
        .map(mult2)    // 6
        .run()
);

console.log(':chain:');
console.log(
    step1                  // 1
        .chain(io_plus2_)   // 3
        .chain(io_mult2)   // 6
        .run()
);

console.log(':apply:');
console.log(
    step1               // 1
        .ap( ap_plus2 ) // 3
        .ap( ap_mult3 ) // 9
        .run()
);

console.log(':apply_:');
const fab = io.of(mult2);
const fa = io.of(1);

console.log( fa.ap(fab).run() );
console.log( fab.ap_(fa).run() );

const val = io.of(7);
const x2_ = new IO(() => x => x * 2);
const x2 = io.of(x => x * 2);
const x3 = io.of(x => x * 3);
console.log('apply, conscious thoughts');
const applied_x2 = val.ap(x2_);
const applied_x3 = val.ap(x3);
console.log(applied_x2.run());
console.log(applied_x3.run());

console.log('applyFirst:');

const log: Array<string> = [];
const append = (message: string): IO<number> => new IO(() => log.push(message));

const xx = append('a')
  .applyFirst(append('b'))
  .run();

console.log(xx);
console.log(log);
