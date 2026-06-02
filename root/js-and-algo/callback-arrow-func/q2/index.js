const returnTime = function (time) {
  console.log('The current time is: ' + time)
}
const getTime = function(callbackFunc){
    const time = new Date();
    callbackFunc(time);
}
getTime(returnTime)
