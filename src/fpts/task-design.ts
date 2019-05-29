import { task } from "fp-ts/lib/Task";

task.of(Promise.resolve(1))
.map(async (n) => await n + 1)
