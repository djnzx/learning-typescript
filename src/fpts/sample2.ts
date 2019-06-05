import { TaskEither, tryCatch } from "fp-ts/lib/TaskEither";
import { createHash } from "crypto";
import { createReadStream } from "fs";
import * as assert from "assert";
import { left } from "fp-ts/lib/Either";

const md5 = (path: string): TaskEither<string, string> => {
  const mkHash = (p: string) =>
    new Promise<string>((resolve, reject) => {
      const hash = createHash('md5')
      const rs = createReadStream(p)
      rs.on('error', (error: Error) => reject(error.message))
      rs.on('data', (chunk: string) => hash.update(chunk))
      rs.on('end', () => {
        return resolve(hash.digest('hex'))
      })
    })
  return tryCatch(() => mkHash(path), message => `cannot create md5 hash: ${String(message)}`)
}

md5('promise1.ts')
  .run()
  .then(x => {
    console.log(x);
    //assert.deepStrictEqual(x, left(`cannot create md5 hash: ENOENT: no such file or directory, open 'foo'`))
  });
