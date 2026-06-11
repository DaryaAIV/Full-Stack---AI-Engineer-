class Exercises{

    isEven(n) {
        return n % 2 == 0 ? true : false;
    }
    removeAtLeastOne(arr) {
        let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1;
        arr.splice(0, numItemsToRemove);
        return arr;
    }
    simplify(str) {
        let symbols = ["!", "#", ".", ",", "'"];
        return str.split("").filter(c => symbols.indexOf(c) == -1).join("");
    }
    validate(arr) {
        if (arr.length === 0){
            return {error: "Need at least one boolean"};
        }
        let trueCount = arr.filter(item => typeof item === 'boolean' && item === true).length;
        let falseCount = arr.filter(item => typeof item === 'boolean' && item === false).length;
        return trueCount > falseCount;
    }

}
module.exports = Exercises;