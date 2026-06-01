const isEven = function(num) {
    return num % 2 === 0;
};
const printOdds = function(numArr) {
    for (let num of numArr) {
        if (!isEven(num)) {
            console.log(num);
        }
    }

}
printOdds([1, 2, 3, 4, 5, 6]);