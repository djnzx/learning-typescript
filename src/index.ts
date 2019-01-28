import {Class7} from "./module7";
import {Class7 as C7} from "./module7";
import {Class7X as C7X} from "./module7";

import {AName1} from "./module6";
import {AName1 as AName1a} from "./module6";
import {AName1X} from "./module6";
import {AName1X as AName1Xa} from "./module6";

import {Class1R, Class2} from "./class2";

import {C1, C2, C3} from "./c_all";
import * as all from "./c_all";
import "./wierd" // doesn't work
import f from "./def_class"
import x2 from "./def_func"

const importClasses0 = () => {
    let c2 = new Class2();
    c2.f2 = 42;

    let c1r = new Class1R();
    c1r.f1 = 22;
};
//importClasses0();
const importClasses1 = () => {
    let cl7 = new Class7();
    cl7.do1();
    let c7 = new C7();
    c7.do1();
    let c7x = new C7X();
    c7x.do1();
    // aliases work well
    console.log(c7 instanceof C7);
    console.log(c7 instanceof C7X);
    console.log(c7 instanceof Class7);
    console.log(c7x instanceof C7);
    console.log(c7x instanceof C7X);
    console.log(c7x instanceof Class7);
    console.log(cl7 instanceof C7);
    console.log(cl7 instanceof C7X);
    console.log(cl7 instanceof Class7);
};
//importClasses1();
const importConstants1 = () => {
    console.log(AName1);
    console.log(AName1a);
    console.log(AName1X);
    console.log(AName1Xa);
};
//importConstants1();
const importReExported = () => {
  console.log(C1);
  console.log(C2);
  console.log(C3);
  console.log(all.C1);
  console.log(all.C2);
  console.log(all.C3);
};
//importReExported();
const wierdImport = () => {
    //console.log(W1); // doesn't work
    //console.log(W2);
};
//wierdImport();
const defaultExportClass = () => {
    f.f1 = 1;
    f.f2 = 2;
    console.log(f);
    f.do1();
    f.do2();
};
//defaultExportClass();
const defaultExportFunction = () => {
    let x22:number = x2(5);
    console.log(x22);
};
//defaultExportFunction();
const interfacesWoImport = () => {
    class Person implements IPerson {
        active: boolean = true;
        id: number = 55;
        name: string = "Hi";
    }
    console.log(new Person());
};
//interfacesWoImport();
