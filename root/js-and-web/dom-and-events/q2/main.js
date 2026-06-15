addEventListener("DOMContentLoaded", () => {


    const reservations = {
        Bob: { claimed: false },
        Ted: { claimed: true }
    }

    const checkReservation = function () {
        const inputName = document.querySelector("#input-name");
        const nameReservation = inputName.value;
        const reservationName = nameReservation[0].toUpperCase() + nameReservation.slice(1).toLowerCase();
        const returnMsg = document.querySelector("#msg");
        if (reservations[reservationName]){
            if(reservations[reservationName].claimed){
                returnMsg.textContent = "Hmm, someone already claimed this reservation";
            }
            else if(!reservations[reservationName].claimed){
                returnMsg.textContent = "Welcome, " + reservationName;
            }
        }
        else{
            returnMsg.textContent = "You have no reservation";
        }
        inputName.value = "";
    }

    document.querySelector("#btn-check").addEventListener("click", checkReservation);
});
