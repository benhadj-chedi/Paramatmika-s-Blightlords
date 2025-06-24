const fs = require("fs");

// create file welcome.txt
fs.writeFileSync("welcome.txt", "hello node");

// read data
const data = fs.readFileSync("welcome.txt", "utf8");

console.log(data);
