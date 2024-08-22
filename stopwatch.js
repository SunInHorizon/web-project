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

    function startTimer()
    {
        millisecond++;

        if(millisecond <= 9)
        {
            appendmillisecond.innerHTML = "0" + millisecond;
        }

        if(millisecond > 9)
        {
            appendmillisecond.innerHTML = millisecond;
        }

        /*if(millisecond > 99)
        {
            appendmillisecond.innerHTML = millisecond;
        }*/

        if(millisecond > 99)
        {
            console.log("second")
            second++;
            appendsecond.innerHTML = "0" + second;
            millisecond = 0;
            appendmillisecond.innerHTML = "0" +  0;
        }

        if(second <=9)
        {
            appendsecond.innerHTML = "0" + second;
        }

        if(second > 9)
        {
            appendsecond.innerHTML = second;
        }

        if(second > 60)
        {
            console.log("minute");
            minute++;
            appenendminute.innerHTML = "0" + minute;
            second = 0;
            appendsecond.innerHTML = "0" + 0;
        }

        if(minute > 9)
        {
            appenendminute.innerHTML = minute;
        }
    }
}