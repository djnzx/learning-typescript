export function eq<T>(a: T, b: T): boolean {
  if (typeof b === 'object') {
    const feq: (other: T) => boolean = b['equals'];
    return (feq && feq.call(b, a)) || (a === b);
  }
  return (a === b);
}
