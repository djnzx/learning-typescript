const setsLearning = () => {
  let set = new Set<number>();
  set.add(1).add(1).add(20).add(30).add(4).add(2);
  set.forEach(value => console.log(value));
  set.delete(4);
  console.log('-----');
  set.forEach(value => console.log(value));
  console.log('-----');
  console.log(set.has(3));
  console.log(set.size);
  let k = set.keys();
  let it1 = k[Symbol.iterator]();
  console.log('-----');
  for (let v of it1) {
    console.log(v);
  }
  console.log('-----');
  for (let v of set) {
    console.log(v);
  }
  console.log('-----');
}
//setsLearning()
const weakSetLearning = () => {
  interface Smart {
    level: number;
  }
  let s = new Set<Smart>();
  let p11 = {level: 1};
  let p12 = {level: 1};
  let p2 = {level: 2};
  let p3 = {level: 3};
  s.add(p11);
  s.add(p12);
  s.add(p2);
  s.add(p3);

  console.log("******");
  for (let item of s) console.log(item);

  console.log("******");
  s.add({level: 1});
  for (let item of s) console.log(item);

  console.log("******");
  s.delete({level: 3});
  for (let item of s) console.log(item);

  console.log("******");
  console.log(s.has({level: 1})); // FALSE
};

weakSetLearning();
