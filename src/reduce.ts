const a0 = [true, true, true];

const a11 = [true, true, false];
const a12 = [true, false, true];
const a13 = [false, true, true];

const reducer = (a, b) => a && b;

console.log(a0.reduce(reducer, true));
console.log(a11.reduce(reducer, true));
console.log(a12.reduce(reducer, true));
console.log(a13.reduce(reducer, true));
