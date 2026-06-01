for (let i = 100; i <= 999; i++) {
    let numStr = i.toString();
    
    let digit1 = Number(numStr[0]);
    let digit2 = Number(numStr[1]);
    let digit3 = Number(numStr[2]);
    
    let sum = Math.pow(digit1, 3) + Math.pow(digit2, 3) + Math.pow(digit3, 3);
    if (sum === i) {
        console.log(i);
    }
}