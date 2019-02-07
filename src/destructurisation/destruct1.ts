namespace Destruct1 {
  let vasya = {
    id: 5,
    name: 'Vasya',
    active: true
  };

  console.log(vasya);
  console.log({vasya: vasya});
  console.log({vasya});
  console.log({...vasya});

  let arr = [1, 2, 3];
  console.log(arr);
  console.log({...arr});

  let a1 = ['a1', 'b1', 'c1'];
  let a2 = ['a2', 'b2', 'c2'];
  console.log(a1);
  console.log([a1]);
  console.log([a1, a2]);
  console.log([...a1, ...a2]);

  let obj = {
    name: "Alex",
    age: 21,
    smart: 13
  };

  let {name, age} = obj;
  console.log(obj.name);
  console.log(name);
  console.log(obj.age);
  console.log(age);

  const {"name": name1} = obj;
  console.log(name1);

  let {"name": n, ...rest} = obj;
  console.log(n); // Alex
  console.log(rest); // { age: 21, smart: 13 }

  type T1 = [number, string];
  let t1: T1 = [1, "Hello"];
  let t2: T1 = [2, "World"];
  let [z1, z2] = t1;
  console.log(z1);
  console.log(z2);

  let ints = [1,2,3];
  let[_1st, _2nd, _3rd] = ints;
  let[_1sta, _rest] = ints; // 1, 2
  let[_1st1, ..._rest1] = ints; // 1, [2, 3]

  console.log(_1st);
  console.log(_2nd);
  console.log(_3rd);

  console.log(_1sta);
  console.log(_rest);
  console.log(_1st1);
  console.log(_rest1);


}
