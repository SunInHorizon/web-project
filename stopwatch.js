window.onload = function () {
    
    var minute = 0;
    var second = 0;
    var millisecond = 0;
    var appendmillisecond = document.getElementById('millisecond');
    var appendsecond = document.getElementById('second');
    var appenendminute = document.getElementById('minute');
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var interval;

    buttonStart.onclick = function() {

        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function() {

        clearInterval(interval);
    }

    buttonReset.onclick = function() {

        clearInterval(interval);
        millisecond = "00";
        second = "00";
        minute = "00";
        appendmillisecond.innerHTML = millisecond;
        appendsecond.innerHTML = second;
        appenendminute.innerHTML = minute;
    }

    
}