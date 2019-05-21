import { FuncFlow } from "./funcflow";

FuncFlow.from(() => 2) // 2
  .chain( x => Promise.resolve(x + 1) ) // 3
  .chain( x => Promise.resolve(x * 2) ) // 6
  .chain( x => Promise.resolve(x * 3) ) // 18
  .chain( x => Promise.resolve(x + 1) ) // 19
  .then(console.log);
