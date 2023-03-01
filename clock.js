setInterval(showClock, 1000)
const secondsHand = document.querySelector("[data-seconds-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const hourHand = document.querySelector("[data-hour-hand]");

function showClock(){
    const currentDate = new Date();
    const seconds = currentDate.getSeconds() / 60;
    const minute = (seconds + currentDate.getMinutes()) / 60;
    const hour = (minute + currentDate.getHours()) / 12;
    setRotation(secondsHand, seconds)
    setRotation(minuteHand, minute)
    setRotation(hourHand, hour)

    function setRotation(element, rotationRatio){
        element.style.setProperty('--rotation', rotationRatio * 360)
    }
}
showClock()

setInterval(showTime, 1000)
function showTime(){
    var currentDate = new Date()
    var seconds = currentDate.getSeconds() // 0 - 59;
    var minute =  currentDate.getMinutes() // 0 - 59;
    var hour = currentDate.getHours() // 0 - 12;
    var session = "AM";
        if(hour == 0){
            hour = 12;
        }
        if(hour > 12){
            hour = hour - 12;
            session = "PM"
        }
        if(hour < 10){
            hour = "0" + hour;
        }
        if(minute < 10){
            minute = "0" + minute;
        }
        if(seconds < 10){
            seconds = "0" + seconds;
        }
    var time = hour + ":" + minute + ":" + seconds + " " + session;
    document.querySelector(".clock-2").innerHTML=time;
    document.querySelector(".clock-2").textContent=time;

}
showTime()

