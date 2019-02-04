import 'reflect-metadata';

const requiredMetadataKey = Symbol("required");

function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
  console.log("target:", target); // GreeterX {} (class)
  console.log("propertyKey:", propertyKey); // access (method)
  console.log("parameterIndex:", parameterIndex); // 0
  let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
  existingRequiredParameters.push(parameterIndex);
  console.log("existingRequiredParameters:", existingRequiredParameters);
  Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}

function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
  let method = descriptor.value;
  descriptor.value = function () {
    let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
    if (requiredParameters) {
      for (let parameterIndex of requiredParameters) {
        if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
          throw new Error("Missing required argument.");
        }
      }
    }

    return method.apply(this, arguments);
  }
}

class GreeterX {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  @validate
  greet(@required name: string, @required name2: string) {
    return "Hello " + name + ", " + this.greeting;
  }
}

let gx = new GreeterX("...");
console.log(gx.greet("Alex1", "Alex2"));
