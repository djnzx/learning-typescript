namespace CF3 {

  interface API {
    do1();
    do2();
    f3();
  }

  class APIprod implements API {
    do1() {
      console.log('do1. prod')
    }

    do2() {
      console.log('do2. prod')
    }

    f3() {
      return Promise.resolve(1);
    }

  }

  class APItest implements API {
    do1() {
      console.log('do1. test')
    }

    do2() {
      console.log('do2. test')
    }

    f3() {
      return 2;
    }

  }

  const f_api_test = (): API => new APItest();
  const f_api_prod = (): API => new APIprod();


  class Service implements API {
    constructor(private readonly api: API) {}

    do1() {
      this.api.do1();
    }

    do2() {
      this.api.do2()
    }

    f3() {
    }

  }

  const s_test = new Service(new APItest());
  const s_prod = new Service(new APIprod());
  const s_test2 = new Service(f_api_test());
  const s_prod2 = new Service(f_api_prod());

  s_test.do1();
  s_prod.do1();


}
