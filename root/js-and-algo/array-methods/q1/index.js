const users = require('../users.json');

let userCompan = users.map(u => {
    return{ email: u.email, companyName: u.company.name};

});
console.log(userCompan);

