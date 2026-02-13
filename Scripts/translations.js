// Author: Nazif Rahiq
// Translations file for English and Turkish

const translations = {
    en: {
        'invite-text': 'YOU ARE CORDIALLY INVITED TO<BR> CELEBRATE THE WEDDING OF',
        'celebrate-text': 'WE WOULD LIKE TO INVITE YOU TO CELEBRATE <br> WITH US THE MOST SPECIAL DAY OF OUR LIVES. IT <br> WOULD BE AN HONOR TO HAVE YOU PRESENT AT <BR> THIS IMPORTANT MOMENT.',
        'close-btn': 'Close',
        'reveal': 'Reveal',
        'tap-discover': 'TAP TO DISCOVER THE DATE OF THE WEDDING',
        'getting-married': 'WE ARE GETTING MARRIED!',
        'countdown': 'Countdown Timer:',
        'days': 'DAYS',
        'hours': 'HOURS',
        'minutes': 'MINUTES',
        'seconds': 'SECONDS',
        'until-big-day': 'until the big day!',
        'celebration-location': 'THE CELEBRATION WILL TAKE PLACE AT',
        'location-name': 'Park De Heerlijkheid',
        'location-address': 'Herikweg 5<br>3193 KC Hoogvliet, Rotterdam,<br>The Netherlands',
        'date-location': 'May 17, 2026'
    },
    tr: {
        'invite-text': 'SİZ DÜĞÜNÜMÜZE DAVET EDİLİYORSUNUZ',
        'celebrate-text': 'HAYATIMIZıN EN ÖZEL GÜNÜNÜ BİZİMLE KUTLAMAK İÇİN DAVET EDİLİYORSUNUZ. BU ÖNEMLI ANINDA BİZİMLE BULUNMANIZ BÜYÜK BİR ONUR OLACAK.',
        'close-btn': 'Kapat',
        'reveal': 'Ortaya Çıkar',
        'tap-discover': 'DÜĞÜNÜMÜZÜN TARİHİNİ ÖĞRENMEK İÇİN DOKUNUN',
        'getting-married': 'EvLENİYORUZ!',
        'countdown': 'Geri Sayım:',
        'days': 'GÜNLER',
        'hours': 'SAATLER',
        'minutes': 'DAKİKALAR',
        'seconds': 'SANİYELER',
        'until-big-day': 'büyük güne kadar!',
        'celebration-location': 'KUTLAMA ŞURADA GERÇEKLEŞTİRİLECEK',
        'location-name': 'Park De Heerlijkheid',
        'location-address': 'Herikweg 5<br>3193 KC Hoogvliet, Rotterdam,<br>The Netherlands',
        'date-location': 'May 17, 2026'
    }
};

let currentLanguage = 'en';

document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('langToggle');
    
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLanguage = currentLanguage === 'en' ? 'tr' : 'en';
            updateLanguage();
            updateToggleButton();
        });
    }
});

function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            el.innerHTML = translations[currentLanguage][key];
        }
    });
}

function updateToggleButton() {
    const btn = document.getElementById('langToggle');
    if (btn) {
        btn.textContent = currentLanguage === 'en' ? '🇹🇷 TR' : '🇬🇧 EN';
    }
}
