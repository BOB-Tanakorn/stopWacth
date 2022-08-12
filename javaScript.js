window.onload = function(){
    var second = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens");
    var appendSecond = document.getElementById("second");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var Interval;

    buttonStart.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function(){
        clearInterval(Interval);
    }

    buttonReset.onclick = function(){
        clearInterval(Interval);
        tens = "00";
        second = "00";
        appendTens.innerHTML = tens;
        appendSecond.innerHTML = second;
    }

    function startTimer(){
        tens++;
        if(tens<9){
            appendTens.innerHTML = "0" + tens;
        }
        if(tens>9){
            appendTens.innerHTML = tens;
        }
        if(tens>99){
            second++;
            if(second<9){
                appendSecond.innerHTML = "0"+second;
            }
            if(second>9){
                appendSecond.innerHTML = second;
            }
            tens = "00";
            appendTens.innerHTML = tens;
        }
    }
}