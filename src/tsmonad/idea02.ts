import { Either } from 'tsmonad';
import { Failure } from './failure';
import { Success } from './success';

type Composite<L,R> = Either<Failure<L>, Success<R>>;

const fx2 = async (val: number) => await new Promise<Composite<string, number>>(((resolve, reject) => {
  switch (val) {
    case 1: resolve(Either.right(new Success<number>(123)));
    case 2: resolve(Either.left(new Failure("Intentionally FAIL")));
    case 3: throw new Error('Intentionally500');
  }
}))
  .then((v: Composite<string, number>) =>
    v.caseOf<void>({
      left: (msg: Failure<string>) => console.log("Typed fail w/message: ", msg.value),
      right: (val: Success<number>) => console.log("Typed value: ", val.value),
    })
  )
  .catch((e: Error) => {
    console.log(":catch-block-begin:");
    // console.log("NAME:\n", `_${e.name}_`);
    console.log("MESSAGE:\n", `_${e.message}_`);
    // console.log("STACK:\n", `_${e.stack}_`);
    console.log(":catch-block-end:");
  })

fx2(1); // Typed value:  123
fx2(2); // Typed fail w/message:  Intentionally FAIL
fx2(3)

