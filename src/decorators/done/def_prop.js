const a = {
    name: 'Alex',
    age: 10
};

console.log(a);

Object.defineProperty(a, 'level', {
    value: () => (x) => x * 2,
    writable: false, // by default
    enumerable: false // by default
});

console.log(a);
// a.level = 0; // doesn't work without any notice because of (writable: false)

// console.log(a);
console.log(a.level()(10));
