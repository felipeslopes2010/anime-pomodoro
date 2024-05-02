import * as el from './elements.js';
import * as timer from './timer.js'
import * as action from './actions.js'
import state from './state.js'
import * as sound from './sounds.js'

el.btnPlay.addEventListener('click', () => {
   state.isRunning = document.documentElement.classList.toggle('is-running');
   sound.startSound.play();
   sound.startSound.volume = 0.2;
   timer.startCountdown()
});

el.btnPause.addEventListener('click', () => {
    document.documentElement.classList.toggle('is-running');
    state.isRunning = false;
});

el.btnAdjust.addEventListener('click', () => {
    document.documentElement.classList.remove('is-running');
    state.isRunning = false;
    action.setMinutes();
});

el.btnPlus.addEventListener('click', () => {
    document.documentElement.classList.remove('is-running');
    state.isRunning = false;
    let minutes = Number(el.minutes.textContent);
    let seconds = Number(el.seconds.textContent);
    
    minutes++;
    seconds = 0;
    
   if(minutes > 60) {
    minutes = 60;
   }

    timer.updateDisplay(minutes, seconds);

});

el.btnMinus.addEventListener('click', () => {
    document.documentElement.classList.remove('is-running');
    state.isRunning = false;
    let minutes = Number(el.minutes.textContent);
    let seconds = Number(el.seconds.textContent);
    
    minutes--;
    seconds = 0;

    if(minutes < 0) {
        minutes = 0;
    }

    timer.updateDisplay(minutes, seconds);
});

el.btnSpeakerNone.addEventListener('click', () => {
    document.documentElement.classList.toggle('music-on');
    if(document.documentElement.classList.contains('music-on') && document.documentElement.classList.contains('bts')) {
        sound.btsMusic.play();
        sound.btsMusic.volume = 0.2;
    } else if(document.documentElement.classList.contains('music-on') && document.documentElement.classList.contains('pokemon')) {
        sound.pokemonMusic.play();
    } else if(document.documentElement.classList.contains('music-on') && document.documentElement.classList.contains('anime-girl')) {
        sound.animeVibeMusic.play();
    } else {
        sound.digimonMusic.play();
    }
});

el.btnSpeakerHigh.addEventListener('click', () => {
    document.documentElement.classList.toggle('music-on');
    if(!document.documentElement.classList.contains('music-on')) {
        state.isMute;

        sound.btsMusic.pause();
        sound.pokemonMusic.pause();
        sound.animeVibeMusic.pause();
        sound.digimonMusic.pause();
    }
});

el.btsCard.addEventListener("click", () => {
    document.body.style.backgroundColor = '#9b42f5';
    document.documentElement.classList.add('music-on');

    if(!document.documentElement.classList.contains('bts')) {
        document.documentElement.classList.remove('pokemon');
        sound.pokemonMusic.pause();
        document.documentElement.classList.remove('anime-girl');
        sound.animeVibeMusic.pause();
        document.documentElement.classList.remove('digimon');
        sound.digimonMusic.pause();
        document.documentElement.classList.add('bts');
    }

    sound.btsMusic.play();
    sound.btsMusic.volume = 0.2;
});

el.pokemonCard.addEventListener("click", () => {
    document.body.style.backgroundColor = '#e8cb25';
    document.documentElement.classList.add('music-on');

    if(!document.documentElement.classList.contains('pokemon')) {
         document.documentElement.classList.remove('bts');
         sound.btsMusic.pause();
         document.documentElement.classList.remove('anime-girl');
         sound.animeVibeMusic.pause();
         document.documentElement.classList.remove('digimon');
         sound.digimonMusic.pause();
         document.documentElement.classList.add('pokemon');
        }

        sound.pokemonMusic.play();
        sound.pokemonMusic.volume = 0.2;
});

el.animeGirlCard.addEventListener("click", () => {
    document.documentElement.classList.add('music-on');
    document.body.style.backgroundColor = '#a11263';

    if(!document.documentElement.classList.contains('anime-girl')) {
        document.documentElement.classList.remove('bts');
        sound.btsMusic.pause();
        document.documentElement.classList.remove('pokemon');
        sound.pokemonMusic.pause();
        document.documentElement.classList.remove('digimon');
        sound.digimonMusic.pause();
        document.documentElement.classList.add('anime-girl');
    }

    sound.animeVibeMusic.play();
    sound.animeVibeMusic.volume = 0.2;
});

el.digimonCard.addEventListener("click", () => {
    document.documentElement.classList.add('music-on');
    document.body.style.backgroundColor = '#e87025';

    if(!document.documentElement.classList.contains('digimon')) {
        document.documentElement.classList.remove('bts');
        sound.btsMusic.pause();
        document.documentElement.classList.remove('pokemon');
        sound.pokemonMusic.pause();
        document.documentElement.classList.remove('anime-girl');
        sound.animeVibeMusic.pause();
        document.documentElement.classList.add('digimon');
    }

    sound.digimonMusic.play();
    sound.digimonMusic.volume = 0.2;
});