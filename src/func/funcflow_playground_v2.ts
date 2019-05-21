import { FuncFlow } from "./funcflow";

FuncFlow.from(() => 2) // 2
  .chain((x)                          => Promise.resolve([x, x + 1]) ) // [2, 3]
  .chain(([x1, x2]: [number, number]) =>                       [x1, x2, x2 * 2]) // [2, 3, 6]
  .chain(([x1, x2, x3])               => Promise.resolve([x1, x2, x3, x3 * 3]) ) // [2, 3, 6, 18]
  .chain(([x1, x2, x3, x4])           =>                       [x1, x2, x3, x4, x4 + 1] ) // [2, 3, 6, 18, 19]
  .then(console.log);
