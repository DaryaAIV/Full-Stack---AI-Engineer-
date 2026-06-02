const users = require('../users.json');

let zipCodeIds = users.filter(u => u.address.zipcode[0] === "5").map(u => u.id);

console.log(zipCodeIds);
