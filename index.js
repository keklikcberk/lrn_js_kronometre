let startButton = document.querySelector("#btn-start");
let stopButton = document.querySelector("#btn-stop");
let timerText = document.querySelector("#timerTextDOM");
let resetButton = document.querySelector("#btn-reset");
let timeInterval = null;
let isWorking = false;
UpdateDocumentState();

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);



function startTimer() {
   timeInterval =setInterval(buttonActive, 100);
   isWorking = true;
   UpdateDocumentState();
}

function buttonActive() {
    timerText.innerHTML = Number(timerText.innerHTML) +1;
}


function stopTimer() {
    clearInterval(timeInterval);
    isWorking = false;
    UpdateDocumentState();
}


function resetTimer() {
    stopTimer();
    timerText.innerHTML = 0;
}


function UpdateDocumentState()
{ 
    if (isWorking === false) 
    {
        stopButton.disabled = true;
        startButton.disabled = false;
    }
    else
    {
        startButton.disabled = true;
        stopButton.disabled = false;
    }
}

