console.log('-----');

const alex = {
    name: 'Alex'
};

const mix = {
    name: 'Dima',
    print: function() { return this.name; }
};

console.log(mix.print());
console.log(mix.print.bind(alex)());
console.log(mix.print.call(alex));

// apply

let a = [1,2,3];
let b = [4,5];

[].push.apply(a, b)

console.log(a)

console.log(Math.max(a));
console.log(Math.max.apply(null, a));
