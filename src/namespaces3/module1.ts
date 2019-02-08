import { M2 } from "./module2";
import CDefaultClass, { CNamedClass } from "./module3";

let m2 = new M2();
let m31 = new CDefaultClass();
let m32 = new CNamedClass();

m2.method2();
m31.method3();
m32.method3();
