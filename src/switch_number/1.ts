namespace abc {
  const action = (n: number) => {
    switch (n) {
      case 1: return "1";
      default: return "not 0 not 1";
      case 0: return "0";
    }
  };

  console.log(action(0));
  console.log(action(1));
  console.log(action(2));
  console.log(action(undefined));
  console.log(action(null));

}
