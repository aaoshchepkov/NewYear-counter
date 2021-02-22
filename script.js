window.addEventListener('DOMContentLoaded',function(){
'use strict';
let date = new Date();
let hello = document.querySelector('.hello');   
let hours = date.getHours();
let getDay = date.getDay(); 
let day = document.querySelector('.day');
let time = document.querySelector('.time');

function timeOfDay (){ 
 if (hours < 5 && hours === 24) {
   hello.textContent = 'Доброй ночи'; 
 } else if (hours > 5 && hours < 12) {
   hello.textContent = 'Доброе утро'; 
 } else if (hours >= 12 && hours < 18) {
   hello.textContent = 'Добрый день'; 
 } else if (hours >= 18 && hours < 24) {
   hello.textContent = 'Добрый вечер'; 
 }
}
timeOfDay();



let days = ['Воскресенье','Понедельник','Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
day.textContent = days[getDay];



function timer() {
let date = new Date();  
time.textContent = date.toLocaleString('en-US',{hour:'numeric',minute:'numeric',second:'numeric',hour12:true});
}
setInterval (timer, 1000);




 function counTimer(deadline) {
    let newyear = document.querySelector(".newyear");
        
    function getTimeRemaining() {
      let dateStope = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStope - dateNow) / 1000,
        newDay = Math.floor(timeRemaining / 3600/24);
        return newDay;
    }
     let timer = getTimeRemaining();
     newyear.textContent = 'До нового года осталось ' + timer + ' дней';
  }
  
  counTimer('1 january 2022');


});