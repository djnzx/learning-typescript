// =========================
function sayHello(name) {
  const text = 'Hello ' + name;
  const say = function () {
    console.log(text);
  };
  say();
}
sayHello('Joe');
// =========================
function sayHello2(name) {
  const text = 'Hello ' + name;
  const say = function () {
    console.log(text);
  };
  return say;
}
var say2 = sayHello2('Bob');
say2();
// =========================
const outer = (outer_var: number) => {
  const inner = () => console.log(outer_var);
  return inner();
};
outer(13);
// ==============
function say667() {
  let num = 42;
  const say = () => console.log(num);
  num++;
  return say;
}
const sayNumber = say667();
sayNumber(); // 43

//

var gLogNumber, gIncreaseNumber, gSetNumber;
function setupSomeGlobals() {
  // Local variable that ends up within closure
  var num = 42;
  // Store some references to functions as global variables
  gLogNumber = function() { console.log(num); }
  gIncreaseNumber = function() { num++; }
  gSetNumber = function(x) { num = x; }
}

setupSomeGlobals();
gIncreaseNumber();
gLogNumber(); // 43
gSetNumber(5);
gLogNumber(); // 5

var oldLog = gLogNumber;

setupSomeGlobals();
gLogNumber(); // 42

oldLog() // 5
