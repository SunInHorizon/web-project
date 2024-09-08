window.onload = function () {
    
    var minute = 0;
    var second = 0;
    var millisecond = 0;
    var minute1 = 0;
    var second1 = 0;
    var millisecond1 = 0;
    var minute2 = 0;
    var second2 = 0;
    var millisecond2 = 0;
    var minute3 = 0;
    var second3 = 0;
    var millisecond3 = 0;
    var minute4 = 0;
    var second4 =  0;
    var millisecond4 = 0; 
    var min1 = 0;
    var sec1 = 0;
    var milli1 = 0;
    var min2 = 0;
    var sec2 = 0;
    var milli2 =0;
    var appendmillisecond = document.getElementById('millisecond');
    var appendsecond = document.getElementById('second');
    var appenendminute = document.getElementById('minute');
    var laps = document.getElementById('laps');
    var buttonStart = document.getElementById('button-start');
    var buttonLap = document.getElementById('button-lap');
    //var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var interval;
    var status = false;
    var flag = false;
    var temp = false;
    let count = 0;
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
                if(temp === false)
                    {
                        count++;
                        let li = document.createElement("li");
                        li.innerHTML = `${"#" + count} :- ${zeropad(minute1)}:${zeropad(second1)}.${zeropad(millisecond1)} - ${zeropad(minute)}:${zeropad(second)}.${zeropad(millisecond)}`;
                        laps.appendChild(li);
                        laps.scroll({top: laps.scrollHeight, behavior: "smooth"});
                        temp = true;
                        minute3 = minute - minute1;
                        second3 = second - second1;
                        millisecond3 = millisecond - millisecond1;
                        minute2 = minute;
                        second2 = second;
                        millisecond2 = millisecond;
                    }
                    else
                    {
                        count++;
                        minute4 = minute - minute2;
                        second4 = second - second2;
                        millisecond4 = millisecond - millisecond2;
                        if(minute1 === 0 && second1 === 0 && millisecond1 === 0)
                        {
                            if(minute4 > minute2 || second4 > second2 || millisecond4 > millisecond2)
                            {
                                min1 = minute4 - minute2;
                                sec1 = second4 - second2;
                                milli1 = millisecond4 - millisecond2;
                                min2 = minute4;
                                sec2 = second4;
                                milli2 = millisecond4;
                                let li = document.createElement("li");
                                li.innerHTML = `${"#" + count} :- ${zeropad(minute2)}:${zeropad(second2)}.${zeropad(millisecond2)} - ${zeropad(minute)}:${zeropad(second)}.${zeropad(millisecond)} :: ${zeropad(min1)}:${zeropad(sec1)}.${zeropad(milli1)}`;
                                laps.appendChild(li);
                                laps.scroll({top: laps.scrollHeight, behavior: "smooth"});
                            }
                            minute1++;
                            second1++;
                            millisecond1++;
                            minute2 = minute;
                            second2 = second;
                            millisecond2 = millisecond;
                        }
                        else
                        {
                            if(minute4 > min2 || second4 > sec2 || millisecond4 > milli2)
                            {
                                min1 = minute4 - min2;
                                sec1 = second4 - sec2;
                                milli1 = millisecond4 - milli2;
                                min2 = minute4;
                                sec2 = second4;
                                milli2 = millisecond4;
                                let li = document.createElement("li");
                                li.innerHTML = `${"#" + count} :- ${zeropad(minute2)}:${zeropad(second2)}.${zeropad(millisecond2)} - ${zeropad(minute)}:${zeropad(second)}.${zeropad(millisecond)} :: ${zeropad(min1)}:${zeropad(sec1)}.${zeropad(milli1)}`;
                                laps.appendChild(li);
                                laps.scroll({top: laps.scrollHeight, behavior: "smooth"});
                            }
                            minute2 = minute;
                            second2 = second;
                            millisecond2 = millisecond;
                        }
                    }
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

    const zeropad = (num) => {
        return String(num).padStart(2, "0");
    }

    /*buttonLap.onclick = function() {

       
        if(temp === false)
        {
            count++;
            let li = document.createElement("li");
            li.innerHTML = `${"#" + count} :- ${zeropad(minute1)}:${zeropad(second1)}.${zeropad(millisecond1)} - ${zeropad(minute)}:${zeropad(second)}.${zeropad(millisecond)}`;
            laps.appendChild(li);
            laps.scroll({top: laps.scrollHeight, behavior: "smooth"});
            temp = true;
            minute3 = minute - minute1;
            second3 = second - second1;
            millisecond3 = millisecond - millisecond1;
            minute2 = minute;
            second2 = second;
            millisecond2 = millisecond;
        }
        else
        {
            count++;
            minute4 = minute - minute2;
            second4 = second - second2;
            millisecond4 = millisecond - millisecond2;
            if(minute1 === 0 && second1 === 0 && millisecond1 === 0)
            {
                if(minute4 > minute2 || second4 > second2 || millisecond4 > millisecond2)
                {
                    min1 = minute4 - minute2;
                    sec1 = second4 - second2;
                    milli1 = millisecond4 - millisecond2;
                    min2 = minute4;
                    sec2 = second4;
                    milli2 = millisecond4;
                    let li = document.createElement("li");
                    li.innerHTML = `${"#" + count} :- ${zeropad(minute2)}:${zeropad(second2)}.${zeropad(millisecond2)} - ${zeropad(minute)}:${zeropad(second)}.${zeropad(millisecond)} :: ${zeropad(min1)}:${zeropad(sec1)}.${zeropad(milli1)}`;
                    laps.appendChild(li);
                    laps.scroll({top: laps.scrollHeight, behavior: "smooth"});
                }
                minute1++;
                second1++;
                millisecond1++;
                minute2 = minute;
                second2 = second;
                millisecond2 = millisecond;
            }
            else
            {
                if(minute4 > min2 || second4 > sec2 || millisecond4 > milli2)
                {
                    min1 = minute4 - min2;
                    sec1 = second4 - sec2;
                    milli1 = millisecond4 - milli2;
                    min2 = minute4;
                    sec2 = second4;
                    milli2 = millisecond4;
                    let li = document.createElement("li");
                    li.innerHTML = `${"#" + count} :- ${zeropad(minute2)}:${zeropad(second2)}.${zeropad(millisecond2)} - ${zeropad(minute)}:${zeropad(second)}.${zeropad(millisecond)} :: ${zeropad(min1)}:${zeropad(sec1)}.${zeropad(milli1)}`;
                    laps.appendChild(li);
                    laps.scroll({top: laps.scrollHeight, behavior: "smooth"});
                }
                minute2 = minute;
                second2 = second;
                millisecond2 = millisecond;
            }
        }
       
    }*/

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
        laps.innerHTML = "";
        count = 0;
        temp = false;
        minute2 = 0;
        second2 = 0;
        millisecond2 = 0;
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