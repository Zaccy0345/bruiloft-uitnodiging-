// Author: Nazif Rahiq
// Datum: 9-2-2026

// Bruiloft kaart Izzet

// Datum bolletjes
const datumBolletjes = document.querySelectorAll('.datum-bolletje');
const weAreGettingMarriedText = document.querySelector('.weAreGettingMarried');

datumBolletjes.forEach(bolletje => {
  bolletje.addEventListener('click', () => {
    bolletje.classList.add('revealed');
    
    // Check of alle bolletjes geopend zijn
    const allRevealed = document.querySelectorAll('.datum-bolletje.revealed').length;
    
    if (allRevealed === 3) {
      // Confetti effect
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      
      // Toon de "WE ARE GETTING MARRIED!" tekst
      weAreGettingMarriedText.classList.add('revealed-text');
    }
  });
});

// Scroll animation voor "until the big day!"
const untilBigDayText = document.querySelector('.untilBigDay');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.5 });

if (untilBigDayText) {
  observer.observe(untilBigDayText);
}

// Countdown Timer
function updateCountdown() {
  const weddingDate = new Date('2026-09-10').getTime();
  
  setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
  }, 1000);
}

updateCountdown();


const curtains = document.querySelectorAll('.curtain');
const closeBtn = document.querySelector('.close-btn');

curtains.forEach(curtain => {
  curtain.addEventListener('click', () => {
    curtains.forEach(c => c.classList.add('open'));
  });
});

closeBtn.addEventListener('click', () => {
  curtains.forEach(c => c.classList.remove('open'));
});