new Promise((resolve, reject) => {
  resolve({
    a:1,
  });
}).then((p1) => {
  console.log('P1:', p1);
  // @ts-ignore
  p1.b = 2;
  console.log('P1:', p1);
  return p1;
}).then((p2) => {
  console.log('P2:', p2);
  // @ts-ignore
  p2.c = 3;
  console.log('P2:', p2);
  // throw new Error(`Intentionally in level 3`) // type of promise = object
  return Promise.reject("ON L 3") // type of promise = string
  // return Promise.resolve(p2)
  // return p2;
}).then( (p3) => {
  console.log('P3:', p3);
  // @ts-ignore
  p3.d = 4;
  console.log('P3:', p3);
}).catch(e => {
  console.log(typeof e) // object
  console.log("FINAL catch: " +e)
});
