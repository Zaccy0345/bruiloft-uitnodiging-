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

// Scroll animations met IntersectionObserver
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.classList.add('show');
      // Optional: stop observing after animation
      scrollObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

// Voeg alle elementen toe die moeten animeren
const elementsToAnimate = document.querySelectorAll(
  '.datumVanDeBruiloftH1, .paragraafDatumVanDeBruiloft, .datumVanDeBruiloftBolletjes, ' +
  '.h1CountDownTimer, .countdown-display, .untilBigDay, ' +
  '.locationParagraaf, .venue-illustration, .locationNaam, .straatNaameVilla, ' +
  '.datumVanDeBruiloftLocation'
);

elementsToAnimate.forEach(element => {
  scrollObserver.observe(element);
});

// Countdown Timer
function updateCountdown() {
  const weddingDate = new Date('2026-05-17').getTime();
  
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