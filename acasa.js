setInterval(showTime, 1);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
 
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
 
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime = hour + ":"
            + min + ":" + sec + am_pm;
 
    document.getElementById("clock")
            .innerHTML = currentTime;
}
showTime();

function RandomColor() {
    const string = "0123456789ABCDEF";
    let culoare = "#";
    for(let i = 0; i < 6; i++) {
        culoare += string[Math.floor(Math.random() * 15)];
    }
    return culoare;
}
let div = document.getElementsByClassName("boost")[0];

setInterval(() => {
        div.style.color = RandomColor();
}, 1000)