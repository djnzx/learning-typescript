import { pipe_async2 } from "./pipes";

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
    return pipe_async2(this.functions)();
  }

  public then(f: Function) {
    this.fold().then(r => f(r));
  }

}
