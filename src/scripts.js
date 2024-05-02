import * as el from './elements.js' 
import * as timer from './timer.js'

export function start(minutes, seconds) {
   el.minutes.textContent = minutes;
   el.seconds.textContent = seconds;

    timer.updateDisplay(minutes, seconds); 
}