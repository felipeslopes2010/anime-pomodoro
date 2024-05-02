import * as el from './elements.js'
import state from './state.js'
import { kitchenSound } from './sounds.js'

export function updateDisplay(minutes, seconds) {
    el.minutes.textContent = String(minutes).padStart(2, '0');
    el.seconds.textContent = String(seconds).padStart(2, '0');
}

export function startCountdown() {

    clearTimeout(state.timeoutId);

    if(!state.isRunning) {
        return;
    }

    let minutes = Number(el.minutes.textContent);
    let seconds = Number(el.seconds.textContent);

    seconds--;

    if(seconds < 0) {
        seconds = 59;
        minutes--;
    }

    if(minutes > 60) {
        minutes = 60;
    }

    if(minutes < 0) {
        kitchenSound.play();
        kitchenSound.volume = 0.25;
        el.minutes.textContent = 25;
        el.seconds.textContent = 0;

        minutes = el.minutes.textContent;
        seconds = el.seconds.textContent;
        document.documentElement.classList.remove('is-running');
        state.isRunning = false;
    }

    updateDisplay(minutes, seconds);
    
    state.timeoutId = setTimeout(() => {
        startCountdown()
    }, 1000);
}