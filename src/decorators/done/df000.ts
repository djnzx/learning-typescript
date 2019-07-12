import 'reflect-metadata';

const key_ = Symbol("format7");

function format7(s: string) {
  return Reflect.metadata(key_, s);
}

class SmartPerson {

  @format7("value1")
  readonly name: string;

  constructor(
    name: string
  ) {
    this.name = name;
  }

  do(): void {
    console.log(`Hi! my name is ${this.name}`);
  }

}

const sp = new SmartPerson("Alex");
const v: string = Reflect.getMetadata(key_, sp, "name");
console.log(v);

sp.do();
