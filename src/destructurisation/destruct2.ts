const orig = [
  {
    a: "Dima",
    b: [1,2,3]
  },
  {
    a: "Alex",
    b: [2,3,4]
  }
];

const mapped = orig.map(el => el.b);
const flatted = [].concat(...mapped)
const distinct = Array.from(new Set(flatted))

console.log(orig)
console.log(mapped)
console.log(flatted)
console.log(distinct)
