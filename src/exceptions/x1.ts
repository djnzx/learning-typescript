const calc = Promise.reject(new Error('11E'));

const wrapper = async () => {
  calc
    .then(v => console.log(`THEN:${v}`))
    .catch(e => {
      if (e instanceof Error) {
        console.log(`E:${e.message}`);
      } else {
        console.log(`DIFFERENT:${e}`);
      }
    });
}

wrapper();
