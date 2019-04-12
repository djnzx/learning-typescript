export interface Iterator<T> {
  next(): {
    done: boolean
    value?: T;
  };
}
