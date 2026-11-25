// Google Translate Widget Steuerung
document.addEventListener('DOMContentLoaded', function() {
  const sprachauswahl = document.getElementById('sprachauswahl');
  
  if (!sprachauswahl) return;
  
  // Gespeicherte Sprache aus localStorage laden
  const gespeicherteSprache = localStorage.getItem('gewaehlteSprache');
  
  if (gespeicherteSprache && gespeicherteSprache !== 'de') {
    setzeSprache(gespeicherteSprache);
  }
  
  // Sprachauswahl ändern
  sprachauswahl.addEventListener('change', function() {
    const ausgewaehlteSprache = this.value;
    
    if (ausgewaehlteSprache === 'de') {
      // Deutsch: Cookie entfernen
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      localStorage.removeItem('gewaehlteSprache');
    } else {
      setzeSprache(ausgewaehlteSprache);
    }
  });
  
  // URL-Parameter ?lang=xx auswerten
  const urlParams = new URLSearchParams(window.location.search);
  const urlSprache = urlParams.get('lang');
  
  if (urlSprache && urlSprache !== 'de') {
    setzeSprache(urlSprache);
    sprachauswahl.value = urlSprache;
  }
  
  function setzeSprache(sprache) {
    // Cookie setzen
    document.cookie = 'googtrans=/de/' + sprache + '; path=/; max-age=31536000;';
    localStorage.setItem('gewaehlteSprache', sprache);
    
    // Google Translate Widget laden
    loadGoogleTranslate(sprache);
  }
  
  function loadGoogleTranslate(sprache) {
    // Wenn das Widget schon geladen ist, Sprache ändern
    if (window.google && window.google.translate) {
      window.google.translate.translatePage(sprache);
    } else {
      // Widget laden
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
      
      // Globale Funktion für Init
      window.googleTranslateElementInit = function() {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement({ pageLanguage: 'de' }, 'google_translate_element');
          window.google.translate.translatePage(sprache);
        }
      };
    }
  }
});
