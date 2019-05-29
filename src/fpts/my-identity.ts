import { Functor1 } from "fp-ts/lib/Functor";

export const URI = 'MyIdentity';
export type URI = typeof URI;

declare module 'fp-ts/lib/HKT' {
  interface URI2HKT<A> {
    MyIdentity: MyIdentity<A>
  }
}

export class MyIdentity<A> {
  constructor(readonly value: A) {}
  map<B>(f: (a: A) => B): MyIdentity<B> {
    return new MyIdentity(f(this.value))
  }
}

const map = <A, B>(fa: MyIdentity<A>, f: (a: A) => B): MyIdentity<B> => new MyIdentity(f(fa.value))

export const identity: Functor1<URI> = {
  URI,
  map
};

let x: URI; // we can assign only 'MyIdentity'

const mi = new MyIdentity<number>(44);
console.log(mi.map(x => x + 1));
