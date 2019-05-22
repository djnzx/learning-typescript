console.log('-----');

const alex = {
    name: 'Alex'
};

const mix = {
    name: 'Dima',
    print: function() { return this.name; }
};

// standard behavior
console.log(mix.print());

// bind
const binded = mix.print.bind(alex);
console.log(binded());

// call
console.log(mix.print.call(alex));

// apply #1
let a = [1,2,3];
let b = [4,5];

[].push.apply(a, b);

console.log(a);

// apply #2
// @ts-ignore
console.log(Math.max(a));
console.log(Math.max.apply(null, a));
