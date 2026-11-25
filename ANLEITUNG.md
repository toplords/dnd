# Anleitung: Webseite bearbeiten

Diese Anleitung erklärt dir, wie du die Webseite bearbeiten kannst, auch ohne Programmierkenntnisse.

## 1. Dateien bearbeiten

1. Gehe auf GitHub und öffne die Datei, die du bearbeiten möchtest
2. Klicke auf das Stift-Symbol (bearbeiten)
3. Mach deine Änderungen
4. Klicke auf "Commit changes"
5. Nach ca. 1-2 Minuten sind deine Änderungen online

## 2. Markdown-Spickzettel

### Überschriften

```
# Überschrift 1 (größte Schrift)
## Überschrift 2
### Überschrift 3
```

### Listen

```
- Punkt 1
- Punkt 2
- Punkt 3
```

### Fetter Text

```
**Dieser Text ist fett**
```

### Kursiver Text

```
*Dieser Text ist kursiv*
```

### Zitate (Hinweis-Boxen)

```
> Dies ist ein Hinweis
```

### Bilder einfügen

```
![Beschreibung des Bildes](assets/img/bildname.jpg)
```

### Tabellen

```
| Spalte 1 | Spalte 2 |
|----------|----------|
| Zelle 1  | Zelle 2  |
| Zelle 3  | Zelle 4  |
```

## 3. Bilder hochladen

1. Lade dein Bild hoch nach `assets/img/`
2. Notiere dir den Dateinamen
3. Füge das Bild mit `![Beschreibung](assets/img/DATEINAMEN.jpg)` ein

## 4. Kapitäne ändern

Bearbeite die Datei `_data/kapitaene.yml`:

- Ändere die Liste der Kapitäne
- Setze das `startdatum` auf den Tag, an dem der erste Kapitän dran sein soll
- Wenn du die Liste änderst, setze das Startdatum auf den Tag, an dem der erste Kapitän der neuen Liste dran sein soll

## 5. Menüpunkte ändern

Bearbeite die Datei `_data/navigation.yml`:

- Füge neue Menüpunkte hinzu oder ändere bestehende
- Achte auf die richtige Einrückung (2 Leerzeichen)

## 6. Dateien, die du nicht ändern solltest

- `_layouts/` - Layouts für die Seiten
- `_includes/` - Wiederverwendbare Komponenten
- `assets/css/` - Stylesheets
- `assets/js/` - JavaScript-Dateien

## 7. Fragen?

Falls du Fragen hast, wende dich an einen Administrator.
