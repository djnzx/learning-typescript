namespace MapLearning {
  let m = new Map<string, string>();
  m.set('a','Alex');
  m.set('b','Bob');
  m.set('d','Dima');
  m.set('d','Dima2');

  console.log(m.get('a'));
  console.log(m.get('b'));
  console.log(m.get('d'));

  m.forEach((value, key) => {
    console.log(`key:${key}, value:${value}`);
  })
}
