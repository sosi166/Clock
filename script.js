const hourElm = document.getElementById('hour');
const minuteElm = document.getElementById('minute');
const secondElm = document.getElementById('second');


function setClockHands() {

    var date = new Date();

    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var hourAngle = hour * 30;
    var minuteAngle = minute * 6;
    var secondAngle = second * 6;

    secondElm.style.transform = 'rotate(' + secondAngle + 'deg)';
    minuteElm.style.transform = 'rotate(' + minuteAngle + 'deg)';
    hourElm.style.transform = 'rotate(' + hourAngle + 'deg)';

}

setInterval(setClockHands, 1000); 