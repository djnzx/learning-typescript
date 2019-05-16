import { fromLeft, taskEither } from "fp-ts/lib/TaskEither";

Promise.all([
    taskEither.of(1).attempt().run(),
    fromLeft('foo').attempt().run()
  ]).then(([x, y]) => {
    console.log(x);
    console.log(y)
  });
