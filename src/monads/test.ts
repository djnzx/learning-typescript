import { Option } from './option';
import { Some } from './some';
import { None } from './none';

const convert = (s: string): Option<number> => {
  const int = +s;
  if (Number.isInteger(int)) {
    return new Some<number>(int);
  } else {
    return new None<number>();
  }
};

const x1 = convert('1');
const x2 = convert('2a');

console.log(x1);
console.log(x1.has());
x1.ifHas(console.log);

console.log(x2);
console.log(x2.has());
x2.ifHas(console.log);
