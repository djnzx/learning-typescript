import { Either } from 'tsmonad';

const fx3_wrapper = async (v: number, callback: (val: number) => Promise<Either<string, number>>): Promise<Either<string, number>> => {
  return callback(v)
    .then((outcome: Either<string, number>) => outcome)
    .catch((err: Error) => Either.left(err.message))
};

const fx2 = async (val: number): Promise<Either<string, number>> => {
  switch (val) {
    case 1: return Either.right(val);
    case 2: return Either.left('Intentionally failure');
    default: throw new Error('Thrown500');
  }
};

const different = [
  fx3_wrapper(1, fx2),
  fx3_wrapper(2, fx2),
  fx3_wrapper(3, fx2)];

different.forEach(fx3_instance =>
  fx3_instance.then((val: Either<string, number>) => {
    val.caseOf({
      left: (v: string) => console.log("then: failure: ", v),
      right: (v: number) => console.log("then: success: ", v),
    })
  })
);


