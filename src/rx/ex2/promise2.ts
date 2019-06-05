const greetingPoster2 = new Promise((resolve, reject) => {
  resolve('Welcome! Nice to meet you.');
});

console.log('Before calling then on Promise');

greetingPoster2.then(res => console.log(`Greeting from promise: ${res}`));

console.log('After calling then on Promise (proof of being always async)');
