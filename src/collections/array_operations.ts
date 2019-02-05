namespace ArrayOperations {
  // declare
  let a1 = []; // untyped
  let a2 = new Array<number>();
  // push to END
  a2.push(101);
  a2.push(102);
  a2.push(103); // returns the new length of the array
  a2.push(104, 105);
  console.log(a2);
  // pop last item
  let last = a2.pop(); // MUTABLE
  console.log(last);
  console.log(a2);
  // insert into begin
  a2.unshift(98, 99, 100);
  console.log(a2);
  // take from begin and shift
  let first = a2.shift();
  console.log(first);
  console.log(a2);

  a2.reverse(); // MUTABLE
  console.log(a2);
  a2.sort((i1, i2) => i1-i2 ); // MUTABLE
  console.log(a2);

  // slice - from(including, from zero)
  // slice - to(excluding, from zero)
  let slice = a2.slice(2, 4);
  console.log(slice); // [ 101, 102 ]

  let a2s: string = a2.join('_');
  console.log(a2s);

  let a3 = a2.concat([200, 201]);
  console.log(a3);

  // SOME elements which satisfy condition
  let found1 = a3.some(value => value > 200);
  console.log(found1); // true

  // EVERY elements which satisfy condition
  let found2 = a3.every(value => value > 200);
  console.log(found2); // false

  a3.push(100);
  console.log(a3);

  // find the element by given predicate
  let fnd1 = a3.find(val => val === 500); // T or undefined
  console.log(fnd1);

  let fnd2 = a3.findIndex(val => val === 100); // find FIRST occurrence
  console.log(fnd2);

  let p1 = a3.indexOf(100); // FIRST index of value
  console.log(p1);

  let p2 = a3.lastIndexOf(100); // LAST index of value
  console.log(p2);

  let fnd3 = a3.includes(101);
  console.log(fnd3);

  a3.splice(5,0, 103.3, 103.5, 103.7); // MUTABLE
  console.log(a3);

  let spliced = a3.splice(5,3); // MUTABLE
  console.log(spliced);
  console.log(a3);

  let reduced = a3.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  console.log(reduced);

  let days = new Array<string>();
  days.push('Monday');
  days.push('Tuesday');
  days.push('Wednesday');
  days.push('Thursday');
  days.push('Friday');
  days.sort((s1, s2) => s1.localeCompare(s2));
  console.log(days);
  days.sort((s1, s2) => s1.length - s2.length);
  console.log(days);

  let sredl = days.reduce((prev, curr) => {return `${prev}+[${curr}]`}, 'Those days:');
  console.log(sredl);

  let sredr = days.reduceRight((prev, curr) => {return `${prev}+[${curr}]`}, 'Those days:');
  console.log(sredr);
}
