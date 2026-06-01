const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const name = 'boB';//'Bob' or 'Ted';
nameReservation = name[0].toUpperCase() + name.slice(1).toLowerCase();
if (reservations[nameReservation] && reservations[nameReservation].claimed === false){
    console.log("Welcome,",nameReservation);
}
else if(reservations[nameReservation] && reservations[nameReservation].claimed === true){
    console.log("Hmm, someone already claimed this reservation");
    
}
else{
    console.log("You have no reservation");
    reservations[nameReservation] = {claimed : true};
}
console.log(reservations);

