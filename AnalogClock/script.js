const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function updateClock(){
    /*Get the current date */
    var cTime = new Date();

    //to represent in 12-hour format
    let cHour = cTime.getHours() % 12;
    let cMin = cTime.getMinutes();
    let cSec = cTime.getSeconds();

    /*Instantiate the positions of the hands*/
    let secPosition=(cSec/60)*360;
    let minPosition=(cMin/60)*360 + (cSec*(360/60)/60);
    let hrPosition = (cHour/12)*360 + (cMin*(360/60)/12);

    HOURHAND.style.transform = "rotate("+hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate("+minPosition + "deg)";
    SECONDHAND.style.transform = "rotate("+secPosition + "deg)";
}

//update the clock every 1s, 1s = 1000ms
var interval = setInterval(updateClock, 1000);
