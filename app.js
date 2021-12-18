var minseconds = document.getElementById("minsec");
var seconds = document.getElementById("sec");
var minute = document.getElementById("min");

var play = document.getElementById("play");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");

let sec = 0;
let min = 0;
let minsec = 0;
let Timer; 

function Play(){
    Timer = setInterval(()=>{
    if (minsec === 60){
        minsec = 0;
        sec++;
    }
    if (sec===60){
        sec=0;
    }
    if (min === 60){
        min=0;
    }
    minsec++;
    minseconds.innerHTML =  minsec;
    seconds.innerHTML = ": "+sec+" : ";
    minute.innerHTML = min;

    },10);
    
}

play.addEventListener("click", Play);

reset.addEventListener("click",()=>{
    sec = 0;
    min = 0;
    minsec = 0;
    minseconds.innerHTML =  minsec;
    seconds.innerHTML = ": "+sec+" : ";
    minute.innerHTML = min;
    
});

stop.addEventListener("click",()=>{
      clearInterval(Timer);
      minseconds.innerHTML =  minsec;
      seconds.innerHTML = ": "+sec+" : ";
       minute.innerHTML = min;
});