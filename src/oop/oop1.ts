interface Behavior {
  do();
}

class Being implements Behavior {
  do() {
    console.log(`I'm Being`);
  }
}

class Human implements Being {
  do() {
    console.log(`I'm Human`);
  }
}

const b1 = new Being();
const b2 = new Human();
const b3 = new Human();

b3.do = () => {
  console.log(`I'm runtime`);
};

const old = b3.constructor.prototype.do;

b3.constructor.prototype.do = function () {
  old.apply(this);
  console.log(`I'm runtime`);
};

b1.do();
b2.do();
b3.do();

function MyClass() {
  this.a = 1
}

MyClass.prototype.b = function() {
};

const o = new MyClass();

if (MyClass.prototype === o.constructor.prototype) {}

function MyClassB() {
  this.a = MyClass.prototype.a;
  this.b = MyClass.prototype.b;
}

MyClassB.prototype.b = MyClass.prototype.b;
