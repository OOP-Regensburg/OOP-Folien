# Einfache String- und Textverarbeitung

<span class="subtitle"></span>

<span class="blocktext">Struktur und Inhalt des Kurses wurden 2012 von Markus Heckner entwickelt. Im Anschluss haben Alexander Bazo und Christian Wolff Änderungen am Material vorgenommen. Die aktuellen Folien wurden von Alexander Bazo erstellt und können unter der [MIT-Lizenz](https://raw.githubusercontent.com/OOP-Regensburg/OOP-Folien/master/LICENSE) verwendet werden.</span>

>>>

### Aktueller Semesterfortschritt (Woche 6)

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
<span class="current">String- &amp; Textverarbeitung</span>
</tr>
<tr>
<td>Datenstrukturen</td>
<td>
<span>Listen, Maps &amp; die Collections</span>
<span>Speicherverwaltung</span>
<span>Umgang mit Dateien</span>
</tr>
<tr>
<td>Software Engineering</td>
<td>
<span>Planhaftes Vorgehen bei der Softwareentwicklung</span>
<span>Qualitätsaspekte von Quellcode</span>
</tr>
</tbody>
</table>

>>>

## Pingo-Quiz

![large-image](slides/images/pingo-2019-12-10.png)

https://pingo.coactum.de/442924

>>>

## Das Programm für heute

- Zustände und Optionen durch Enums abbilden
- Repräsentation von Zeichen über den `char`-Datentyp
- Zeichenketten mit Strings abbilden und modifizieren

>>>

# Enumeration

>>>

# Einzelne Zeichen: Char und ASCII

>>>

# Texte verarbeiten mit der String-Klasse

>>>

## Zusammenfassung 

- Mittels Enumeration werden einer zusammengehörigen Set von Werten lesbare Namen gegeben – Der Programmierer greift anhand von benannten Konstanten auf die Werte zu
- Einzelne Zeichen werden in Java als char gespeichert – Jedem char ist eine Ganzzahl zugeordnet (Enumeration)
- Strings sind immutable, d.h. nach Erzeugung eines Objekts nicht mehr veränderbar
- Strings lassen sich mit der Methode split in einzelne Tokens (=Substrings) zerlegen

>>>

### Vielen Dank für Ihre Aufmerksamkeit. Wenn Sie möchten, sehen wir uns im Anschluss in der Zentralübung!

<span class="blocktext">Fragen oder Probleme? In allgemeinen Angelegenheiten und bei Fragen zur Vorlesung wenden Sie sich bitte an Alexander Bazo (alexander.bazo@ur.de). Bei organisatorischen Fragen zu den Studienleistungen und Übungsgruppen schreiben Sie bitte Florin Schwappach (florin.schwappach@ur.de). Bei inhaltlichen Fragen zu den Übungen, Beispielen und Studienleistungen schreiben Sie uns unter mi.oop@mailman.uni-regensburg.de.</span>

>>>

### Quellen

<span class="sources">Eric S. Roberts, *The art and science of Java: an introduction to computer science*, *New international Edition*, 1. Ausgabe, Pearson, Harlow, UK, 2014.
</span>