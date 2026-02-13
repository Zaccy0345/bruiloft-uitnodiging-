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
    },
    nl: {
        'invite-text': 'U BENT HARTELIJK UITGENODIGD OM<BR> HET HUWELIJK VAN ONS TE VIEREN',
        'celebrate-text': 'WIJ WILLEN U UITNODIGEN OM DE MOOISTE DAG VAN ONS LEVEN MET ONS TE VIEREN. HET ZOU EEN GROTE EER ZIJN ALS U AANWEZIG BENT BIJ DIT BELANGRIJK MOMENT.',
        'close-btn': 'Sluiten',
        'reveal': 'Onthullen',
        'tap-discover': 'TIK OM DE DATUM VAN HET HUWELIJK TE ONTDEKKEN',
        'getting-married': 'WIJ TROUWEN!',
        'countdown': 'Aftelklok:',
        'days': 'DAGEN',
        'hours': 'UREN',
        'minutes': 'MINUTEN',
        'seconds': 'SECONDEN',
        'until-big-day': 'tot de grote dag!',
        'celebration-location': 'HET FEEST ZAL PLAATSVINDEN OP',
        'location-name': 'Park De Heerlijkheid',
        'location-address': 'Herikweg 5<br>3193 KC Hoogvliet, Rotterdam,<br>Nederland',
        'date-location': '17 mei 2026'
    }
};

let currentLanguage = 'en';

document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('langToggle');
    
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            // Cycle through languages: en -> tr -> nl -> en
            if (currentLanguage === 'en') {
                currentLanguage = 'tr';
            } else if (currentLanguage === 'tr') {
                currentLanguage = 'nl';
            } else {
                currentLanguage = 'en';
            }
            updateLanguage();
            updateToggleButton();
        });
    }
    
    // Initialize button
    updateToggleButton();
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
        if (currentLanguage === 'en') {
            btn.textContent = '🇹🇷 TR';
        } else if (currentLanguage === 'tr') {
            btn.textContent = '🇳🇱 NL';
        } else {
            btn.textContent = '🇬🇧 EN';
        }
    }
}
