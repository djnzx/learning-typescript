function f() {
  console.log("f(): evaluated");
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("f(): entrance...");
    console.log("target:      ", target);
    console.log("propertyKey: ", propertyKey);
    console.log("descriptor:  ", descriptor);
    console.log("f(): ...exit");
  }
}

function g() {
  console.log("g(): evaluated");
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("g(): called");
  }
}

class C {
  @f()
  //@g()
  myMethod1() {
    console.log("Method Called");
  }
}

console.log("BEFORE constructor");
//let c = new C();
console.log("AFTER constructor");
console.log("BEFORE method");
//c.method();
console.log("AFTER method");

