let timeEl=document.getElementById("time");
let dayEl=document.getElementById("day");
let containerEl=document.getElementById("container");



setInterval(function(){

    let now=new Date();

    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    let day=now.getDay();

    if(seconds<10){
        seconds=`0${seconds}`;
    }

    if(minutes<10){
        minutes=`0${minutes}`;
    }

    switch(day){
        case 0:
            day="Sunday";
            break;
        case 1:
            day="Monday";
            break;
        case 2:
            day="Tuesday";
            break;
        case 3:
            day="Wednesday";
            break;
        case 4:
            day="Thursday";
            break;
        case 5:
            day="Friday";
            break;
        case 6:
            day="Saturday";
            break;
    }
    
    timeEl.textContent=`${hours} : ${minutes} : ${seconds}`;
    dayEl.textContent=day;

},1000);

function falling(){
    let e =document.createElement("div");
    e.setAttribute('class','circle');
    containerEl.appendChild(e);


    let size=Math.random() * 25;
    e.style.width=5+size+'px';
    e.style.left=Math.random() * +innerWidth+'px';

    let angle=Math.random() * 360;
    e.style.filter=`hue-rotate(${angle}deg)`;
}
setInterval(function(){
    falling()
},200);

setTimeout(function(){
    containerEl.removeChild(e);
},10000);


