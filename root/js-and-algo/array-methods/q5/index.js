const users = require('../users.json');

let isLivesIn = users.every(u => u.address.city === "South Christy");

console.log(isLivesIn);