// Berechnung der täglichen Kapitäne-Rotation
document.addEventListener('DOMContentLoaded', function() {
  const kapitaeneContainer = document.getElementById('kapitaene-container');
  
  if (!kapitaeneContainer) return;
  
  // Daten aus dem JSON-Skript tag
  const dataScript = document.getElementById('kapitaene-data');
  if (!dataScript) {
    kapitaeneContainer.innerHTML = '<p>Fehler: Daten konnten nicht geladen werden.</p>';
    return;
  }
  
  let data;
  try {
    data = JSON.parse(dataScript.textContent);
  } catch (e) {
    kapitaeneContainer.innerHTML = '<p>Fehler: Daten sind ungültig.</p>';
    return;
  }
  
  const startdatum = new Date(data.startdatum);
  const wechselUhrzeit = data.wechsel_uhrzeit || '00:00';
  const anzahlTage = data.anzahl_tage || 30;
  const kapitaene = data.kapitaene || [];
  
  if (kapitaene.length === 0) {
    kapitaeneContainer.innerHTML = '<p>Keine Kapitäne in der Liste.</p>';
    return;
  }
  
  // Heutiges Datum in Europe/Berlin Zeitzone
  const jetzt = new Date();
  const jetzigeStunde = jetzt.getHours();
  const jetzigeMinute = jetzt.getMinutes();
  
  // Wechselzeit berechnen (Wechsel um 00:00 oder andere Uhrzeit)
  const wechselStunde = parseInt(wechselUhrzeit.split(':')[0], 10);
  const wechselMinute = parseInt(wechselUhrzeit.split(':')[1], 10);
  
  // Wenn wir vor der Wechselzeit sind, zählen wir den heutigen Tag noch nicht
  let heute = new Date(jetzt.getFullYear(), jetzt.getMonth(), jetzt.getDate());
  if (jetzigeStunde < wechselStunde || (jetzigeStunde === wechselStunde && jetzigeMinute < wechselMinute)) {
    heute = new Date(heute.getFullYear(), heute.getMonth(), heute.getDate() - 1);
  }
  
  // Tage seit Start berechnen
  const startTag = new Date(startdatum.getFullYear(), startdatum.getMonth(), startdatum.getDate());
  const tageSeitStart = Math.floor((heute - startTag) / (1000 * 60 * 60 * 24));
  
  // Aktuellen Index berechnen (funktioniert auch für Daten vor dem Startdatum)
  const index = ((tageSeitStart % kapitaene.length) + kapitaene.length) % kapitaene.length;
  
  // Tabelle generieren
  let html = '<table class="kapitaene-table"><thead><tr><th>Datum</th><th>Kapitän</th></tr></thead><tbody>';
  
  // Heute
  html += '<tr class="heute"><td><strong>Heute</strong></td><td><span class="notranslate">' + kapitaene[index] + '</span></td></tr>';
  
  // Morgen
  const morgenIndex = (index + 1) % kapitaene.length;
  html += '<tr class="morgen"><td>Morgen</td><td><span class="notranslate">' + kapitaene[morgenIndex] + '</span></td></tr>';
  
  // Folgende Tage
  let aktuellerIndex = (index + 2) % kapitaene.length;
  const heuteDatum = new Date(heute);
  
  for (let i = 0; i < anzahlTage - 2; i++) {
    const tagDatum = new Date(heuteDatum.getFullYear(), heuteDatum.getMonth(), heuteDatum.getDate() + i + 1);
    html += '<tr><td>' + tagDatum.toLocaleDateString('de-DE') + '</td><td><span class="notranslate">' + kapitaene[aktuellerIndex] + '</span></td></tr>';
    aktuellerIndex = (aktuellerIndex + 1) % kapitaene.length;
  }
  
  html += '</tbody></table>';
  kapitaeneContainer.innerHTML = html;
});
