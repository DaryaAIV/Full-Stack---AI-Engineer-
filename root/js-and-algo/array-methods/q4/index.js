const users = require('../users.json');

let nameStartWith = users.map(u => u.name).filter(name => name[0] === "C");

console.log(nameStartWith);
