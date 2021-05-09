const day= document.querySelector('.day')
const hour= document.querySelector('.hour')
const minute= document.querySelector('.minute')
const second= document.querySelector('.second')

const textDay= document.querySelector('.text-day')
const textHour= document.querySelector('.text-hour')
const textMinute= document.querySelector('.text-minute')
const textSecond= document.querySelector('.text-second')

const countdown = () => {
  const countDate = new Date('May 25, 2021 00:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  let timeDay = Math.floor( gap/DAY );
  let timeHour = Math.floor(( gap%DAY ) / HOUR);
  let timeMinute = Math.floor(( gap%HOUR ) / MINUTE);
  let timeSecond = Math.floor(( gap%MINUTE ) / SECOND);

  timeDay === 1 ? textDay.innerText = 'Day' :  textDay.innerText = 'Days';
  timeHour === 1 ? textHour.innerText = 'Hour' :  textHour.innerText = 'Hours';
  timeMinute === 1 ? textMinute.innerText = 'Minute' :  textMinute.innerText = 'Minutes';
  timeSecond === 1 ? textSecond.innerText = 'Second' :  textSecond.innerText = 'Seconds';

  timeDay < 10 ? timeDay= `0${timeDay}` : timeDay;
  timeHour < 10 ? timeHour= `0${timeHour}` : timeHour;
  timeMinute < 10 ? timeMinute= `0${timeMinute}` : timeMinute;
  timeSecond < 10 ? timeSecond= `0${timeSecond}` : timeSecond;

  timeDay % 2 === 0 ? day.style.color= '#6c63ff' : day.style.color= '#f55f44';
  timeHour % 2 === 0 ? hour.style.color= '#6c63ff' : hour.style.color= '#f55f44';
  timeMinute % 2 === 0 ? minute.style.color= '#6c63ff' : minute.style.color= '#f55f44';
  timeSecond % 2 === 0 ? second.style.color= '#6c63ff' : second.style.color= '#f55f44';
  
  day.innerText = timeDay;
  hour.innerText = timeHour;
  minute.innerText = timeMinute;
  second.innerText = timeSecond;
};

setInterval(countdown, 1000);