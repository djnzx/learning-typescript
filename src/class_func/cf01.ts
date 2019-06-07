namespace CF {

  interface API {
    f1: () => number;
    f2: () => number;
  }

  interface UserI {
    readonly name: string;
    readonly age: number;
  }

  interface UserB {
    think();
    do();
  }

  class User {
    constructor(readonly name: string, readonly age: number) {};
  }

  // way 1: literal
  const user = {
    name: 'alex',
    age: 11,
    setName(newName: string) {
      this.name = newName;
      return this;
    },
    do() { console.log('Do'); }
  };

  console.log(user.name);
  console.log(user['name']);

  const {name, age} =  user;
  console.log(name);
  console.log(age);
  console.log(user.setName('dima').name);
  user.do();

  // way 2: class constructor
  const user2 = new User('Alexander', 13);

  // way 3: factory function
  const userCreate = (name_: string, age_: number): UserI & UserB => ({
    name: name_,
    age: age_,
    think() { console.log(`I'm thinking...${this.age}`); },
    do() { console.log(`I'm doing...`); },
  });

  const user3 = userCreate('Lena', 33);

  console.log(user);
  console.log(user2);
  console.log(user3);

  console.log(user3.name);
  console.log(user3.age);
  user3.think();
  user3.do();

}
