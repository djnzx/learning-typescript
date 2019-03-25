import chalk from "chalk";

class Properties {
  static readonly PG_LOGIN = 'PG_LOGIN';
  static readonly PG_PWD = 'PG_PWD';
  static readonly PG_HOST = 'PG_HOST';
  static readonly PG_PORT = 'PG_PORT';
  static readonly PG_NAME = 'PG_NAME';
  static readonly PG_ARGS = 'PG_ARGS';
  static readonly API_DROP = 'API_DROP';
}

const varsRequired = [
  Properties.PG_LOGIN,
  Properties.PG_PWD,
  Properties.PG_HOST,
  // Properties.PG_PORT,
  // Properties.PG_NAME,
  // Properties.PG_ARGS,
];

const isEnvVariableSet = (key: string) => {
  return process.env[key] === undefined;
};

const envVar = (key: string) => {
  return process.env[key];
};

varsRequired.forEach(key => {
  if (isEnvVariableSet(key)) {
    console.log(`environment variable ${chalk.red(key)} required to run application`)
    process.exit(-1);
  }
});

const message = (variable: string, value: string) => `Environment variable ${variable} is ${value}`;

varsRequired.forEach(variable => {
  const value = envVar(variable);
  console.log(message(chalk.green(variable), chalk.green(value)));
});
