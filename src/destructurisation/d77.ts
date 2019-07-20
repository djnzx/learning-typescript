const funct1 = () => [42, true, ""];
const funct2 = () => [43, false, "error #1"];

const xx1 = funct1();
const af1 = xx1[0];
const bb1 = xx1[1];

const [af, bb] = funct1();
const [,, msg] = funct1();
