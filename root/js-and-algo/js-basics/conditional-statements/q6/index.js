let year = 2024;
// Your conditional code here
// Examples: 2024 = leap, 1900 = not leap, 2000 = leap, 2023 = not leap
// It's divisible by 4 AND If it's divisible by 100,
//  then it must also be divisible by 400


if(year % 400 === 0){
    console.log("Leap Year");   
}
else if(year % 100 === 0 ){
    console.log(" Not Leap Year");
}
else if(year % 4 === 0){
    
    console.log("Leap Year");
}
else{
    console.log(" Not Leap Year");
}

