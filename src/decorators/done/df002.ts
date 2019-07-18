// import 'reflect-metadata';
//
// // variable to access to the ANNOTATION in runtime
// const key_ = Symbol("format7");
//
// // function which acts as a FIELD ANNOTATION
// function format7(s: string) {
//   return Reflect.metadata(key_, s);
// }

class FieldDecoratorEx1 {
  // @format7("value1")
  s1: string;
}

let fd = new FieldDecoratorEx1();
fd.s1 = "Alex";

// // access via instance
// console.log(Reflect.getMetadata(key_, fd, "s1"));
// console.log(Reflect.getMetadata(key_, fd, "s2"));
