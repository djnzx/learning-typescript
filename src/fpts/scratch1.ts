import { none, Option, some } from "fp-ts/lib/Option";
import { Task } from "fp-ts/lib/Task";
import { tryCatch } from "fp-ts/lib/TaskEither";

const convert = (origin: string): Option<number> => {
  const val = +origin;
  return isNaN(val) || val % 1 !== 0 ? none : some(val);
};

console.log(convert('1'));
console.log(convert('z1'));

const decision42 = () => Promise.resolve(42);
const decision43 = () => Promise.resolve(43);
const printer = (x: number) => console.log(x);

const x = decision42;   // function: x().then()
const y = decision42(); // promise:  y.then(...);
console.log(x);
console.log(y);

const task42 = new Task(decision42);
const task43 = new Task(decision43);

// always OK
const deepThought = new Task<number>(() => Promise.resolve(42));

deepThought.run().then(n => {
  console.log(`The answer is ${n}.`)
});

interface Outcome {
  name: string;
}

// can BREAK
const fetchGreeting = (origin: string) => tryCatch<Error, Outcome>(
  () => new Promise((resolve, reject) => resolve(JSON.parse(origin)) ),
  reason => new Error(String(reason))
);

const source_data = [
  '{ "name": "Carol" }',
  '{ "name": "Carol }'
];
source_data.forEach(item =>
  fetchGreeting(item).run()
    .then(te => te.fold(
      err => `Wrong: (${err.message})`,
      x => `Right: ${x.name}!`
    ))
    .then(s => console.log(s))
);

// parallel:
import { task } from 'fp-ts/lib/Task'
import { array } from 'fp-ts/lib/Array'

const tasks = [task.of(1), task.of(2)];
array
  .sequence(task)(tasks)
  .run()
  .then(console.log);
