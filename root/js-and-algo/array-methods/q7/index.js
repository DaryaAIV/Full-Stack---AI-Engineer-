const users = require('../users.json');

const logSummary = function(user){
    console.log(user.name + "  lives in " + user.address.city +" ,owns the company " + user.company.name);
    
};
users.forEach(logSummary);