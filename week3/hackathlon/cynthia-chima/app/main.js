let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');
const display = document.getElementById("alarm")

const audio = new Audio()
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;


setInterval(() => {
    let date = new Date()
    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let am = hr >= 12 ? "PM" : "AM";

    hr = (hr < 10) ? "0" + hr : hr
    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec


    hours.innerHTML = hr + "<br><span>Hour</span>";
    minutes.innerHTML = min + "<br><span>Minutes</span>";
    seconds.innerHTML = sec + "<br><span>Seconds</span>";
    ampm.innerHTML = am;


    let curr_date = date.getDate();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let month_name = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let showDay = document.querySelectorAll(".day_wrapper span");


    document.querySelector("#showDate").innerHTML = `${month_name[month]} ${curr_date} ${year}`;
    showDay[day].style.opacity = "1";


    let hh = document.getElementById('hh')
    let mm = document.getElementById('mm')
    let ss = document.getElementById('ss')
    hh.style.strokeDashoffset = 440 - (440 * hr) / 24;
    mm.style.strokeDashoffset = 440 - (440 * min) / 60;
    ss.style.strokeDashoffset = 440 - (440 * sec) / 60;
    let hr_dot = document.querySelector('.hr_dot');
    let min_dot = document.querySelector('.min_dot');
    let sec_dot = document.querySelector('.sec_dot');
    hr_dot.style.transform = `rotate(${hr * 15}deg)`;
    min_dot.style.transform = `rotate(${min * 6}deg)`;
    sec_dot.style.transform = `rotate(${sec * 6}deg)`;
})

function setAlarmTime(value) {
    alarmTime = value;
    console.log(alarmTime)
} setAlarmTime(value);


function setAlarm() {
    if (alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => {

                audio.play()
                alert('Dring DRIIIINGGGG!!!')
            }, 1000);
            alert('Alarm set')
        }
    }
} setAlarm();


var background = ["", ""];
var i = 0;
document.querySelector("button").addEventListener("onclick", function () {
    i = 1 < background.lengh ? ++i : 0;
    document.querySelector("background").style.background = background[i]
})

