const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var timer=[0,0,0];
var interval;
var isTimerRunning = false;


// Add leading zero to numbers 9 or below (purely for aesthetics):
function addLeadingZero(time){
  if(time <=9){
    time = "0"+ time;
  }
  return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer(){

  let cTime = addLeadingZero(timer[0])+":"+addLeadingZero(timer[1])+":"+addLeadingZero(timer[2]);;
  theTimer.innerHTML = cTime;
  timer[2]++;
  if(timer[2]==100){
    timer[1]++;
    timer[2]=0;
  }
  if(timer[1]==60){
    timer[0]++;
    timer[1]=0;
  }
}

// Match the text entered with the provided text on the page:
function checkText(){
  let enteredText = testArea.value;
  let sampleText = originText;

  //if the text matches the sample, border = green,
  //if the text matches the sample at a similar length, border = orange,
  //else, border = red
  if(enteredText == sampleText){
    testWrapper.style.borderColor ="green";

    //stop the clock
    clearInterval(interval);
  }else if(enteredText == sampleText.substring(0,enteredText.length)){
    testWrapper.style.borderColor ="orange";
  }else{
    testWrapper.style.borderColor = "red";
  }
}

// Start the timer:
function startTimer(){
  let enteredText = testArea.value;
  if(enteredText.length === 0 || !isTimerRunning){
    isTimerRunning = true;
    interval = setInterval(runTimer,10);
  }
}

// Reset everything:
function resetTimer(){
  theTimer.innerHTML = '00:00:00';
  testArea.value = "";
  timer = [0,0,0];
  testWrapper.style.borderColor = "grey";
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener('keypress', startTimer, false);
testArea.addEventListener('keyup', checkText, false);
resetButton.addEventListener('click', resetTimer, false);
