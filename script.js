//to take the elements from html class to js script
const daysEL = document.getElementById('days-id'); 
const hoursEL = document.getElementById('hours-id'); 
const minsEL = document.getElementById('mins-id'); 
const secEL = document.getElementById('sec-id'); 




const newyear = "1 jan 2024";
function countdown() {
    const newyearsdate = new Date(newyear);
    const currentdate= new Date();
    const remainingmillisec =(newyearsdate-currentdate);
    const remainingsec=Math.floor(remainingmillisec/1000);

    const days=Math.floor(remainingsec/(3600*24));
    const hours=Math.floor((remainingsec/3600)%24);
    const mins=Math.floor((remainingsec/60)%60);
    const sec=Math.floor(remainingsec%60);

    daysEL.innerHTML=days;
    hoursEL.innerHTML=formatTime(hours);    
    minsEL.innerHTML=formatTime(mins);
    secEL.innerHTML=formatTime(sec);

}


function formatTime(time) {
    return time<10 ? (`0${time}`) : time;
}

countdown();
setInterval(countdown,1000);