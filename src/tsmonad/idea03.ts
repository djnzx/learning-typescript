import { Either } from 'tsmonad';
import { Failure } from './failure';
import { Success } from './success';

type Composite<L,R> = Either<Failure<L>, Success<R>>;

/**
 * the best implementation fr transaction
 * @param v
 * @param callback
 */
const fx3_wrapper = async (v: number, callback: (val: number) => Promise<Composite<string, number>>): Promise<Composite<string, number>> => {
  return callback(v)
    .then((outcome: Composite<string, number>) => outcome)
    .catch((err: Error) => Either.left(new Failure(err.message)))
};

const fx2 = async (val: number): Promise<Composite<string, number>> => {
  switch (val) {
    case 1: return Either.right(new Success(val));
    case 2: return Either.left(new Failure('Intentionally failure'));
    default: throw new Error('Thrown500');
  }
};

const different = [
  fx3_wrapper(1, fx2),
  fx3_wrapper(2, fx2),
  fx3_wrapper(3, fx2)];

different.forEach(fx3_instance =>
  fx3_instance.then((val: Composite<string, number>) => {
    val.caseOf({
      left: (v: Failure<string>) => console.log("then: failure: ", v.value),
      right: (v: Success<number>) => console.log("then: success: ", v.value),
    })
  })
);
// fx3_wrapper(3, fx2)
//   .then((val: Composite<string, number>) => {
//     val.caseOf({
//       left: (v: Failure<string>) => console.log("then: failure: ", v.value),
//       right: (v: Success<number>) => console.log("then: success: ", v.value),
//     })
//   });


