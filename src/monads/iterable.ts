export interface Iterable<T> {
  [Symbol.iterator](): Iterator<T>;
  length?: number;
  reverseIterator?: () => Iterator<T>;
}
