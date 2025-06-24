const generatepassword = require("generate-password");

const password = generatepassword.generate({
  length: 10,
  numbers: true,
  symbols: true,
});

console.log(password);
