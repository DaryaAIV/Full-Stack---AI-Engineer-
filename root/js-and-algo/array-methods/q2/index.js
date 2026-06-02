const users = require('../users.json');

let zipCode = users.filter(u => u.address.zipcode[0] === "5");

console.log(zipCode);
