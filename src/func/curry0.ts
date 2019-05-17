/**
 * http://www.tomharding.me/2016/11/12/curry-on-wayward-son/
 */
const add_ = a => b => c => d => e => a + b + c + d + e;

const z1 = add_(1)(1)(1)(1)(1);

const add2 = (x, y) => x + y;

const add = x => y => x + y;

const add4 = add(4);
const add5 = add(5);

console.log(add4(1)); // 5
console.log(add4(2)); // 6

console.log(add5(1)); // 6
console.log(add5(2)); // 7

const x1 = [1, 2, 3].map(add4)
console.log(x1);

const replace = from => to => str => str.replace(from, to);
const withName  = replace(/{NAME}/);
const withTom   = withName('Tom'); // to
// const withTrump = withName('tiny hands'); // to

console.log(withTom('Hello, {NAME}!'));
console.log('Hello, NAME!'.replace(/NAME/, 'Tom'))

const uncurryish = f => {
  if (typeof f !== 'function')
    return f // Needn't curry!

  return (... xs) => uncurryish(
    xs.reduce((f, x) => f (x), f)
  )
}

