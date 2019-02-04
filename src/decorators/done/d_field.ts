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
}

let fd = new FieldDecoratorEx1();

// access via instance
console.log(Reflect.getMetadata(key_, fd, "s1"));
console.log(Reflect.getMetadata(key_, fd, "s2"));
// access via prototype
console.log(Reflect.getMetadata(key_, FieldDecoratorEx2.prototype, "s3"));
console.log(Reflect.getMetadata(key_, FieldDecoratorEx2.prototype, "s4"));
