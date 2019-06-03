const es2018a = () => {
  const { first, second, ...others } = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }
};

es2018a();

const es2018b = async () => {
  // for await (const line of fs.readFile("1.txt", )) {
  //   console.log(line)
  // }
};

const es2018c = async () => {
  return Promise.resolve(1);
};

es2018c()
  .then(x => console.log(`THEN:${x}`))
  .catch(x => console.log(`CATCH:${x}`))
  .finally(() => console.log(`FINALLY`));

