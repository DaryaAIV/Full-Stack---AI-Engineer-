const users = require('../users.json');

let suiteUser = users.find(u => u.address.suite === "Apt. 950");

console.log(suiteUser.company.name);
