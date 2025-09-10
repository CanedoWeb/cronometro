const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const millisecondsEl = document.getElementById("miliseconds");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");


let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;
let interval;

startBtn.addEventListener("click", startTimer,)
stopBtn.addEventListener('click', stopTimer)
resetBtn.addEventListener('click', resetTimer)


function startTimer() {
    interval = setInterval(() => {
        if (isPaused === false) {
            milliseconds += 10
            if (milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = formatarTime(minutes);
            secondsEl.textContent = formatarTime(seconds);
            millisecondsEl.textContent = formatarMilliseconds(milliseconds);
        }
    }, 10);
}

function formatarTime(time) {
    return time < 10 ? `0${time}` : time
}

function formatarMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time
}

function stopTimer() {
    if (isPaused === false) {
        isPaused = true;
        stopBtn.textContent = "Continuar";
    } else {
        isPaused = false;
        stopBtn.textContent = "Parar";
    }
}

function resetTimer() { 
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    millisecondsEl.textContent = "00"

    isPaused = false;
    stopBtn.textContent = "Parar";
}





