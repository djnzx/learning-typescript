var array1 = [5, 12, 0, 8, 130, 44];

var found1 = array1.find(el => el > 10);  // 12
var found2 = array1.find(el => el === 0); // 0
var found3 = array1.find(el => el === 5); // 0
var found4 = array1.find(el => el > 200); // undef

// var found1i = array1.indexOf(12);
// var found2i = array1.indexOf(0);
// var found3i = array1.indexOf(5);
// var found4i = array1.indexOf(200);

console.log(found1);
console.log(found2);
console.log(found3);
console.log(found4);

// console.log(found1i);
// console.log(found2i);
// console.log(found3i);
// console.log(found4i);

// console.log(!found1);
// console.log(!found2);
// console.log(!found3);

// console.log(!found1i);
// console.log(!found2i);
// console.log(!found3i);

console.log(!!found1);
console.log(!!found2);
console.log(!!found3);
console.log(!!found4);

// console.log(!!found1i);
// console.log(!!found2i);
// console.log(!!found3i);
// console.log(!!found4i);

