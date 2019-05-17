import { Either } from "tsmonad42";

class XNumber {
  constructor(readonly val1: number) {}
}

class XString {
  constructor(readonly val2: string) {}
}

class XBoolean {
  constructor(readonly val3: boolean) {}
}

const t: [XNumber, XString, XBoolean] = [new XNumber(1), new XString('Hello'), new XBoolean(true)];
console.log(t);
console.log(t[0].val1);
console.log(t[1].val2);
console.log(t[2].val3);

type TT = [XNumber, XString];

const el = Either.left<Error, TT>(new Error('error'));
const er = Either.right<Error, TT>([new XNumber(1), new XString('s')]);

console.log(el);
console.log(er);
