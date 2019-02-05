import 'reflect-metadata';

// variable to access to the ANNOTATION in runtime
const key_ = Symbol("format7");

// function which acts as a FIELD ANNOTATION
function format7(s: string) {
  return Reflect.metadata(key_, s);
}

class FieldDecoratorEx1 {
  @format7("value1")
  s1: string;

  @format7("value2")
  s2: string;
}

class FieldDecoratorEx2 {
  @format7("value3")
  s3: string;

  @format7("value4")
  s4: string;

  s5: string;
}

let fd = new FieldDecoratorEx1();

// access via instance
console.log(Reflect.getMetadata(key_, fd, "s1"));
console.log(Reflect.getMetadata(key_, fd, "s2"));
// access via prototype
console.log(Reflect.getMetadata(key_, FieldDecoratorEx2.prototype, "s3"));
console.log(Reflect.getMetadata(key_, FieldDecoratorEx2.prototype, "s4"));

console.log(Reflect.getMetadata(key_, FieldDecoratorEx2.prototype, "s5")); // undefined
console.log(Reflect.hasMetadata(key_, FieldDecoratorEx2.prototype, "s5")); // false
Reflect.set(FieldDecoratorEx2.prototype, "s5", "HELLO"); // set property value

let fd2 = new FieldDecoratorEx2();
console.log(fd2.s5);

let fd3 = new FieldDecoratorEx2();
console.log(fd3.s5);

Reflect.defineProperty(FieldDecoratorEx2.prototype, "s6", {value: "property injected in runtime!"});

let fd4 = new FieldDecoratorEx2();
// @ts-ignore
console.log(fd3.s6);
// @ts-ignore
console.log(fd2.s6);
