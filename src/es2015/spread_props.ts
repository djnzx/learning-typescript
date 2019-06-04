import * as fs from 'fs';
import { Utf8AsciiBinaryEncoding } from 'crypto';

const f1_ = () => {
  const numbers = [1, 2, 3, 4, 5];
    const [first, second, ...others] = numbers;
};

const f2_ = () => {
  const numbers = [1, 2, 3, 4, 5];
  const sum = (a, b, c, d, e) => a + b + c + d + e;
  // WTF
  // sum(...numbers)
};

