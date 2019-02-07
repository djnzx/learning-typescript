console.log("starting...");

try {
  const config = require('../package.json');
  console.log(config.version);
  console.log(config.version11);
} catch (e) {
  console.log("invalid, error: ", e);
}

console.log("...finishing");

