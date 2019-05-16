import { log } from "ts-log-decorator";

@log()
class User {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
  get(): string {
    return this.name;
  }
  set(newName: string) {
    this.name = newName;
  }
}

let user = new User('Alex');

