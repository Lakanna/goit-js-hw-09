import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

let currentTime = Date.now();
let pickedTime = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (Number(selectedDates[0]) < currentTime) {
      Notiflix.Notify.failure('Будь ласка, виберіть дату в майбутньому');
      return;
    };

    pickedTime = Number(selectedDates[0]);
    
    defer.btnStart.disabled = false;
  }
};

const defer = {
  btnStart: document.querySelector('button[data-start]'),
  spanDays: document.querySelector('span[data-days]'),
  spanHours: document.querySelector('span[data-hours]'),
  spanMinutes: document.querySelector('span[data-minutes]'),
  spanSeconds: document.querySelector('span[data-seconds]')
};

defer.btnStart.addEventListener("click", handlerClick);

defer.btnStart.disabled = true;

flatpickr("#datetime-picker", options);

function handlerClick(evt) {
 
  defer.btnStart.disabled = true;
  
    
  setInterval(timeHandler, 1000);

  function timeHandler() {
    let currentTime = Date.now();
    const deltaTime = pickedTime - currentTime;
    if (deltaTime <= 0) { 
      return;
    };
    convertMs(deltaTime);

    defer.spanDays.textContent = data.days;
    defer.spanHours.textContent = addLeadingZero(data.hours);
    defer.spanMinutes.textContent = addLeadingZero(data.minutes);
    defer.spanSeconds.textContent = addLeadingZero(data.seconds);

  }
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const data = {};

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return data = { days, hours, minutes, seconds };

};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};

