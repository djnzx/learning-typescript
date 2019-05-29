// we always deal with high-order functions:
// we never return the value - we always return the value:
// instead of
import { Function1, Lazy } from "fp-ts/lib/function";
import { Functor1 } from "fp-ts/lib/Functor";

const value = () => 42;
// we should write:
const f_value = () => () => 42;

console.log(value); // function
console.log(value());// 42, value returned from the function

console.log(f_value); // function: () => () => 42;
console.log(f_value()); // function: () => 42;
console.log(f_value()()); // 42, value returned from the function

// why? because we actually don't know when our function will be being executed

const plus1 = () => x => x + 1;
const addxy = () => (x, y) => x + y;

console.log(plus1()(5)); // 5
console.log(addxy()(5, 6)); // 11

// and we have a nice abstraction for that: Lazy<A> = () => A;
const f_value_typed: Lazy<Function> = (): Lazy<number> => (): number => 42;
const f_value_typed_1p: Lazy<Function1<number, number>> = (): Function1<number, number> => (x: number): number => 42 + x;


