const person = { first: "John", last: "Doe", age: 11 };

// Visit non-inherited enumerable keys
Object.keys(person).forEach(function(name, index) {
  const value = person[name];
  console.log(`prop index:${index}, name:'${name}', value:'${value}'`);
});
