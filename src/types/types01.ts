const types = () => {
  class Animal {}
  class Dog extends Animal {}
  class Fish extends Animal {}
  class Bird extends Animal {}

  const a = new Animal();
  const d = new Dog();
  const f = new Fish();
  const b = new Bird();

  console.log(a instanceof Animal) // true
  console.log(a instanceof Dog) // false

  console.log(d instanceof Dog) // true
  console.log(d instanceof Animal) // true

};

types();
