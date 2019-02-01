const idea = () => {
  console.log(1);
  setTimeout(() => {
    console.log('call back with zero timeout');
  }, 0);
  console.log(2);
  new Promise((resolve, reject) => {
    return resolve('promise resolved');
  }).then(ok => console.log(ok));
  console.log(3);
};

idea();

