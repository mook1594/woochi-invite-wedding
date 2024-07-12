<script setup>
import { ref, onMounted } from 'vue'

onMounted(() =>  {
    var deadline = new Date(2025,0,18,13,20,0);
    initializeClock('clockdiv', deadline)
})
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor((t / (1000 * 60 * 60 * 24)));

    return {
        'total': t,
        'days': days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    console.log(clock)
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock(){
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if(t.total <= 0){
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000)
}

</script>

<template>
<div class="wrapper">
    <div id="clockdiv">
        <div>
            <span class="days"></span>
            <div class="text">Days</div>
        </div>
        <div>
            <span class="hours"></span>
            <div class="text">Hours</div>
        </div>
        <div>
            <span class="minutes"></span>
            <div class="text">Minutes</div>
        </div>
        <div>
            <span class="seconds"></span>
            <div class="text">Seconds</div>
        </div>
    </div>
</div>
</template>
<style scoped>
.wrapper{
    background:#D6A2E8;
    font-family: sans-serif;
    font-weight: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height:90vh;
}
h1{
    color: #82589F;
    font-size:40px;
    margin-bottom: 20px;
}
#clockdiv{
    color:#fff;
    display:inline-block;
    text-align: center;
    font-size: 30px;
}

#clockdiv > div{
    padding:10px;
    border-radius: 3px;
    background-color: #83347141;
    display:inline-block;   
    margin-right:10px;
}

#clockdiv > div > span {
    padding: 15px;
    border-radius: 3px;
    background:#82589F;
    display: inline-block;
}

.text{
    padding-top: 5px;
    font-size: 16px;
}
</style>