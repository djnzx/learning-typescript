export class Configuration {

  static x1(): string | undefined {
    return process.env.X1;
  }

  static x2(): string | undefined {
    return process.env.X2;
  }

}
