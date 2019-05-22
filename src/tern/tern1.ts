import * as assert from "assert";

const value = new Promise((resolve) =>
  setTimeout(
    () => resolve(false),
    100)
);

const tern_async = async () => value ? 'true' : 'false';
const tern_sync = async () => await value ? 'true' : 'false';

const usecase = async () => {
  const r1 = await tern_async();
  const r2 = await tern_sync();
  assert.strictEqual(r1, 'true');
  assert.strictEqual(r2, 'false');
  console.log(r1);
  console.log(r2);
};

usecase().then(() => console.log('Done!'));

