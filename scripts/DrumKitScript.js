function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`); // for generic div
    if (!audio) return; // if a wrong key is pressed, do nothing
    audio.currentTime = 0; // rewind for repeated play
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip it if it not a trasnform
    this.classList.remove('playing');
    // key.classList.remove('playing');
    // e.target.classList.remove('playing');
}

// const keys = document.querySelesctorAll('.key');
const keys = Array.from(document.querySelectorAll('div')); // for generic div
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);