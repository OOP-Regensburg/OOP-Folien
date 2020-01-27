# Memory & Files

<span class="subtitle">Heap. Stack und der Garbage Collector</span>

<span class="blocktext">Struktur und Inhalt des Kurses wurden 2012 von Markus Heckner entwickelt. Im Anschluss haben Alexander Bazo und Christian Wolff Änderungen am Material vorgenommen. Die aktuellen Folien wurden von Alexander Bazo erstellt und können unter der [MIT-Lizenz](https://raw.githubusercontent.com/OOP-Regensburg/OOP-Folien/master/LICENSE) verwendet werden.</span>

>>>

### Aktueller Semesterfortschritt (Woche 12)

<table class="lecture-plan">
<thead>
<tr>
<th>Kursabschnitt</th>
<th>Themen</th>
</tr>
</thead>
<tbody>
<tr>
<td>Grundlagen</td>
<td>
<span class="done">Einführung</span>
<span class="done">Einfache Programme erstellen</span>
<span class="done">Variablen, Klassen &amp; Objekte</span>
<span class="done">Kontrollstrukturen &amp; Methoden</span>
<span class="done">Arrays &amp; komplexe Schleife</span></td>
</tr>
<tr>
<td>Klassenmodellierung</td>
<td>
<span class="done">Grundlagen der Klassenmodellierung</span>
<span class="done">Vererbung &amp; Sichtbarkeit</span>
</tr>
<tr>
<td>Interaktive Anwendungen</td>
<td>
<span class="done">Event-basierten Programmierung</span>
<span class="done">String- &amp; Textverarbeitung</span>
</tr>
<tr>
<td>Datenstrukturen</td>
<td>
<span class="done">Listen, Maps &amp; die Collections</span>
<span class="current">Speicherverwaltung</span>
<span class="current">Umgang mit Dateien</span>
</tr>
<tr>
<td>Software Engineering</td>
<td>
<span class="done">Debugging</span>
<span>Planhaftes Vorgehen bei der Softwareentwicklung</span>
<span>Qualitätsaspekte von Quellcode</span>
</tr>
</tbody>
</table>

>>>

## Pingo-Quiz

![large-image](slides/images/pingo-2020-01-27.png)

https://pingo.coactum.de/534961

>>>

## Das Programm für heute

- Speicherverwaltung in Java
- Der *Garbage Collector*
- Tipps und Tricks zum Lesen und **Schreiben** von Dateien

>>>

## Ausblick auf die nächsten Wochen

- In der nächsten Woche finden die letzte Vorlesung statt: *Wir werfen einen Blick auf die Klausur und die kommenden Semester*
- Die Klausur findet am 18. Februar von 12:30 bis 14:00 Uhr statt (Weitere Informationen folgen)
- Vielen Dank für die Teilnahme an unserer *Logging*-Studie: Wir würden uns freuen, wenn Sie uns auch in dieser Woche Daten aus den Übungen bereitstellen

<span class="hint">Vergessen Sie nicht die **Klausuranmeldung** in Flexnow vom 1. bis zum 9. Februar!</span>

>>>

# Speicher auf Ihrem Computer

>>>

# Speicherverwaltung im Betriebssystem und in unserern Anwendungen

>>>

# Der Garbage Collector

>>>

# Dateien als Möglichkeit zur dauerhaften Speicherung von Informationen

>>>

# Walkthrough: Heap Visualizer

>>>

## Zusammenfassung

- Speicher in Java unterteilt sich in Heap und Stack: Auf dem Stack werden lokale Variablen und Parameter abgelegt
- Alle Objekte (komplexe Typen) liegen auf dem Heap
- Der Stack verweist auf komplexe Datentypen auf dem Heap (Pointer), auch der Heap kann auf andere Objekte auf dem Heap verweisen
- Der Heap wächst "von oben", der Stack "von unten" – Treffen sich beide in der Mitte, entsteht ein Stack Overflow
- Der Garbage Collector räumt nicht mehr referenzierte Objekte auf und hilft somit Stack Overflow zu vermeiden und den Speicherbedarf eines Programms gering zu halten

>>>

### Vielen Dank für Ihre Aufmerksamkeit. Wenn Sie möchten, sehen wir uns im Anschluss in der Zentralübung!

<span class="blocktext">Fragen oder Probleme? In allgemeinen Angelegenheiten und bei Fragen zur Vorlesung wenden Sie sich bitte an Alexander Bazo (alexander.bazo@ur.de). Bei organisatorischen Fragen zu den Studienleistungen und Übungsgruppen schreiben Sie bitte Florin Schwappach (florin.schwappach@ur.de). Bei inhaltlichen Fragen zu den Übungen, Beispielen und Studienleistungen schreiben Sie uns unter mi.oop@mailman.uni-regensburg.de.</span>

>>>

### Quellen

<span class="sources">Eric S. Roberts, *The art and science of Java: an introduction to computer science*, *New international Edition*, 1. Ausgabe, Pearson, Harlow, UK, 2014.
</span>