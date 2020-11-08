window.addEventListener("load", function(){
    document.getElementById('stopTimerButton').style.visibility = 'hidden';
    loadConfig();
});

function loadConfig() {
    if (localStorage.getItem('timer')) {
        let timer = localStorage.getItem('timer');
        document.getElementById(timer).classList.add("btn-primary");
    } else {
        localStorage.setItem('timer', '20');
        loadConfig();
    }
}

function setTime(time) {
    let timer = localStorage.getItem('timer');
    document.getElementById(timer).classList.remove("btn-primary");
    localStorage.setItem('timer', time);
    loadConfig();
}

function startTimer() {
    let timer = localStorage.getItem('timer');
    startTimer();
}

function startReminder() {
    var myAudio = new Audio('ring.mp3');
    myAudio.play();
}

function startTimer() {
    document.getElementById('timerButton').style.visibility = 'hidden';
    document.getElementById('stopTimerButton').style.visibility = 'visible';
    var minute = (localStorage.getItem('timer')-1);
    var sec = 59;
    window.intervalToShowCounter = setInterval(function() {
      document.getElementById("timer").innerHTML = minute + " : " + sec;
      sec--;
      if (sec == 59) {
        minute --;
        sec = 59;
        if (minute == 0) {
            document.getElementById("timer").innerHTML = "";
            document.getElementById('timerButton').style.visibility = 'visible';
            startReminder();
            stopTimer();
            startTimer();
        }
      }
    }, 1000);
}

function stopTimer() {
    clearInterval(window.intervalToShowCounter);
    document.getElementById('stopTimerButton').style.visibility = 'hidden';
    document.getElementById("timer").innerHTML = "";
    document.getElementById('timerButton').style.visibility = 'visible';
}
