const f1 = () => {
  console.log({} === null); // false
  console.log({} === undefined); // false
  console.log({} === {}); // false
  console.log({} == {}); // false
  console.log(typeof {}); // object
};

console.log(Object.assign({}, undefined));

