namespace ArraysOfObjects {
  interface Person {
    name: string,
    active: boolean;
  }
  let a = new Array<Person>();
  a.push({
    name: 'Alex',
    active: true
  });
  a.push({
    name: 'Dima',
    active: false
  });
  a
    .filter(p => p['active'] == true)
    .forEach(p => console.log(JSON.stringify(p)));
}
