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

}
