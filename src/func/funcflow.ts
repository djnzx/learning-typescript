function pipe_a(fns: Array<Function>): Function {
  const len = fns.length - 1;
  return async function(this: any, x: any) {
    let y = x;
    for (let i = 0; i <= len; i++) {
      y = await fns[i].call(this, y)
    }
    return y
  }
}

export class FuncFlow {
  private functions: Array<Function> = [];

  public static from(first: Function): FuncFlow {
    return new FuncFlow(first);
  }

  constructor(first: Function) {
    this.functions.push(first);
  }

  public chain(next: Function): FuncFlow {
    this.functions.push(next);
    return this;
  }

  public async fold() {
    return pipe_a(this.functions)();
  }

  public then(f: Function) {
    this.fold().then(r => f(r));
  }

}
