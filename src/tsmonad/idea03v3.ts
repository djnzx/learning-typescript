import { Either } from 'tsmonad';

const fx3_wrapper = async (v: number, callback: (val: number) => Promise<Either<Error, number>>): Promise<Either<Error, number>> => {
  return callback(v)
    .then((outcome: Either<Error, number>) => outcome)
    .catch((err: Error) => Either.left(err))
};

const fx2 = async (val: number): Promise<Either<Error, number>> => {
  switch (val) {
    case 1: return Either.right(val);
    case 2: return Either.left(new Error('Intentionally failure'));
    default: throw new Error('Thrown500');
  }
};

const different = [
  fx3_wrapper(1, fx2),
  fx3_wrapper(2, fx2),
  fx3_wrapper(3, fx2)];

different.forEach(fx3_instance =>
  fx3_instance.then((val: Either<Error, number>) => {
    val.caseOf({
      left: (v: Error) => console.log("then: failure: ", v.message),
      right: (v: number) => console.log("then: success: ", v),
    })
  })
);


