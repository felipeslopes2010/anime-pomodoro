import * as el from './elements.js'
import state from './state.js'
import * as timer from './timer.js'

export function setMinutes() {
    el.minutes.setAttribute('contenteditable', true);
    el.minutes.focus();
    el.minutes.textContent = '';

    el.minutes.onkeypress = e => /\d/.test(e.key);

    el.minutes.addEventListener('blur', updateTimeWhenUnfocused);

    el.minutes.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            updateTimeWhenUnfocused();
        }
    });
}

function updateTimeWhenUnfocused() {
    let time = el.minutes.textContent;
    time = time > 60 ? 60 : time;

    state.minutes = time;
    state.seconds = 0;

    timer.updateDisplay(state.minutes, state.seconds);
    el.minutes.removeAttribute('contenteditable');
}   