import { Either } from "tsmonad42";

/**
 * because Javascript Error is not enumerable
 * JSON.stringify(any Error instance) === {} :)
 */
class XError {

  constructor(
    readonly name: string,
    readonly message: string,
    readonly stack?: string,
  ){}

  public static of(e: Error) {
    return new XError(e.name, e.message, e.stack);
  }
}

const e1 = new Error('instance');
// const e1 = XError.of(e0);

console.log('-----');
console.log(e1);
console.log('-----');
console.log(JSON.stringify(e1, undefined, 2));
console.log('-----');

const e2 = e1;
console.log(e2);

// const l = Either.left(e1);
// // const l = Either.left('Just message');
//
// console.log('-----');
// console.log(l);
// console.log('-----');
// console.log(JSON.stringify(l, undefined, 2));
// console.log('-----');
