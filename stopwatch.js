window.onload = function () {
    
    var minute = 0;
    var second = 0;
    var millisecond = 0;
    var appendmillisecond = document.getElementById('millisecond');
    var appendsecond = document.getElementById('second');
    var appenendminute = document.getElementById('minute');
    var buttonStart = document.getElementById('button-start');
    //var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var interval;
    var status = false;
    var flag = false;
    buttonReset.disabled = true;

    buttonStart.onclick = function() {

        if(status === false)
        {
            clearInterval(interval);
            interval = setInterval(startTimer, 10);
            buttonReset.disabled = false;
            buttonStart.innerText = "Stop"
            buttonStart.style.backgroundColor = "#ff3333"
            status = true;
        }
        else
        {
            if(flag === false)
            {
                clearInterval(interval);
                buttonStart.innerText = "Resume";
                buttonStart.style.backgroundColor = "#ffb233"
                flag = true;
            }
            else
            {
                clearInterval(interval);
                interval = setInterval(startTimer, 10);
                buttonStart.innerText = "Stop";
                buttonStart.style.backgroundColor = "#ff3333"
                flag = false;
            }
        }
        
    }

    /*buttonStop.onclick = function() {

        buttonStart.disabled = true;
        if(flag === false)
        {
            clearInterval(interval);
            buttonStop.innerText = "Resume";
            flag = true;
        }
        else
        {
            clearInterval(interval);
            interval = setInterval(startTimer, 10);
            buttonStop.innerText = "Stop";
            flag = false;
        }
    }*/


    buttonReset.onclick = function() {

        clearInterval(interval);
        millisecond = "00";
        second = "00";
        minute = "00";
        appendmillisecond.innerHTML = millisecond;
        appendsecond.innerHTML = second;
        appenendminute.innerHTML = minute;
        buttonStart.innerText = "Start";
        buttonStart.style.backgroundColor = "#33ff39"
        buttonReset.disabled = true;
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