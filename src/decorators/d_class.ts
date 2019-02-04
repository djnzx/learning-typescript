// class decorator
// The class decorator is applied to the constructor of the class and can be used to observe, modify, or replace a class definition.
function classDecorator<T extends {new(...args:any[]): {}}>(constructor: T) {
  return class extends constructor {
    newProperty = "new property";
    hello = "overridden";
  }
}

@classDecorator
class GreeterA {
  readonly property = "property";
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }
}

console.log(new GreeterA("123"));
// without decorator: Greeter { property: 'property', hello: '123' }
//
// with decorator:
// Greeter {
//   property: 'property',
//   hello: 'overridden',
//   newProperty: 'new property'
// }
