let usernameLength = 6;
let passwordLength = 7;
let userAge = 15;
// Your conditional code here

if(usernameLength < 5){
    console.log("error! Username must be at least 5 characters");
    
}
else if(passwordLength < 8){
    console.log("error! Password must be at least 8 characters");
}

else if(userAge < 13){
    console.log("error! User must be 13 or older");

}
else{
    console.log("success! you can create an account");
}