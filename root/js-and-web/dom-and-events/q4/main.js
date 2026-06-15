addEventListener("DOMContentLoaded", () => {
    const validate = function(){
        const nameVal = document.querySelector("#input-name").value;
        const salaryVal = parseInt(document.querySelector("#input-salary").value) || 0;
        const birthVal = document.querySelector("#input-birthday").value;
        const phone = document.querySelector("#input-phone").value;
        const errorContainer = document.querySelector("#error");

        errorContainer.innerHTML = "";
        
        if (nameVal.length <= 2){
            const newError = document.createElement("p");
            newError.textContent = "Name must be longer than 2 characters";
            newError.classList.add("error");
            errorContainer.appendChild(newError);
        }
        if(salaryVal < 10000 || salaryVal > 16000){
            const newError = document.createElement("p");
            newError.textContent = "Salary must be greater than 10,000 but less than 16,000";
            newError.classList.add("error");
            errorContainer.appendChild(newError);
        }
        if(birthVal === ""){
            const newError = document.createElement("p");
            newError.textContent = "Birthday may not be null";
            newError.classList.add("error");
            errorContainer.appendChild(newError);
        }
        if(phone.length !== 10){
            const newError = document.createElement("p");
            newError.textContent = "Phone must be 10 digits long";
            newError.classList.add("error");
            errorContainer.appendChild(newError);
        }
    }
    document.querySelector("#btn-submit").addEventListener("click", validate);
    
});
