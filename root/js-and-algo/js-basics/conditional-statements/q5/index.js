let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday, 1 = Monday, etc.
// Your conditional code here
let discount = 0;


if(customerType === "VIP"){
    discount = 0.20;
    
}
else if(customerType === "premium"){
    discount = dayOfWeek === 6 || dayOfWeek === 0 ? 0.15 : 0.10;
}

else{
    discount = purchaseAmount > 100 ? 0.10 : purchaseAmount > 50 ? 0.05 : 0;
}
console.log(discount);
