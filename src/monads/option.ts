export class Option<T> {
  private readonly _isDefined: boolean;
  private readonly _value: T;

  has(): boolean {
    return this._isDefined;
  }

  get(): T {
    if (!this._isDefined) {
      throw new Error('there is no value');
    }
    return this._value;
  }

  ifHas<R>(f: (x: T) => R) {
    if (this.has()) {
      f(this.get());
    }
  }

  constructor(isDefined: boolean, value?: T) {
    this._isDefined = isDefined;
    this._value = value;
  }
}
