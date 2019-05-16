const fx = async (val: number) => await new Promise<number>(((resolve, reject) => {
  switch (val) {
    case 1: resolve(123);
    case 2: reject([500, "internal"]);
    default: throw new Error('Intentionally');
  }
}))
  .then(v => console.log("then:", v))
  .catch(a => {
    console.log("catch:", a);
    console.log("going on...")
  })

fx(1); // then: 123
fx(2); // catch: [ 500, 'internal' ]
fx(3); // catch: Error: Intentionally + stacktrace


/**
 * The main Problem - when we catch the error - we get var type of any!!!
 * so we lose context and type casting.
 *
 * and I'm against of silent catch and throw Error
 */
