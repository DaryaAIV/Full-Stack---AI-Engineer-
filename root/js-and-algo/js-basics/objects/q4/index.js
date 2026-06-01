const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: false, // choose one
    fridge: {
        price: 500,
        works: false, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "radish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}
const hasOven = kitchen.hasOven;
const fridgeWorks = kitchen.fridge.works;
const repairPrice = kitchen.fridge.price / 2;
const expiredDays = date - kitchen.fridge.items[1].expiryDate;
const itemName = kitchen.fridge.items[1].name;
if(hasOven && fridgeWorks){
    console.log(`${kitchen.owner}'s ${itemName} expired ${expiredDays} day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the ${itemName} in.`);
}
else if(fridgeWorks && !hasOven){
    console.log(`${kitchen.owner}'s ${itemName} expired ${expiredDays} day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the ${itemName} in.`);
}
else if(hasOven && !fridgeWorks){
        console.log(`${kitchen.owner}'s ${itemName} expired ${expiredDays} day ago.Probably because her fridge doesn't work. Luckily, she has an oven to cook the ${itemName} in. And she'll have to pay ${repairPrice} to fix the fridge.`);

}
else {
    console.log(`${kitchen.owner}'s ${itemName} expired ${expiredDays} day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the ${itemName} in. And she'll have to pay ${repairPrice} to fix the fridge.`);
}