const checkExists = function(numArr, num) {
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] === num) {
            return true;
        }
    }
    return false;
}
checkExists([1, 2, 3], 2);