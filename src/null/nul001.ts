const fp1 = async (): Promise<number | null> =>
  Promise.resolve(1);

const fp2 = async (): Promise<number> | null =>
  null;
