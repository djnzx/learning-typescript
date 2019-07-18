import { FuncFlow } from "./funcflow";

type Tuple2G<F1, F2> = [F1, F2]
type Tuple2 = Tuple2G<number, number>
type Tuple2A = [number, number]
type Tuple3 = [number, number, number]
type Tuple4 = [number, number, number, number]
type Tuple5 = [number, number, number, number, number]

FuncFlow.from((): number => 2) // 2
  // .chain((x: number):            Promise<Tuple2> => Promise.resolve([x, x + 1]) ) // [2, 3]
  .chain((x: number):            Promise<number[]> => Promise.resolve([x, x + 1]) ) // [2, 3]
  .chain(([x1, x2]: Tuple2):             Tuple3   =>                       [x1, x2, x2 * 2]) // [2, 3, 6]
  //.chain(([x1, x2, x3]: Tuple3): Promise<Tuple4>  => Promise.resolve([x1, x2, x3, x3 * 3]) ) // [2, 3, 6, 18]
  .chain(([x1, x2, x3]: Tuple3): Promise<number[]>  => Promise.resolve([x1, x2, x3, x3 * 3]) ) // [2, 3, 6, 18]
  .chain(([x1, x2, x3, x4]: Tuple4):     Tuple5   =>                       [x1, x2, x3, x4, x4 + 1] ) // [2, 3, 6, 18, 19]
  .then(console.log);

FuncFlow.from(() => 2) // 2
  .chain((x)        => Promise.resolve([x, x + 1]) ) // [2, 3]
  .chain(([x1, x2]) =>                       [x1, x2, x2 * 2]) // [2, 3, 6]
  .then(console.log);
