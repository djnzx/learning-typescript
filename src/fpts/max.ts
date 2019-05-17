import { createInterface } from 'readline'
import { fromIO, task, Task } from "fp-ts/lib/Task";
import { log } from "fp-ts/lib/Console";
import { randomInt } from "fp-ts/lib/Random";
import { none, Option, some } from "fp-ts/lib/Option";

//
// helpers
//

const getStrLn: Task<string> = new Task(
  () =>
    new Promise(resolve => {
      const rl = createInterface({
        input: process.stdin,
        output: process.stdout
      })
      rl.question('> ', answer => {
        rl.close()
        resolve(answer)
      })
    })
)

const getStrLn1 = (): Task<string> => new Task(
  () =>
    new Promise(resolve => {
      const rl = createInterface({
        input: process.stdin,
        output: process.stdout
      })
      rl.question('> ', answer => {
        rl.close()
        resolve(answer)
      })
    })
)

const putStrLn = (message: string): Task<void> => fromIO(log(message))

const random = fromIO(randomInt(1, 5))

const parse = (s: string): Option<number> => {
  const i = +s
  return isNaN(i) || i % 1 !== 0 ? none : some(i)
}

//
// game
//

const checkContinue = (name: string): Task<boolean> =>
  putStrLn(`Do you want to continue, ${name}?`)
    .chain(() => getStrLn)
    .chain(answer => {
      switch (answer.toLowerCase()) {
        case 'y': return task.of(true)
        case 'n': return task.of(false)
        default : return checkContinue(name)
      }
    });

const gameLoop = (name: string): Task<void> =>
  random.chain(secret =>
    putStrLn(`Dear ${name}, please guess a number from 1 to 5`)
      .chain(() =>
        getStrLn.chain(guess =>
          parse(guess).fold(
            putStrLn('You did not enter an integer!'),
            x =>
              x === secret
                ? putStrLn(`You guessed right, ${name}!`)
                : putStrLn(`You guessed wrong, ${name}! The number was: ${secret}`)
          )
        )
      )
      .chain(() => checkContinue(name))
      .chain(shouldContinue => (shouldContinue ? gameLoop(name) : task.of(undefined)))
  )

const main: Task<void> = putStrLn('What is your name?')
  .chain(() => getStrLn)
  .chain(name => putStrLn(`Hello, ${name} welcome to the game!`).chain(() => gameLoop(name)))

// main.run()

// console.log(getStrLn)
// console.log(getStrLn1)

const f1: void = console.log('f1'); // f1
const f2 = (): void => console.log('f2');

console.log(f1); // undefined
console.log(f2); // [Function: f2]
f2(); // f2
