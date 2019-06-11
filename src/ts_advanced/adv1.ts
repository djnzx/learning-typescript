// typed maps
import { Omit } from "sequelize-typescript/lib/utils/types";

const SERVICES: Record<string, string> = {
  doorToDoor: "delivery at door",
  airDelivery: "flying in",
};

interface ProductLine {
  id: number;
  sku: string;
  price: number;
  qty: number;
  comment: string;
  active: boolean;
}

// automatic typing
// const pl: ProductLine = {
//   id: 5,
// };

enum MsgEnum {
  Info = 'Info',
  Warn = 'Warn',
}

type Errors = Record<MsgEnum, string>[];

interface Wide {
  a: number;
  b: number;
  c: number;
  d: boolean;
}
const w: Wide = { a: 5, b: 6, c: 7, d: true };

type OptWide = Partial<Wide>;
const ow: OptWide = { a: 5 };

type RequiredWide = Required<OptWide>;
const rw: RequiredWide = { a: 5, b: 6, c: 7, d: true };

type NarrowWith = Pick<Wide, 'a' | 'b'>
const nwi: NarrowWith = { a: 5, b: 6 };

type NarrowWithout = Omit<Wide, 'a' | 'b'>;
const nwo: NarrowWithout = { c: 7, d: true };

interface I1 {
  a: number;
}

interface I2 {
  b: number;
}

type T12AND = I1 & I2;
const t12a: T12AND = {a: 1, b: 2};

type T12OR = I1 | I2;
const t12o1: T12OR = { a: 1 };
const t12o2: T12OR = { b: 2 };

type RWide = Readonly<Wide>;
type NNWide = NonNullable<Wide>;

namespace XX1 {
  interface ILeft {
    a1();
    a2();
  }
  interface IRight {
    a3();
    a4();
  }

  type IFull = ILeft & IRight;

  const left1: ILeft = {
    a1() { console.log('left 1. A1') },
    a2() { console.log('left 1. A2') },
  };

  const left2: ILeft = {
    a1() { console.log('left 2. A1') },
    a2() { console.log('left 2. A2') },
  };

  const right1: IRight = {
    a3() { console.log('right 1. A3') },
    a4() { console.log('right 1. A4') },
  };

  const right2: IRight = {
    a3() { console.log('right 2. A3') },
    a4() { console.log('right 2. A4') },
  };





}
