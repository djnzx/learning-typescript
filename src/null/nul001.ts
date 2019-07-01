// GOOD
const fp11 = async (): Promise<number | null> =>
  Promise.resolve(1);

const fp12 = async (): Promise<number | null> =>
  Promise.resolve(1);

// WRONG
const fp21 = async (): Promise<number> | null =>
  null;

const fp22 = async (): Promise<number> | null =>
  null;
