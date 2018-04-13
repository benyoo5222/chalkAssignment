var chalk = require("chalk");

var message = "Hello " + chalk.black.bgWhite.bold.underline("World");
console.log(message);